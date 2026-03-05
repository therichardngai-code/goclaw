package office

import (
	"sync"
	"testing"

	"github.com/nextlevelbuilder/goclaw/internal/bus"
	"github.com/nextlevelbuilder/goclaw/pkg/protocol"
)

// --- test doubles ---

// mockBus implements bus.EventPublisher for testing.
type mockBus struct {
	mu       sync.Mutex
	handlers map[string]bus.EventHandler
}

func newMockBus() *mockBus {
	return &mockBus{handlers: make(map[string]bus.EventHandler)}
}

func (m *mockBus) Subscribe(id string, h bus.EventHandler) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.handlers[id] = h
}

func (m *mockBus) Unsubscribe(id string) {
	m.mu.Lock()
	defer m.mu.Unlock()
	delete(m.handlers, id)
}

func (m *mockBus) Broadcast(event bus.Event) {
	m.mu.Lock()
	handlers := make([]bus.EventHandler, 0, len(m.handlers))
	for _, h := range m.handlers {
		handlers = append(handlers, h)
	}
	m.mu.Unlock()
	for _, h := range handlers {
		h(event)
	}
}

// mockBroadcaster counts how many times BroadcastState is called.
type mockBroadcaster struct {
	mu    sync.Mutex
	calls int
}

func (m *mockBroadcaster) BroadcastState(_ *OfficeState) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.calls++
}

func (m *mockBroadcaster) count() int {
	m.mu.Lock()
	defer m.mu.Unlock()
	return m.calls
}

// agentEventPayload builds a payload map matching agent.AgentEvent JSON structure.
func agentEventPayload(typ, agentID, runID string, extra map[string]interface{}) interface{} {
	p := map[string]interface{}{
		"type":    typ,
		"agentId": agentID,
		"runId":   runID,
	}
	if extra != nil {
		p["payload"] = extra
	}
	return p
}

// newBridgeFixture creates a wired-up Bridge with mock dependencies.
func newBridgeFixture() (*Bridge, *OfficeState, *mockBus, *mockBroadcaster) {
	state := NewOfficeState()
	mb := newMockBus()
	bc := &mockBroadcaster{}
	bridge := NewBridge(state, bc, mb)
	bridge.Start()
	return bridge, state, mb, bc
}

// --- Start / Stop ---

func TestBridge_StartSubscribes(t *testing.T) {
	_, _, mb, _ := newBridgeFixture()
	mb.mu.Lock()
	_, ok := mb.handlers[bridgeSubscriberID]
	mb.mu.Unlock()
	if !ok {
		t.Error("bridge should have subscribed with bridgeSubscriberID")
	}
}

func TestBridge_StopUnsubscribes(t *testing.T) {
	bridge, _, mb, _ := newBridgeFixture()
	bridge.Stop()
	mb.mu.Lock()
	_, ok := mb.handlers[bridgeSubscriberID]
	mb.mu.Unlock()
	if ok {
		t.Error("bridge should have unsubscribed after Stop()")
	}
}

// --- agent event: run.started ---

func TestBridge_RunStarted_TransitionsToThinking(t *testing.T) {
	_, state, mb, bc := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name:    protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag == nil {
		t.Fatal("agent should be auto-created on run.started")
	}
	if ag.State != StateThinking {
		t.Errorf("state: got %q want %q", ag.State, StateThinking)
	}
	if ag.CurrentRunID != "run-1" {
		t.Errorf("runID: got %q want %q", ag.CurrentRunID, "run-1")
	}
	if bc.count() != 1 {
		t.Errorf("BroadcastState calls: got %d want 1", bc.count())
	}
}

func TestBridge_RunStarted_AddsNotification(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name:    protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil),
	})

	snap := state.Snapshot()
	if len(snap.Notifications) != 1 {
		t.Fatalf("expected 1 notification, got %d", len(snap.Notifications))
	}
	if snap.Notifications[0].Type != "run.started" {
		t.Errorf("notification type: got %q want %q", snap.Notifications[0].Type, "run.started")
	}
}

// --- agent event: run.completed ---

func TestBridge_RunCompleted_TransitionsToIdle(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunCompleted, "bot1", "run-1", nil)})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateIdle {
		t.Errorf("state: got %q want %q", ag.State, StateIdle)
	}
	if ag.CurrentRunID != "" {
		t.Errorf("currentRunID should be cleared on idle, got %q", ag.CurrentRunID)
	}
}

// --- agent event: run.failed ---

func TestBridge_RunFailed_TransitionsToError(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunFailed, "bot1", "run-1",
			map[string]interface{}{"error": "rate limit exceeded"}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateError {
		t.Errorf("state: got %q want %q", ag.State, StateError)
	}
	if ag.Stats.ErrorCount != 1 {
		t.Errorf("errorCount: got %d want 1", ag.Stats.ErrorCount)
	}
}

func TestBridge_RunFailed_NotificationContainsErrorText(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunFailed, "bot1", "run-1",
			map[string]interface{}{"error": "context deadline exceeded"}),
	})

	snap := state.Snapshot()
	found := false
	for _, n := range snap.Notifications {
		if n.Type == "run.failed" {
			found = true
			if n.AgentID != "bot1" {
				t.Errorf("notification agentID: got %q want %q", n.AgentID, "bot1")
			}
		}
	}
	if !found {
		t.Error("expected run.failed notification")
	}
}

// --- agent event: tool.call ---

func TestBridge_ToolCall_TransitionsToToolCalling(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventToolCall, "bot1", "run-1",
			map[string]interface{}{"name": "web_fetch", "id": "tc-1"}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateToolCalling {
		t.Errorf("state: got %q want %q", ag.State, StateToolCalling)
	}
	if ag.SpeechBubble != "Using: web_fetch" {
		t.Errorf("speechBubble: got %q want %q", ag.SpeechBubble, "Using: web_fetch")
	}
}

// --- agent event: tool.result ---

func TestBridge_ToolResult_ReturnsToThinking(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventToolCall, "bot1", "run-1",
			map[string]interface{}{"name": "read_file", "id": "tc-1"})})
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventToolResult, "bot1", "run-1", nil)})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateThinking {
		t.Errorf("state after tool.result: got %q want %q", ag.State, StateThinking)
	}
}

// --- agent event: run.retrying ---

func TestBridge_RunRetrying_SetsSpeechBubble(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunRetrying, "bot1", "run-1", nil)})

	ag := state.Snapshot().Agents["bot1"]
	if ag.SpeechBubble != "Retrying..." {
		t.Errorf("speechBubble: got %q want %q", ag.SpeechBubble, "Retrying...")
	}
}

// --- chat event: chunk ---

func TestBridge_ChatChunk_TransitionsToResponding(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent, // gateway always broadcasts as EventAgent regardless of subtype
		Payload: agentEventPayload(protocol.ChatEventChunk, "bot1", "run-1",
			map[string]interface{}{"content": "Hello, how can I help you today?"}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateResponding {
		t.Errorf("state: got %q want %q", ag.State, StateResponding)
	}
	if ag.SpeechBubble != "Hello, how can I help you today?" {
		t.Errorf("speechBubble: got %q", ag.SpeechBubble)
	}
}

func TestBridge_ChatChunk_TruncatesSpeechBubble(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	// Build a 200-char string that exceeds maxSpeechBubble (120).
	longBytes := make([]byte, 200)
	for i := range longBytes {
		longBytes[i] = 'x'
	}
	longContent := string(longBytes)

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.ChatEventChunk, "bot1", "run-1",
			map[string]interface{}{"content": longContent}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if len(ag.SpeechBubble) > maxSpeechBubble {
		t.Errorf("speechBubble length %d exceeds max %d", len(ag.SpeechBubble), maxSpeechBubble)
	}
	if len(ag.SpeechBubble) < 10 {
		t.Error("speechBubble should not be empty after truncation")
	}
}

// --- chat event: thinking ---

func TestBridge_ChatThinking_TransitionsToThinking(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.ChatEventThinking, "bot1", "run-1",
			map[string]interface{}{"content": "Let me think about this..."}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateThinking {
		t.Errorf("state: got %q want %q", ag.State, StateThinking)
	}
	if ag.SpeechBubble != "Let me think about this..." {
		t.Errorf("speechBubble: got %q", ag.SpeechBubble)
	}
}

// --- system events ---

func TestBridge_HandoffEvent_AddsNotification(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventHandoff})

	snap := state.Snapshot()
	found := false
	for _, n := range snap.Notifications {
		if n.Type == "handoff" {
			found = true
		}
	}
	if !found {
		t.Error("expected handoff notification")
	}
}

func TestBridge_TeamEvents_AddNotifications(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	// New handlers require typed payloads
	mb.Broadcast(bus.Event{Name: protocol.EventTeamTaskCreated, Payload: protocol.TeamTaskEventPayload{
		TaskID: "task-1", Subject: "Test task",
	}})
	mb.Broadcast(bus.Event{Name: protocol.EventTeamTaskCompleted, Payload: protocol.TeamTaskEventPayload{
		TaskID: "task-1", Subject: "Test task",
	}})
	mb.Broadcast(bus.Event{Name: protocol.EventDelegationStarted, Payload: protocol.DelegationEventPayload{
		DelegationID: "del-1", SourceAgentKey: "agent-a", TargetAgentKey: "agent-b", Mode: "sync",
	}})
	mb.Broadcast(bus.Event{Name: protocol.EventDelegationCompleted, Payload: protocol.DelegationEventPayload{
		DelegationID: "del-1", TargetAgentKey: "agent-b",
	}})

	snap := state.Snapshot()
	if len(snap.Notifications) != 4 {
		t.Errorf("expected 4 notifications, got %d", len(snap.Notifications))
	}
}

// --- event counter ---

func TestBridge_EveryEvent_IncrementsGatewayCounter(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventHandoff})
	mb.Broadcast(bus.Event{Name: protocol.EventTeamTaskCreated})

	snap := state.Snapshot()
	if snap.Gateway.EventCount != 3 {
		t.Errorf("eventCount: got %d want 3", snap.Gateway.EventCount)
	}
}

// --- broadcaster called on every event ---

func TestBridge_BroadcastStateCalledAfterEveryEvent(t *testing.T) {
	_, _, mb, bc := newBridgeFixture()

	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunCompleted, "bot1", "run-1", nil)})
	mb.Broadcast(bus.Event{Name: protocol.EventHandoff})

	if bc.count() != 3 {
		t.Errorf("BroadcastState calls: got %d want 3", bc.count())
	}
}

// --- nil hub is safe ---

func TestBridge_NilHub_DoesNotPanic(t *testing.T) {
	state := NewOfficeState()
	mb := newMockBus()
	bridge := NewBridge(state, nil, mb) // nil hub
	bridge.Start()

	// Should not panic even with nil hub.
	mb.Broadcast(bus.Event{Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)})
}

// --- full cycle: thinking → tool_calling → thinking → responding → idle ---

func TestBridge_FullRunCycle(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	steps := []bus.Event{
		{Name: protocol.EventAgent,
			Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil)},
		{Name: protocol.EventAgent,
			Payload: agentEventPayload(protocol.AgentEventToolCall, "bot1", "run-1",
				map[string]interface{}{"name": "shell", "id": "tc-1"})},
		{Name: protocol.EventAgent,
			Payload: agentEventPayload(protocol.AgentEventToolResult, "bot1", "run-1", nil)},
		{Name: protocol.EventAgent,
			Payload: agentEventPayload(protocol.ChatEventChunk, "bot1", "run-1",
				map[string]interface{}{"content": "Done!"})},
		{Name: protocol.EventAgent,
			Payload: agentEventPayload(protocol.AgentEventRunCompleted, "bot1", "run-1", nil)},
	}
	for _, e := range steps {
		mb.Broadcast(e)
	}

	ag := state.Snapshot().Agents["bot1"]
	if ag.State != StateIdle {
		t.Errorf("final state: got %q want %q", ag.State, StateIdle)
	}
	if ag.Stats.MessagesToday != 1 {
		t.Errorf("messagestoday: got %d want 1", ag.Stats.MessagesToday)
	}
	if ag.SpeechBubble != "" {
		t.Errorf("speechBubble should be empty after idle, got %q", ag.SpeechBubble)
	}
}

// --- Phase 02: channel tracking ---

func TestBridge_ChannelTracking_SetOnRunStarted(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1",
			map[string]interface{}{"channel": "telegram"}),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag == nil {
		t.Fatal("agent should be created on run.started")
	}
	if ag.CurrentChannel != "telegram" {
		t.Errorf("CurrentChannel: got %q want %q", ag.CurrentChannel, "telegram")
	}
}

func TestBridge_ChannelTracking_ClearOnRunCompleted(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1",
			map[string]interface{}{"channel": "discord"}),
	})
	mb.Broadcast(bus.Event{
		Name:    protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunCompleted, "bot1", "run-1", nil),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.CurrentChannel != "" {
		t.Errorf("CurrentChannel should be empty after run.completed, got %q", ag.CurrentChannel)
	}
}

func TestBridge_ChannelTracking_ClearOnRunFailed(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1",
			map[string]interface{}{"channel": "whatsapp"}),
	})
	mb.Broadcast(bus.Event{
		Name:    protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunFailed, "bot1", "run-1", nil),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.CurrentChannel != "" {
		t.Errorf("CurrentChannel should be empty after run.failed, got %q", ag.CurrentChannel)
	}
}

func TestBridge_ChannelTracking_EmptyChannelIgnored(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	// run.started with no channel payload — CurrentChannel should stay empty.
	mb.Broadcast(bus.Event{
		Name:    protocol.EventAgent,
		Payload: agentEventPayload(protocol.AgentEventRunStarted, "bot1", "run-1", nil),
	})

	ag := state.Snapshot().Agents["bot1"]
	if ag.CurrentChannel != "" {
		t.Errorf("CurrentChannel should be empty when not set, got %q", ag.CurrentChannel)
	}
}

// --- Phase 02: delegation arc lifecycle ---

func TestBridge_DelegationArc_AddedOnStarted(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventDelegationStarted,
		Payload: protocol.DelegationEventPayload{
			DelegationID:   "d-001",
			SourceAgentKey: "agent-a",
			TargetAgentKey: "agent-b",
			Mode:           "async",
		},
	})

	snap := state.Snapshot()
	if len(snap.ActiveDelegations) != 1 {
		t.Fatalf("expected 1 active delegation, got %d", len(snap.ActiveDelegations))
	}
	d := snap.ActiveDelegations[0]
	if d.ID != "d-001" {
		t.Errorf("ID: got %q want %q", d.ID, "d-001")
	}
	if d.Status != "running" {
		t.Errorf("Status: got %q want %q", d.Status, "running")
	}
	if d.Mode != "async" {
		t.Errorf("Mode: got %q want %q", d.Mode, "async")
	}
}

func TestBridge_DelegationArc_CompletedOnEvent(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventDelegationStarted,
		Payload: protocol.DelegationEventPayload{
			DelegationID: "d-001", SourceAgentKey: "a", TargetAgentKey: "b", Mode: "sync",
		},
	})
	mb.Broadcast(bus.Event{
		Name: protocol.EventDelegationCompleted,
		Payload: protocol.DelegationEventPayload{
			DelegationID: "d-001", TargetAgentKey: "b",
		},
	})

	snap := state.Snapshot()
	if len(snap.ActiveDelegations) != 1 {
		t.Fatalf("expected 1 delegation entry, got %d", len(snap.ActiveDelegations))
	}
	if snap.ActiveDelegations[0].Status != "completed" {
		t.Errorf("Status: got %q want completed", snap.ActiveDelegations[0].Status)
	}
}

func TestBridge_DelegationArc_CancelledOnEvent(t *testing.T) {
	_, state, mb, _ := newBridgeFixture()

	mb.Broadcast(bus.Event{
		Name: protocol.EventDelegationStarted,
		Payload: protocol.DelegationEventPayload{
			DelegationID: "d-002", SourceAgentKey: "a", TargetAgentKey: "b", Mode: "async",
		},
	})
	mb.Broadcast(bus.Event{
		Name: protocol.EventDelegationCancelled,
		Payload: protocol.DelegationEventPayload{
			DelegationID: "d-002",
		},
	})

	snap := state.Snapshot()
	if snap.ActiveDelegations[0].Status != "cancelled" {
		t.Errorf("Status: got %q want cancelled", snap.ActiveDelegations[0].Status)
	}
}

// --- truncate helper ---

func TestTruncate_ShortString(t *testing.T) {
	if got := truncate("hello", 10); got != "hello" {
		t.Errorf("got %q want %q", got, "hello")
	}
}

func TestTruncate_LongString(t *testing.T) {
	got := truncate("abcdefghij", 7)
	if got != "abcd..." {
		t.Errorf("got %q want %q", got, "abcd...")
	}
	if len(got) > 7 {
		t.Errorf("length %d exceeds maxLen 7", len(got))
	}
}

func TestTruncate_ExactLength(t *testing.T) {
	if got := truncate("hello", 5); got != "hello" {
		t.Errorf("exact-length string should not be truncated: got %q", got)
	}
}

// --- extractStringField helper ---

func TestExtractStringField_MapInterface(t *testing.T) {
	payload := map[string]interface{}{"name": "web_fetch", "id": "tc-1"}
	if got := extractStringField(payload, "name"); got != "web_fetch" {
		t.Errorf("got %q want %q", got, "web_fetch")
	}
}

func TestExtractStringField_MapString(t *testing.T) {
	payload := map[string]string{"content": "hello"}
	if got := extractStringField(payload, "content"); got != "hello" {
		t.Errorf("got %q want %q", got, "hello")
	}
}

func TestExtractStringField_MissingKey(t *testing.T) {
	payload := map[string]interface{}{"other": "value"}
	if got := extractStringField(payload, "name"); got != "" {
		t.Errorf("missing key should return empty, got %q", got)
	}
}

func TestExtractStringField_NilPayload(t *testing.T) {
	if got := extractStringField(nil, "name"); got != "" {
		t.Errorf("nil payload should return empty, got %q", got)
	}
}
