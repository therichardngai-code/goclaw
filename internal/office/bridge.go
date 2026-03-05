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
	case protocol.EventAgent:
		// All agent events — including chat chunks — are broadcast with Name=EventAgent
		// by the gateway's OnEvent wiring. Chat subtypes (chunk, thinking) are handled
		// inside handleAgentEvent by their Type field.
		b.handleAgentEvent(event.Payload)
	case protocol.EventHandoff:
		b.addNotification("handoff", "", "Agent handoff occurred")
	case protocol.EventTeamUpserted:
		b.handleTeamUpserted(event.Payload)
	case protocol.EventTeamTaskCreated:
		b.addNotification("team", "", "Team task created")
	case protocol.EventTeamTaskCompleted:
		b.addNotification("team", "", "Team task completed")
	case protocol.EventTeamMessageSent:
		b.addNotification("team", "", "Team message sent")
	case protocol.EventDelegationStarted:
		b.handleDelegationStarted(event.Payload)
	case protocol.EventDelegationCompleted:
		b.handleDelegationCompleted(event.Payload)
	case "delegation.cancelled":
		b.handleDelegationTerminal(event.Payload, "cancelled")
	case "delegation.failed":
		b.handleDelegationTerminal(event.Payload, "failed")
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
		if ch := extractStringField(evt.Payload, "channel"); ch != "" {
			b.state.SetAgentChannel(evt.AgentID, normalizeChannelType(ch))
		}
		// Show fallback bubble for non-streaming channels (no ChatEventChunk emitted).
		// Streaming channels will overwrite this with live text as chunks arrive.
		b.state.SetSpeechBubble(evt.AgentID, "Processing...")
		b.addNotification("run.started", evt.AgentID,
			fmt.Sprintf("Agent %s started processing", evt.AgentID))

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
// Payload is map[string]string from delegate_events.go: delegation_id, source_agent, target_agent, mode.
// Also sets speech bubbles on both agents so the 3D scene shows them "talking" before the task begins.
func (b *Bridge) handleDelegationStarted(payload interface{}) {
	id := extractStringField(payload, "delegation_id")
	source := extractStringField(payload, "source_agent")
	target := extractStringField(payload, "target_agent")
	mode := extractStringField(payload, "mode")
	// Always notify; only track arc when we have a real delegation ID.
	if id != "" {
		b.state.AddDelegation(OfficeDelegation{
			ID:        id,
			SourceID:  source,
			TargetID:  target,
			Status:    "running",
			Mode:      mode,
			StartedAt: time.Now(),
		})
	}
	// Show handshake speech bubbles so agents appear to talk before the task starts.
	if source != "" {
		b.state.SetSpeechBubble(source, "→ Briefing "+target+"...")
	}
	if target != "" {
		b.state.SetSpeechBubble(target, "← Receiving task...")
	}
	b.addNotification("delegation", "", fmt.Sprintf("Delegation started: %s → %s", source, target))
}

// handleDelegationCompleted marks the arc as completed and emits a notification.
func (b *Bridge) handleDelegationCompleted(payload interface{}) {
	id := extractStringField(payload, "delegation_id")
	target := extractStringField(payload, "target_agent")
	if id != "" {
		b.state.CompleteDelegation(id, "completed")
	}
	b.addNotification("delegation", "", fmt.Sprintf("Delegation completed → %s", target))
}

// handleDelegationTerminal marks the arc with the given terminal status (cancelled/failed).
func (b *Bridge) handleDelegationTerminal(payload interface{}, status string) {
	id := extractStringField(payload, "delegation_id")
	if id != "" {
		b.state.CompleteDelegation(id, status)
	}
	b.addNotification("delegation", "", fmt.Sprintf("Delegation %s", status))
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
