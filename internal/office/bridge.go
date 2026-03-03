package office

import (
	"encoding/json"
	"fmt"
	"log/slog"
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
		b.handleAgentEvent(event.Payload)
	case protocol.EventChat:
		b.handleChatEvent(event.Payload)
	case protocol.EventHandoff:
		b.addNotification("handoff", "", "Agent handoff occurred")
	case protocol.EventTeamTaskCreated:
		b.addNotification("team", "", "Team task created")
	case protocol.EventTeamTaskCompleted:
		b.addNotification("team", "", "Team task completed")
	case protocol.EventTeamMessageSent:
		b.addNotification("team", "", "Team message sent")
	case protocol.EventDelegationStarted:
		b.addNotification("delegation", "", "Delegation started")
	case protocol.EventDelegationCompleted:
		b.addNotification("delegation", "", "Delegation completed")
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
		b.addNotification("run.started", evt.AgentID,
			fmt.Sprintf("Agent %s started processing", evt.AgentID))

	case protocol.AgentEventRunCompleted:
		b.state.SetAgentState(evt.AgentID, StateIdle, evt.RunID)
		b.addNotification("run.completed", evt.AgentID,
			fmt.Sprintf("Agent %s completed", evt.AgentID))

	case protocol.AgentEventRunFailed:
		b.state.SetAgentState(evt.AgentID, StateError, evt.RunID)
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

	case protocol.AgentEventRunRetrying:
		b.state.SetSpeechBubble(evt.AgentID, "Retrying...")
	}
}

// handleChatEvent maps chat streaming subtypes to OfficeState transitions.
func (b *Bridge) handleChatEvent(payload interface{}) {
	evt := extractAgentEvent(payload)
	if evt.AgentID == "" {
		return
	}

	switch evt.Type {
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

// truncate shortens s to at most maxLen characters, appending "..." if cut.
func truncate(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}
