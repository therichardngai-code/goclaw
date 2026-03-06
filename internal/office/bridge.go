package office

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"strings"
	"time"

	"github.com/nextlevelbuilder/goclaw/internal/bus"
	"github.com/nextlevelbuilder/goclaw/pkg/protocol"
)

const (
	bridgeSubscriberID = "office-bridge"
	maxSpeechBubble    = 120
)

// stateBroadcaster is the minimal interface Bridge needs from SSEHub (Phase 3).
// Using an interface here avoids a forward dependency on the concrete SSEHub type.
type stateBroadcaster interface {
	BroadcastState(state *OfficeState)
}

// agentEvent mirrors agent.AgentEvent to avoid an import cycle.
// (internal/office must not import internal/agent)
// Fields match agent.AgentEvent JSON tags exactly so json round-trip works.
type agentEvent struct {
	Type    string      `json:"type"`
	AgentID string      `json:"agentId"`
	RunID   string      `json:"runId"`
	Payload interface{} `json:"payload,omitempty"`
	// Delegation context — present when running inside a delegation
	DelegationID  string `json:"delegationId,omitempty"`
	TeamID        string `json:"teamId,omitempty"`
	TeamTaskID    string `json:"teamTaskId,omitempty"`
	ParentAgentID string `json:"parentAgentId,omitempty"`
	// Routing context
	UserID  string `json:"userId,omitempty"`
	Channel string `json:"channel,omitempty"`
	ChatID  string `json:"chatId,omitempty"`
}

// Bridge subscribes to the event bus and drives OfficeState transitions.
// One Bridge per Office; it fans state updates out to the SSE hub after
// each transition.
type Bridge struct {
	state *OfficeState
	hub   stateBroadcaster
	pub   bus.EventPublisher
}

// NewBridge creates a Bridge. hub may be nil (BroadcastState is skipped when nil).
func NewBridge(state *OfficeState, hub stateBroadcaster, pub bus.EventPublisher) *Bridge {
	return &Bridge{state: state, hub: hub, pub: pub}
}

// Start subscribes to the event bus. Must be called before the gateway
// begins processing messages.
func (b *Bridge) Start() {
	b.pub.Subscribe(bridgeSubscriberID, b.handleEvent)
	slog.Info("office.bridge.started")
}

// Stop unsubscribes from the event bus. Called on gateway shutdown.
func (b *Bridge) Stop() {
	b.pub.Unsubscribe(bridgeSubscriberID)
	slog.Info("office.bridge.stopped")
}

// handleEvent is the bus.EventHandler callback.
// All operations are in-memory (mutex + non-blocking channel send in hub),
// so this function never blocks the bus dispatcher.
func (b *Bridge) handleEvent(event bus.Event) {
	b.state.IncrementEventCount()

	switch event.Name {

	// ── Agent events (all subtypes routed via handleAgentEvent) ──────────────
	case protocol.EventAgent:
		b.handleAgentEvent(event.Payload)

	// ── Handoff ──────────────────────────────────────────────────────────────
	case protocol.EventHandoff:
		b.handleHandoff(event.Payload)

	// ── Delegation lifecycle ──────────────────────────────────────────────────
	case protocol.EventDelegationStarted:
		b.handleDelegationStarted(event.Payload)
	case protocol.EventDelegationCompleted:
		b.handleDelegationCompleted(event.Payload)
	case protocol.EventDelegationFailed:
		b.handleDelegationTerminal(event.Payload, "failed")
	case protocol.EventDelegationCancelled:
		b.handleDelegationTerminal(event.Payload, "cancelled")
	case protocol.EventDelegationProgress:
		b.handleDelegationProgress(event.Payload)
	case protocol.EventDelegationAccumulated:
		b.handleDelegationAccumulated(event.Payload)
	case protocol.EventDelegationAnnounce:
		b.handleDelegationAnnounce(event.Payload)
	case protocol.EventQualityGateRetry:
		b.handleQualityGateRetry(event.Payload)

	// ── Team task lifecycle ───────────────────────────────────────────────────
	case protocol.EventTeamTaskCreated:
		b.handleTeamTaskEvent(event.Payload, "created")
	case protocol.EventTeamTaskClaimed:
		b.handleTeamTaskEvent(event.Payload, "claimed")
	case protocol.EventTeamTaskCompleted:
		b.handleTeamTaskEvent(event.Payload, "completed")
	case protocol.EventTeamTaskCancelled:
		b.handleTeamTaskEvent(event.Payload, "cancelled")

	// ── Team CRUD ─────────────────────────────────────────────────────────────
	case protocol.EventTeamCreated:
		b.handleTeamCreated(event.Payload)
	case protocol.EventTeamUpdated:
		b.handleTeamUpdated(event.Payload)
	case protocol.EventTeamDeleted:
		b.handleTeamDeleted(event.Payload)
	case protocol.EventTeamMemberAdded:
		b.handleTeamMemberChanged(event.Payload, "added")
	case protocol.EventTeamMemberRemoved:
		b.handleTeamMemberChanged(event.Payload, "removed")
	case protocol.EventTeamUpserted:
		b.handleTeamUpserted(event.Payload) // legacy fallback

	// ── Team messages ─────────────────────────────────────────────────────────
	case protocol.EventTeamMessageSent:
		b.handleTeamMessageSent(event.Payload)

	// ── Agent links ───────────────────────────────────────────────────────────
	case protocol.EventAgentLinkCreated:
		b.handleAgentLinkCreated(event.Payload)
	case protocol.EventAgentLinkUpdated:
		b.handleAgentLinkUpdated(event.Payload)
	case protocol.EventAgentLinkDeleted:
		b.handleAgentLinkDeleted(event.Payload)

	// ── Agent summoning ─────────────────────────────────────────────────────────
	case protocol.EventAgentSummoning:
		b.handleAgentSummoning(event.Payload)

	// ── System ────────────────────────────────────────────────────────────────
	case protocol.EventShutdown:
		b.addNotification("system", "", "Shutdown signal received")
	}

	// Fan state snapshot out to all connected SSE clients.
	if b.hub != nil {
		b.hub.BroadcastState(b.state)
	}
}

// handleAgentEvent maps agent.AgentEvent subtypes to OfficeState transitions.
func (b *Bridge) handleAgentEvent(payload interface{}) {
	evt := extractAgentEvent(payload)
	if evt.AgentID == "" {
		return
	}

	switch evt.Type {
	case protocol.AgentEventRunStarted:
		b.state.SetAgentState(evt.AgentID, StateThinking, evt.RunID)
		// Channel comes directly on evt now (enriched by emitRun wrapper)
		ch := evt.Channel
		if ch == "" {
			ch = extractStringField(evt.Payload, "channel") // fallback for older events
		}
		if ch != "" {
			b.state.SetAgentChannel(evt.AgentID, normalizeChannelType(ch))
		}
		// Tag member agents visually via ParentAgentID
		if evt.ParentAgentID != "" {
			b.state.SetAgentMeta(evt.AgentID, "", "") // mark as delegation member
		}
		b.state.SetSpeechBubble(evt.AgentID, "Processing...")
		msg := fmt.Sprintf("Agent %s started", evt.AgentID)
		if evt.ParentAgentID != "" {
			msg = fmt.Sprintf("Agent %s started (member of %s)", evt.AgentID, evt.ParentAgentID)
		}
		b.addNotification("run.started", evt.AgentID, msg)

	case protocol.AgentEventRunCompleted:
		b.state.SetAgentState(evt.AgentID, StateIdle, evt.RunID)
		b.state.ClearAgentChannel(evt.AgentID)
		b.addNotification("run.completed", evt.AgentID,
			fmt.Sprintf("Agent %s completed", evt.AgentID))

	case protocol.AgentEventRunFailed:
		b.state.SetAgentState(evt.AgentID, StateError, evt.RunID)
		b.state.ClearAgentChannel(evt.AgentID)
		errMsg := extractStringField(evt.Payload, "error")
		b.addNotification("run.failed", evt.AgentID,
			fmt.Sprintf("Agent %s failed: %s", evt.AgentID, truncate(errMsg, 80)))

	case protocol.AgentEventToolCall:
		b.state.SetAgentState(evt.AgentID, StateToolCalling, evt.RunID)
		toolName := extractStringField(evt.Payload, "name")
		b.state.SetSpeechBubble(evt.AgentID, "Using: "+toolName)
		b.addNotification("tool.call", evt.AgentID,
			fmt.Sprintf("Agent %s calling tool: %s", evt.AgentID, toolName))

	case protocol.AgentEventToolResult:
		// Tool finished — agent goes back to thinking before next iteration.
		b.state.SetAgentState(evt.AgentID, StateThinking, evt.RunID)
		// Resume fallback bubble; streaming channels overwrite with live chunks.
		b.state.SetSpeechBubble(evt.AgentID, "Processing...")

	case protocol.AgentEventRunRetrying:
		b.state.SetSpeechBubble(evt.AgentID, "Retrying...")

	// Chat streaming subtypes — the gateway wires OnEvent with Name=EventAgent for ALL
	// agent events, including chat chunks, so these cases must live here rather than in
	// a separate handler.
	case protocol.ChatEventChunk:
		b.state.SetAgentState(evt.AgentID, StateResponding, evt.RunID)
		content := extractStringField(evt.Payload, "content")
		if content == "" {
			// Payload may be the content string directly.
			if s, ok := evt.Payload.(string); ok {
				content = s
			}
		}
		b.state.SetSpeechBubble(evt.AgentID, truncate(content, maxSpeechBubble))

	case protocol.ChatEventThinking:
		b.state.SetAgentState(evt.AgentID, StateThinking, evt.RunID)
		content := extractStringField(evt.Payload, "content")
		b.state.SetSpeechBubble(evt.AgentID, truncate(content, maxSpeechBubble))

	case protocol.ChatEventMessage:
		// Full message assembled — run.completed event handles the idle transition.
	}
}

// addNotification creates a timestamped notification and appends it to state.
func (b *Bridge) addNotification(typ, agentID, message string) {
	b.state.AddNotification(Notification{
		ID:        fmt.Sprintf("%d", time.Now().UnixNano()),
		AgentID:   agentID,
		Type:      typ,
		Message:   message,
		Timestamp: time.Now(),
	})
}

// extractAgentEvent converts an opaque bus.Event payload into a typed agentEvent.
// Uses a JSON round-trip because the payload is agent.AgentEvent passed as interface{}.
// Import cycle prevents using agent.AgentEvent directly; JSON tags are compatible.
func extractAgentEvent(payload interface{}) agentEvent {
	if payload == nil {
		return agentEvent{}
	}
	data, err := json.Marshal(payload)
	if err != nil {
		slog.Debug("office.bridge: marshal payload failed", "error", err)
		return agentEvent{}
	}
	var evt agentEvent
	if err := json.Unmarshal(data, &evt); err != nil {
		slog.Debug("office.bridge: unmarshal agentEvent failed", "error", err)
		return agentEvent{}
	}
	return evt
}

// extractStringField reads a string field from a map payload.
// Handles both map[string]interface{} and map[string]string.
func extractStringField(payload interface{}, key string) string {
	switch p := payload.(type) {
	case map[string]interface{}:
		if v, ok := p[key]; ok {
			if s, ok := v.(string); ok {
				return s
			}
		}
	case map[string]string:
		return p[key]
	}
	return ""
}

// handleDelegationStarted adds a new arc to ActiveDelegations and emits a notification.
// Uses typed DelegationEventPayload from protocol package.
func (b *Bridge) handleDelegationStarted(payload interface{}) {
	var p protocol.DelegationEventPayload
	if !unmarshalPayload(payload, &p) || p.DelegationID == "" {
		return
	}

	b.state.AddDelegation(OfficeDelegation{
		ID:                p.DelegationID,
		SourceID:          p.SourceAgentKey,
		TargetID:          p.TargetAgentKey,
		SourceDisplayName: p.SourceDisplayName,
		TargetDisplayName: p.TargetDisplayName,
		Task:              p.Task,
		Status:            "running",
		Mode:              p.Mode,
		TeamID:            p.TeamID,
		TeamTaskID:        p.TeamTaskID,
		StartedAt:         time.Now(),
	})
	// Show handshake speech bubbles
	if p.SourceAgentKey != "" {
		b.state.SetSpeechBubble(p.SourceAgentKey, "→ Briefing "+nameOf(p.TargetDisplayName, p.TargetAgentKey)+"...")
	}
	if p.TargetAgentKey != "" {
		b.state.SetSpeechBubble(p.TargetAgentKey, "← Receiving task...")
	}
	b.addNotification("delegation", p.SourceAgentKey,
		fmt.Sprintf("Delegation: %s → %s [%s]",
			nameOf(p.SourceDisplayName, p.SourceAgentKey),
			nameOf(p.TargetDisplayName, p.TargetAgentKey), p.Mode))
}

// handleDelegationCompleted marks the arc as completed and emits a notification.
func (b *Bridge) handleDelegationCompleted(payload interface{}) {
	var p protocol.DelegationEventPayload
	if !unmarshalPayload(payload, &p) || p.DelegationID == "" {
		return
	}
	b.state.CompleteDelegation(p.DelegationID, "completed")
	b.addNotification("delegation", p.TargetAgentKey,
		fmt.Sprintf("Delegation completed: %s", nameOf(p.TargetDisplayName, p.TargetAgentKey)))
}

// handleDelegationTerminal marks the arc with the given terminal status (cancelled/failed).
func (b *Bridge) handleDelegationTerminal(payload interface{}, status string) {
	var p protocol.DelegationEventPayload
	if !unmarshalPayload(payload, &p) || p.DelegationID == "" {
		return
	}
	b.state.CompleteDelegation(p.DelegationID, status)
	// Store error message for failed delegations
	if status == "failed" && p.Error != "" {
		b.state.SetDelegationError(p.DelegationID, p.Error)
	}
	b.addNotification("delegation", p.TargetAgentKey,
		fmt.Sprintf("Delegation %s: %s", status, nameOf(p.TargetDisplayName, p.TargetAgentKey)))
}

// handleDelegationProgress updates elapsed timers on active arcs.
func (b *Bridge) handleDelegationProgress(payload interface{}) {
	var p protocol.DelegationProgressPayload
	if !unmarshalPayload(payload, &p) {
		return
	}
	for _, d := range p.Active {
		b.state.UpdateDelegationElapsed(d.DelegationID, d.ElapsedMS)
	}
	// No notification — progress is silent, just updates arc labels.
}

// handleDelegationAccumulated dims member + shows lead waiting bubble.
func (b *Bridge) handleDelegationAccumulated(payload interface{}) {
	var p protocol.DelegationAccumulatedPayload
	if !unmarshalPayload(payload, &p) {
		return
	}
	// Mark delegation as accumulated so UI can dim the arc
	if p.DelegationID != "" {
		b.state.SetDelegationStatus(p.DelegationID, "accumulated")
	}
	if p.TargetAgentKey != "" {
		b.state.SetSpeechBubble(p.TargetAgentKey, "Done — waiting for team...")
	}
	if p.SourceAgentKey != "" {
		b.state.SetSpeechBubble(p.SourceAgentKey, "Waiting for teammates...")
	}
	b.addNotification("delegation", p.TargetAgentKey,
		fmt.Sprintf("%s result ready, %d sibling(s) still running",
			nameOf(p.TargetDisplayName, p.TargetAgentKey), p.SiblingsRemaining))
}

// handleDelegationAnnounce shows "all results in" on lead bubble.
func (b *Bridge) handleDelegationAnnounce(payload interface{}) {
	var p protocol.DelegationAnnouncePayload
	if !unmarshalPayload(payload, &p) {
		return
	}
	if p.SourceAgentKey != "" {
		b.state.SetSpeechBubble(p.SourceAgentKey, "All results in!")
	}
	summary := fmt.Sprintf("Delegation results: %d agent(s), %dms total",
		len(p.Results), p.TotalElapsedMS)
	b.addNotification("delegation", p.SourceAgentKey, summary)
}

// handleQualityGateRetry shows retry bubble on member agent.
func (b *Bridge) handleQualityGateRetry(payload interface{}) {
	var p protocol.QualityGateRetryPayload
	if !unmarshalPayload(payload, &p) {
		return
	}
	bubble := fmt.Sprintf("Retry %d/%d", p.Attempt, p.MaxRetries)
	if p.Feedback != "" {
		bubble += ": " + truncate(p.Feedback, 60)
	}
	if p.TargetAgentKey != "" {
		b.state.SetSpeechBubble(p.TargetAgentKey, bubble)
	}
	b.addNotification("delegation", p.TargetAgentKey,
		fmt.Sprintf("Quality gate retry %d/%d [%s]: %s",
			p.Attempt, p.MaxRetries, p.GateType, truncate(p.Feedback, 60)))
}

// handleTeamTaskEvent handles team task lifecycle events.
func (b *Bridge) handleTeamTaskEvent(payload interface{}, action string) {
	var p protocol.TeamTaskEventPayload
	if !unmarshalPayload(payload, &p) {
		return
	}

	// Store task in state for UI visualization
	switch action {
	case "created":
		b.state.UpsertTask(OfficeTask{
			ID:        p.TaskID,
			TeamID:    p.TeamID,
			Subject:   p.Subject,
			Status:    p.Status,
			Timestamp: time.Now(),
		})
		b.addNotification("team", "", fmt.Sprintf("Task created: %s", truncate(p.Subject, 50)))

	case "claimed":
		b.state.UpsertTask(OfficeTask{
			ID:               p.TaskID,
			TeamID:           p.TeamID,
			Subject:          p.Subject,
			Status:           p.Status,
			OwnerAgentKey:    p.OwnerAgentKey,
			OwnerDisplayName: p.OwnerDisplayName,
			Timestamp:        time.Now(),
		})
		b.addNotification("team", "", fmt.Sprintf("%s claimed: %s", nameOf(p.OwnerDisplayName, p.OwnerAgentKey), truncate(p.Subject, 50)))

	case "completed":
		b.state.UpsertTask(OfficeTask{
			ID:               p.TaskID,
			TeamID:           p.TeamID,
			Subject:          p.Subject,
			Status:           p.Status,
			OwnerAgentKey:    p.OwnerAgentKey,
			OwnerDisplayName: p.OwnerDisplayName,
			Timestamp:        time.Now(),
		})
		b.addNotification("team", "", fmt.Sprintf("Task completed: %s", truncate(p.Subject, 50)))

	case "cancelled":
		b.state.UpsertTask(OfficeTask{
			ID:        p.TaskID,
			TeamID:    p.TeamID,
			Subject:   p.Subject,
			Status:    p.Status,
			Reason:    p.Reason,
			Timestamp: time.Now(),
		})
		b.addNotification("team", "", fmt.Sprintf("Task cancelled: %s", truncate(p.Reason, 50)))
	}
}

// handleTeamCreated creates a new team platform.
func (b *Bridge) handleTeamCreated(payload interface{}) {
	var p protocol.TeamCreatedPayload
	if !unmarshalPayload(payload, &p) || p.TeamID == "" {
		return
	}
	b.state.UpsertTeam(OfficeTeam{
		ID:              p.TeamID,
		Name:            p.TeamName,
		LeadID:          p.LeadAgentKey,
		LeadDisplayName: p.LeadDisplayName,
	})
	b.addNotification("team", "", fmt.Sprintf("Team created: %s (%d members)", p.TeamName, p.MemberCount))
}

// handleTeamUpdated updates team settings.
func (b *Bridge) handleTeamUpdated(payload interface{}) {
	var p protocol.TeamUpdatedPayload
	if !unmarshalPayload(payload, &p) || p.TeamID == "" {
		return
	}
	// Partial update — only update name if we have the team
	if team, ok := b.state.Teams[p.TeamID]; ok {
		team.Name = p.TeamName
		b.state.UpdatedAt = time.Now()
	}
	b.addNotification("team", "", fmt.Sprintf("Team updated: %s", p.TeamName))
}

// handleTeamDeleted removes team platform — fixes ghost bug.
func (b *Bridge) handleTeamDeleted(payload interface{}) {
	var p protocol.TeamDeletedPayload
	if !unmarshalPayload(payload, &p) || p.TeamID == "" {
		return
	}
	b.state.RemoveTeam(p.TeamID)
	b.addNotification("team", "", fmt.Sprintf("Team deleted: %s", p.TeamName))
}

// handleTeamMemberChanged updates team membership.
func (b *Bridge) handleTeamMemberChanged(payload interface{}, action string) {
	var p protocol.TeamMemberAddedPayload
	if !unmarshalPayload(payload, &p) || p.TeamID == "" {
		return
	}
	// Note: For removal, TeamMemberRemovedPayload has same fields we need
	if team, ok := b.state.Teams[p.TeamID]; ok {
		if action == "added" {
			team.Members = append(team.Members, p.AgentKey)
		} else {
			// Remove member
			for i, m := range team.Members {
				if m == p.AgentKey {
					team.Members = append(team.Members[:i], team.Members[i+1:]...)
					break
				}
			}
		}
		b.state.UpdatedAt = time.Now()
	}
	b.addNotification("team", "",
		fmt.Sprintf("Member %s: %s", action, nameOf(p.DisplayName, p.AgentKey)))
}

// handleTeamMessageSent handles team message events.
func (b *Bridge) handleTeamMessageSent(payload interface{}) {
	var p protocol.TeamMessageEventPayload
	if !unmarshalPayload(payload, &p) {
		return
	}
	b.addNotification("team", p.FromAgentKey,
		fmt.Sprintf("%s -> %s: %s",
			nameOf(p.FromDisplayName, p.FromAgentKey),
			nameOf(p.ToDisplayName, p.ToAgentKey),
			truncate(p.Preview, 40)))
}

// handleAgentLinkCreated adds a persistent arc to state.
func (b *Bridge) handleAgentLinkCreated(payload interface{}) {
	var p protocol.AgentLinkCreatedPayload
	if !unmarshalPayload(payload, &p) || p.LinkID == "" {
		return
	}
	b.state.UpsertAgentLink(OfficeAgentLink{
		ID:             p.LinkID,
		SourceAgentKey: p.SourceAgentKey,
		TargetAgentKey: p.TargetAgentKey,
		Direction:      p.Direction,
		Status:         p.Status,
		TeamID:         p.TeamID,
	})
	b.addNotification("agent_link", "",
		fmt.Sprintf("Link created: %s -> %s [%s]", p.SourceAgentKey, p.TargetAgentKey, p.Direction))
}

// handleAgentLinkUpdated updates a persistent arc.
func (b *Bridge) handleAgentLinkUpdated(payload interface{}) {
	var p protocol.AgentLinkUpdatedPayload
	if !unmarshalPayload(payload, &p) || p.LinkID == "" {
		return
	}
	b.state.UpsertAgentLink(OfficeAgentLink{
		ID:             p.LinkID,
		SourceAgentKey: p.SourceAgentKey,
		TargetAgentKey: p.TargetAgentKey,
		Direction:      p.Direction,
		Status:         p.Status,
	})
	b.addNotification("agent_link", "",
		fmt.Sprintf("Link updated: %s -> %s", p.SourceAgentKey, p.TargetAgentKey))
}

// handleAgentLinkDeleted removes a persistent arc.
func (b *Bridge) handleAgentLinkDeleted(payload interface{}) {
	var p protocol.AgentLinkDeletedPayload
	if !unmarshalPayload(payload, &p) || p.LinkID == "" {
		return
	}
	b.state.RemoveAgentLink(p.LinkID)
	b.addNotification("agent_link", "",
		fmt.Sprintf("Link removed: %s -> %s", p.SourceAgentKey, p.TargetAgentKey))
}

// handleHandoff handles agent handoff events.
func (b *Bridge) handleHandoff(payload interface{}) {
	from := extractStringField(payload, "from_agent")
	to := extractStringField(payload, "to_agent")
	reason := extractStringField(payload, "reason")
	if from != "" {
		b.state.SetSpeechBubble(from, "-> Handing off to "+to+"...")
	}
	if to != "" {
		b.state.SetSpeechBubble(to, "<- Taking over...")
	}
	arcID := fmt.Sprintf("handoff-%d", time.Now().UnixNano())
	b.state.AddDelegation(OfficeDelegation{
		ID:        arcID,
		SourceID:  from,
		TargetID:  to,
		Status:    "running",
		Mode:      "handoff",
		StartedAt: time.Now(),
	})
	b.state.CompleteDelegation(arcID, "completed") // instantaneous
	b.addNotification("handoff", from,
		fmt.Sprintf("Handoff: %s -> %s (%s)", from, to, truncate(reason, 60)))
}

// handleTeamUpserted creates or updates a team platform in the 3D scene.
// Payload: map[string]interface{}{team_id, name, lead_id, members []string}
func (b *Bridge) handleTeamUpserted(payload interface{}) {
	id := extractStringField(payload, "team_id")
	if id == "" {
		return
	}
	b.state.UpsertTeam(OfficeTeam{
		ID:      id,
		Name:    extractStringField(payload, "name"),
		LeadID:  extractStringField(payload, "lead_id"),
		Members: extractStringSlice(payload, "members"),
	})
	b.addNotification("team", "", fmt.Sprintf("Team platform updated: %s", extractStringField(payload, "name")))
}

// extractStringSlice reads a []string field from a map[string]interface{} payload.
func extractStringSlice(payload interface{}, key string) []string {
	m, ok := payload.(map[string]interface{})
	if !ok {
		return nil
	}
	raw, ok := m[key]
	if !ok {
		return nil
	}
	switch v := raw.(type) {
	case []string:
		return v
	case []interface{}:
		out := make([]string, 0, len(v))
		for _, item := range v {
			if s, ok := item.(string); ok {
				out = append(out, s)
			}
		}
		return out
	}
	return nil
}

// truncate shortens s to at most maxLen characters, appending "..." if cut.
func truncate(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}

// normalizeChannelType converts a channel instance name to its canonical type.
// In managed mode channels are registered with user-defined names (e.g. "my-telegram-bot")
// rather than the type key ("telegram"). We normalise by substring match so the 3D renderer
// can map the value to the correct zone colour.
// Order matters: check "zalo_personal" before "zalo" to avoid false prefix match.
func normalizeChannelType(ch string) string {
	lower := strings.ToLower(ch)
	for _, typ := range []string{"telegram", "discord", "whatsapp", "feishu", "zalo_personal", "zalo", "direct"} {
		if strings.Contains(lower, typ) {
			return typ
		}
	}
	return ch // unknown/internal channels (heartbeat, cli, system) — renderer ignores these
}

// unmarshalPayload JSON round-trips an opaque bus payload into a typed struct.
func unmarshalPayload[T any](payload interface{}, out *T) bool {
	data, err := json.Marshal(payload)
	if err != nil {
		return false
	}
	return json.Unmarshal(data, out) == nil
}

// nameOf returns displayName if set, else key.
func nameOf(displayName, key string) string {
	if displayName != "" {
		return displayName
	}
	return key
}

// handleAgentSummoning shows agent spawn animation notification.
func (b *Bridge) handleAgentSummoning(payload interface{}) {
	agentKey := extractStringField(payload, "agent_key")
	displayName := extractStringField(payload, "display_name")
	if agentKey == "" {
		return
	}
	// Pre-register agent in idle state if not already present
	b.state.SetAgentState(agentKey, StateIdle, "")
	if displayName != "" {
		b.state.SetAgentMeta(agentKey, "", displayName)
	}
	b.addNotification("agent", agentKey,
		fmt.Sprintf("Summoning agent: %s", nameOf(displayName, agentKey)))
}
