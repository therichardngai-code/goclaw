package office

import (
	"encoding/json"
	"fmt"
	"testing"
	"time"
)

// --- RegisterAgent ---

func TestRegisterAgent_CreatesNewEntry(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("agent1", "SupportBot", "gemini-2.0-flash", "google")

	snap := s.Snapshot()
	ag, ok := snap.Agents["agent1"]
	if !ok {
		t.Fatal("expected agent1 in snapshot")
	}
	if ag.Name != "SupportBot" {
		t.Errorf("name: got %q want %q", ag.Name, "SupportBot")
	}
	if ag.Model != "gemini-2.0-flash" {
		t.Errorf("model: got %q want %q", ag.Model, "gemini-2.0-flash")
	}
	if ag.State != StateIdle {
		t.Errorf("initial state: got %q want %q", ag.State, StateIdle)
	}
}

func TestRegisterAgent_UpdatesExisting(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-3.5", "openai")
	s.RegisterAgent("a1", "BotV2", "gpt-4o", "openai")

	snap := s.Snapshot()
	ag := snap.Agents["a1"]
	if ag.Name != "BotV2" || ag.Model != "gpt-4o" {
		t.Errorf("update failed: name=%q model=%q", ag.Name, ag.Model)
	}
}

// --- SetAgentState transitions ---

func TestSetAgentState_IdleToThinking(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")
	s.SetAgentState("a1", StateThinking, "run-1")

	ag := s.Snapshot().Agents["a1"]
	if ag.State != StateThinking {
		t.Errorf("state: got %q want %q", ag.State, StateThinking)
	}
	if ag.CurrentRunID != "run-1" {
		t.Errorf("runID: got %q want %q", ag.CurrentRunID, "run-1")
	}
	if ag.RunStartedAt.IsZero() {
		t.Error("RunStartedAt should be set when entering thinking")
	}
}

func TestSetAgentState_ThinkingToResponding(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")
	s.SetAgentState("a1", StateThinking, "run-1")
	s.SetAgentState("a1", StateResponding, "run-1")

	ag := s.Snapshot().Agents["a1"]
	if ag.State != StateResponding {
		t.Errorf("state: got %q want %q", ag.State, StateResponding)
	}
}

func TestSetAgentState_RespondingToIdle_AccumulatesStats(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")
	s.SetAgentState("a1", StateThinking, "run-1")
	time.Sleep(5 * time.Millisecond) // ensure measurable elapsed time
	s.SetAgentState("a1", StateResponding, "run-1")
	s.SetAgentState("a1", StateIdle, "run-1")

	ag := s.Snapshot().Agents["a1"]
	if ag.State != StateIdle {
		t.Errorf("state: got %q want %q", ag.State, StateIdle)
	}
	if ag.Stats.MessagesToday != 1 {
		t.Errorf("messagestoday: got %d want 1", ag.Stats.MessagesToday)
	}
	if ag.Stats.AvgResponseMs <= 0 {
		t.Error("AvgResponseMs should be > 0 after a completed run")
	}
	if ag.CurrentRunID != "" {
		t.Errorf("currentRunID should be cleared on idle, got %q", ag.CurrentRunID)
	}
	if ag.SpeechBubble != "" {
		t.Errorf("speechBubble should be cleared on idle, got %q", ag.SpeechBubble)
	}
	if !ag.RunStartedAt.IsZero() {
		t.Error("RunStartedAt should be cleared on idle")
	}
}

func TestSetAgentState_ToolCallCycle(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")

	// idle → thinking → tool_calling → thinking → responding → idle
	s.SetAgentState("a1", StateThinking, "run-1")
	s.SetAgentState("a1", StateToolCalling, "run-1")
	s.SetAgentState("a1", StateThinking, "run-1")
	s.SetAgentState("a1", StateResponding, "run-1")
	s.SetAgentState("a1", StateIdle, "run-1")

	ag := s.Snapshot().Agents["a1"]
	if ag.State != StateIdle {
		t.Errorf("final state: got %q want %q", ag.State, StateIdle)
	}
	if ag.Stats.MessagesToday != 1 {
		t.Errorf("messagestoday: got %d want 1", ag.Stats.MessagesToday)
	}
}

func TestSetAgentState_ErrorClearsFields(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")
	s.SetAgentState("a1", StateThinking, "run-1")
	s.SetSpeechBubble("a1", "some text")
	s.SetAgentState("a1", StateError, "run-1")

	ag := s.Snapshot().Agents["a1"]
	if ag.State != StateError {
		t.Errorf("state: got %q want %q", ag.State, StateError)
	}
	if ag.Stats.ErrorCount != 1 {
		t.Errorf("errorCount: got %d want 1", ag.Stats.ErrorCount)
	}
	if ag.SpeechBubble != "" {
		t.Errorf("speechBubble should be cleared on error, got %q", ag.SpeechBubble)
	}
	if ag.CurrentRunID != "" {
		t.Errorf("currentRunID should be cleared on error, got %q", ag.CurrentRunID)
	}
}

func TestSetAgentState_AutoCreatesUnknownAgent(t *testing.T) {
	s := NewOfficeState()
	// No RegisterAgent call — SetAgentState should auto-create the entry.
	s.SetAgentState("unknown-agent", StateThinking, "run-x")

	ag := s.Snapshot().Agents["unknown-agent"]
	if ag == nil {
		t.Fatal("expected auto-created agent entry")
	}
	if ag.State != StateThinking {
		t.Errorf("state: got %q want %q", ag.State, StateThinking)
	}
}

// --- SetSpeechBubble ---

func TestSetSpeechBubble_UpdatesText(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")
	s.SetSpeechBubble("a1", "Hello world")

	ag := s.Snapshot().Agents["a1"]
	if ag.SpeechBubble != "Hello world" {
		t.Errorf("speechBubble: got %q want %q", ag.SpeechBubble, "Hello world")
	}
}

func TestSetSpeechBubble_NoopForMissingAgent(t *testing.T) {
	s := NewOfficeState()
	// Should not panic when agent doesn't exist.
	s.SetSpeechBubble("nonexistent", "text")
}

// --- AddNotification / ring buffer ---

func TestAddNotification_AppendsEntry(t *testing.T) {
	s := NewOfficeState()
	s.AddNotification(Notification{ID: "1", Type: "run.started", Message: "msg"})

	snap := s.Snapshot()
	if len(snap.Notifications) != 1 {
		t.Errorf("notifications len: got %d want 1", len(snap.Notifications))
	}
	if snap.Notifications[0].ID != "1" {
		t.Errorf("notification id: got %q want %q", snap.Notifications[0].ID, "1")
	}
}

func TestAddNotification_RingBuffer_StaysAtMax(t *testing.T) {
	s := NewOfficeState()

	// Add more than the default max (50).
	for i := 0; i < 60; i++ {
		s.AddNotification(Notification{
			ID:      fmt.Sprintf("%d", i),
			Type:    "run.started",
			Message: fmt.Sprintf("msg %d", i),
		})
	}

	snap := s.Snapshot()
	if len(snap.Notifications) != defaultMaxNotifications {
		t.Errorf("ring buffer: got %d want %d", len(snap.Notifications), defaultMaxNotifications)
	}
	// Oldest entries evicted — first entry should be id "10" (60-50=10).
	if snap.Notifications[0].ID != "10" {
		t.Errorf("oldest kept: got id %q want %q", snap.Notifications[0].ID, "10")
	}
	// Newest entry should be id "59".
	if snap.Notifications[49].ID != "59" {
		t.Errorf("newest: got id %q want %q", snap.Notifications[49].ID, "59")
	}
}

// --- IncrementEventCount ---

func TestIncrementEventCount(t *testing.T) {
	s := NewOfficeState()
	s.IncrementEventCount()
	s.IncrementEventCount()
	s.IncrementEventCount()

	snap := s.Snapshot()
	if snap.Gateway.EventCount != 3 {
		t.Errorf("eventCount: got %d want 3", snap.Gateway.EventCount)
	}
}

// --- Snapshot isolation ---

func TestSnapshot_IsolationFromLiveState(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")

	snap := s.Snapshot()

	// Mutate the snapshot copy — live state must be unaffected.
	snap.Agents["a1"].Name = "Mutated"

	live := s.Snapshot()
	if live.Agents["a1"].Name == "Mutated" {
		t.Error("snapshot mutation leaked back into live state")
	}
}

func TestSnapshot_JSONSerializable(t *testing.T) {
	s := NewOfficeState()
	s.Gateway.Version = "0.5.0"
	s.Gateway.Mode = "standalone"
	s.RegisterAgent("a1", "SupportBot", "gpt-4o", "openai")
	s.SetAgentState("a1", StateThinking, "run-1")
	s.AddNotification(Notification{
		ID:        "n1",
		AgentID:   "a1",
		Type:      "run.started",
		Message:   "Agent a1 started",
		Timestamp: time.Now(),
	})

	snap := s.Snapshot()

	data, err := json.Marshal(snap)
	if err != nil {
		t.Fatalf("json.Marshal failed: %v", err)
	}

	var decoded map[string]interface{}
	if err := json.Unmarshal(data, &decoded); err != nil {
		t.Fatalf("json.Unmarshal failed: %v", err)
	}

	if _, ok := decoded["gateway"]; !ok {
		t.Error("missing 'gateway' key in JSON")
	}
	if _, ok := decoded["agents"]; !ok {
		t.Error("missing 'agents' key in JSON")
	}
	if _, ok := decoded["notifications"]; !ok {
		t.Error("missing 'notifications' key in JSON")
	}
	// Mutex fields must NOT appear in JSON output.
	if _, ok := decoded["mu"]; ok {
		t.Error("'mu' (mutex) must not appear in JSON")
	}
	if _, ok := decoded["maxNotifs"]; ok {
		t.Error("'maxNotifs' must not appear in JSON")
	}
}

// --- Stats averaging ---

func TestStats_AverageResponseTime_MultipleRuns(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "gpt-4o", "openai")

	// Simulate two completed runs.
	for i := 0; i < 2; i++ {
		s.SetAgentState("a1", StateThinking, fmt.Sprintf("run-%d", i))
		time.Sleep(5 * time.Millisecond)
		s.SetAgentState("a1", StateIdle, fmt.Sprintf("run-%d", i))
	}

	ag := s.Snapshot().Agents["a1"]
	if ag.Stats.MessagesToday != 2 {
		t.Errorf("messagestoday: got %d want 2", ag.Stats.MessagesToday)
	}
	if ag.Stats.AvgResponseMs <= 0 {
		t.Error("AvgResponseMs should accumulate over multiple runs")
	}
}

// --- Gateway uptime ---

func TestSnapshot_GatewayUptime_Positive(t *testing.T) {
	s := NewOfficeState()
	// Backdate StartedAt so uptime calculates to at least 2 seconds.
	s.Gateway.StartedAt = time.Now().Add(-2 * time.Second)
	snap := s.Snapshot()
	if snap.Gateway.Uptime <= 0 {
		t.Errorf("uptime should be positive, got %d", snap.Gateway.Uptime)
	}
}

// --- Phase 02: character index ---

func TestRegisterAgent_ComputesCharacterIndex(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("default", "Bot", "claude-3-5-sonnet", "anthropic")

	snap := s.Snapshot()
	ag := snap.Agents["default"]
	if ag.CharacterIndex < 0 || ag.CharacterIndex > 13 {
		t.Errorf("CharacterIndex out of range: got %d (must be 0–13)", ag.CharacterIndex)
	}
	// Deterministic: re-computing must yield same index.
	if ag.CharacterIndex != computeCharacterIndex("default") {
		t.Errorf("CharacterIndex not deterministic")
	}
}

// --- Phase 02: SetAgentChannel / ClearAgentChannel ---

func TestSetAgentChannel(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("bot1", "Bot", "gpt-4o", "openai")
	s.SetAgentChannel("bot1", "telegram")

	ag := s.Snapshot().Agents["bot1"]
	if ag.CurrentChannel != "telegram" {
		t.Errorf("CurrentChannel: got %q want %q", ag.CurrentChannel, "telegram")
	}
}

func TestClearAgentChannel(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("bot1", "Bot", "gpt-4o", "openai")
	s.SetAgentChannel("bot1", "discord")
	s.ClearAgentChannel("bot1")

	ag := s.Snapshot().Agents["bot1"]
	if ag.CurrentChannel != "" {
		t.Errorf("CurrentChannel should be empty after clear, got %q", ag.CurrentChannel)
	}
}

func TestSetAgentChannel_NoopOnMissingAgent(t *testing.T) {
	s := NewOfficeState()
	// Should not panic on unknown agent.
	s.SetAgentChannel("nonexistent", "telegram")
}

// --- Phase 02: SetAgentMeta ---

func TestSetAgentMeta(t *testing.T) {
	s := NewOfficeState()
	s.RegisterAgent("a1", "Bot", "claude", "anthropic")
	s.SetAgentMeta("a1", "predefined", "Support Bot")

	ag := s.Snapshot().Agents["a1"]
	if ag.AgentType != "predefined" {
		t.Errorf("AgentType: got %q want predefined", ag.AgentType)
	}
	if ag.DisplayName != "Support Bot" {
		t.Errorf("DisplayName: got %q want 'Support Bot'", ag.DisplayName)
	}
}

// --- Phase 02: UpsertTeam ---

func TestUpsertTeam(t *testing.T) {
	s := NewOfficeState()
	s.UpsertTeam(OfficeTeam{
		ID:      "team-1",
		Name:    "Dev Team",
		LeadID:  "lead-agent",
		Members: []string{"lead-agent", "member-1"},
	})

	snap := s.Snapshot()
	team, ok := snap.Teams["team-1"]
	if !ok {
		t.Fatal("team-1 not found in snapshot")
	}
	if team.Name != "Dev Team" {
		t.Errorf("Name: got %q want Dev Team", team.Name)
	}
	if team.LeadID != "lead-agent" {
		t.Errorf("LeadID: got %q want lead-agent", team.LeadID)
	}
	if len(team.Members) != 2 {
		t.Errorf("Members count: got %d want 2", len(team.Members))
	}
}

func TestUpsertTeam_UpdatesExisting(t *testing.T) {
	s := NewOfficeState()
	s.UpsertTeam(OfficeTeam{ID: "t1", Name: "Alpha"})
	s.UpsertTeam(OfficeTeam{ID: "t1", Name: "Alpha V2"})

	snap := s.Snapshot()
	if snap.Teams["t1"].Name != "Alpha V2" {
		t.Errorf("Team name not updated, got %q", snap.Teams["t1"].Name)
	}
}

// --- Phase 02: AddDelegation / CompleteDelegation ---

func TestAddDelegation(t *testing.T) {
	s := NewOfficeState()
	s.AddDelegation(OfficeDelegation{ID: "d-1", SourceID: "a", TargetID: "b", Status: "running", Mode: "async"})

	snap := s.Snapshot()
	if len(snap.ActiveDelegations) != 1 {
		t.Fatalf("expected 1 delegation, got %d", len(snap.ActiveDelegations))
	}
	if snap.ActiveDelegations[0].ID != "d-1" {
		t.Errorf("ID mismatch")
	}
}

func TestCompleteDelegation(t *testing.T) {
	s := NewOfficeState()
	s.AddDelegation(OfficeDelegation{ID: "d-1", Status: "running"})
	s.CompleteDelegation("d-1", "completed")

	snap := s.Snapshot()
	if snap.ActiveDelegations[0].Status != "completed" {
		t.Errorf("Status: got %q want completed", snap.ActiveDelegations[0].Status)
	}
}

func TestCompleteDelegation_CancelledStatus(t *testing.T) {
	s := NewOfficeState()
	s.AddDelegation(OfficeDelegation{ID: "d-2", Status: "running"})
	s.CompleteDelegation("d-2", "cancelled")

	snap := s.Snapshot()
	if snap.ActiveDelegations[0].Status != "cancelled" {
		t.Errorf("Status: got %q want cancelled", snap.ActiveDelegations[0].Status)
	}
}

func TestCompleteDelegation_NoopOnMissingID(t *testing.T) {
	s := NewOfficeState()
	// Should not panic on unknown delegation ID.
	s.CompleteDelegation("nonexistent", "completed")
}

// --- Phase 02: Snapshot includes new fields ---

func TestSnapshot_IncludesTeamsAndDelegations(t *testing.T) {
	s := NewOfficeState()
	s.UpsertTeam(OfficeTeam{ID: "t1", Name: "Alpha", Members: []string{"a", "b"}})
	s.AddDelegation(OfficeDelegation{ID: "d1", SourceID: "a", TargetID: "b", Status: "running"})

	data, err := json.Marshal(s.Snapshot())
	if err != nil {
		t.Fatalf("marshal failed: %v", err)
	}
	var decoded map[string]interface{}
	if err := json.Unmarshal(data, &decoded); err != nil {
		t.Fatalf("unmarshal failed: %v", err)
	}
	if _, ok := decoded["teams"]; !ok {
		t.Error("missing 'teams' in JSON snapshot")
	}
	if _, ok := decoded["activeDelegations"]; !ok {
		t.Error("missing 'activeDelegations' in JSON snapshot")
	}
}

func TestSnapshot_TeamsIsolatedFromLiveState(t *testing.T) {
	s := NewOfficeState()
	s.UpsertTeam(OfficeTeam{ID: "t1", Name: "Alpha", Members: []string{"a"}})

	snap := s.Snapshot()
	// Mutate snapshot — live state must not change.
	snap.Teams["t1"].Members = append(snap.Teams["t1"].Members, "injected")

	live := s.Snapshot()
	if len(live.Teams["t1"].Members) != 1 {
		t.Errorf("snapshot mutation leaked into live state: %v", live.Teams["t1"].Members)
	}
}
