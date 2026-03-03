package office

import (
	"sync"
	"time"
)

// AgentState represents the current activity state of an agent desk.
type AgentState string

const (
	StateIdle        AgentState = "idle"
	StateReceiving   AgentState = "receiving"
	StateThinking    AgentState = "thinking"
	StateResponding  AgentState = "responding"
	StateToolCalling AgentState = "tool_calling"
	StateError       AgentState = "error"
)

// AgentStats tracks cumulative metrics for an agent.
type AgentStats struct {
	MessagesToday int   `json:"messagesToday"`
	AvgResponseMs int64 `json:"avgResponseMs"`
	TokensUsed    int64 `json:"tokensUsed"`
	ErrorCount    int   `json:"errorCount"`
}

// OfficeAgent represents one agent's desk in the office view.
type OfficeAgent struct {
	ID           string     `json:"id"`
	Name         string     `json:"name"`
	Model        string     `json:"model"`
	Provider     string     `json:"provider"`
	State        AgentState `json:"state"`
	SpeechBubble string     `json:"speechBubble,omitempty"`
	CurrentRunID string     `json:"currentRunId,omitempty"`
	Stats        AgentStats `json:"stats"`
	LastActiveAt time.Time  `json:"lastActiveAt"`
	RunStartedAt time.Time  `json:"runStartedAt,omitempty"`
}

// GatewayDesk represents the central gateway status panel.
type GatewayDesk struct {
	Version    string    `json:"version"`
	Healthy    bool      `json:"healthy"`
	Mode       string    `json:"mode"` // "managed" or "standalone"
	Uptime     int64     `json:"uptime"`
	EventCount int64     `json:"eventCount"`
	StartedAt  time.Time `json:"startedAt"`
}

// Notification is a recent event entry shown in the activity log panel.
type Notification struct {
	ID        string    `json:"id"`
	AgentID   string    `json:"agentId,omitempty"`
	Type      string    `json:"type"`
	Message   string    `json:"message"`
	Timestamp time.Time `json:"timestamp"`
}

// OfficeState is the full snapshot of the office floor — mutex-protected in-memory state.
// Call Snapshot() to get a JSON-safe copy for serialization.
type OfficeState struct {
	Gateway       GatewayDesk            `json:"gateway"`
	Agents        map[string]*OfficeAgent `json:"agents"`
	Notifications []Notification          `json:"notifications"`
	UpdatedAt     time.Time              `json:"updatedAt"`

	mu        sync.RWMutex
	maxNotifs int
}

const defaultMaxNotifications = 50

// NewOfficeState creates an empty, ready-to-use office state.
func NewOfficeState() *OfficeState {
	return &OfficeState{
		Agents:    make(map[string]*OfficeAgent),
		maxNotifs: defaultMaxNotifications,
		Gateway: GatewayDesk{
			Healthy:   true,
			StartedAt: time.Now(),
		},
	}
}

// Snapshot returns a safe copy of the current state for JSON serialization.
// The returned value has no live mutex — safe to marshal from any goroutine.
func (s *OfficeState) Snapshot() OfficeState {
	s.mu.RLock()
	defer s.mu.RUnlock()

	// Deep-copy agents map so callers cannot mutate live state.
	agents := make(map[string]*OfficeAgent, len(s.Agents))
	for k, v := range s.Agents {
		agentCopy := *v
		agents[k] = &agentCopy
	}

	// Update uptime dynamically so the snapshot always reflects current wall time.
	gw := s.Gateway
	gw.Uptime = int64(time.Since(gw.StartedAt).Seconds())

	notifs := make([]Notification, len(s.Notifications))
	copy(notifs, s.Notifications)

	// Return a fresh struct literal — does NOT copy the live mutex.
	return OfficeState{
		Gateway:       gw,
		Agents:        agents,
		Notifications: notifs,
		UpdatedAt:     s.UpdatedAt,
	}
}

// RegisterAgent adds or updates agent metadata. Called on startup/discovery.
func (s *OfficeState) RegisterAgent(id, name, model, provider string) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if ag, ok := s.Agents[id]; ok {
		ag.Name = name
		ag.Model = model
		ag.Provider = provider
		return
	}
	s.Agents[id] = &OfficeAgent{
		ID:       id,
		Name:     name,
		Model:    model,
		Provider: provider,
		State:    StateIdle,
	}
}

// SetAgentState transitions an agent to a new state.
// Creates an agent entry if the agentID is not yet registered.
func (s *OfficeState) SetAgentState(agentID string, state AgentState, runID string) {
	s.mu.Lock()
	defer s.mu.Unlock()

	ag, ok := s.Agents[agentID]
	if !ok {
		ag = &OfficeAgent{ID: agentID, Name: agentID, State: StateIdle}
		s.Agents[agentID] = ag
	}

	ag.State = state
	ag.LastActiveAt = time.Now()

	if runID != "" {
		ag.CurrentRunID = runID
	}

	// Record run start time for response-time tracking.
	if state == StateThinking && ag.RunStartedAt.IsZero() {
		ag.RunStartedAt = time.Now()
	}

	// On terminal states: accumulate stats and reset transient fields.
	if state == StateIdle || state == StateError {
		if !ag.RunStartedAt.IsZero() {
			elapsed := time.Since(ag.RunStartedAt).Milliseconds()
			if ag.Stats.MessagesToday > 0 {
				ag.Stats.AvgResponseMs = (ag.Stats.AvgResponseMs + elapsed) / 2
			} else {
				ag.Stats.AvgResponseMs = elapsed
			}
			ag.RunStartedAt = time.Time{}
		}
		if state == StateIdle {
			ag.Stats.MessagesToday++
		}
		if state == StateError {
			ag.Stats.ErrorCount++
		}
		ag.CurrentRunID = ""
		ag.SpeechBubble = ""
	}

	s.UpdatedAt = time.Now()
}

// SetSpeechBubble updates the speech bubble text for an agent.
// No-op if agent is not registered.
func (s *OfficeState) SetSpeechBubble(agentID, text string) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if ag, ok := s.Agents[agentID]; ok {
		ag.SpeechBubble = text
	}
}

// AddNotification appends a notification, evicting the oldest if at capacity.
func (s *OfficeState) AddNotification(n Notification) {
	s.mu.Lock()
	defer s.mu.Unlock()

	s.Notifications = append(s.Notifications, n)
	if len(s.Notifications) > s.maxNotifs {
		s.Notifications = s.Notifications[len(s.Notifications)-s.maxNotifs:]
	}
}

// IncrementEventCount bumps the gateway-level event counter.
func (s *OfficeState) IncrementEventCount() {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.Gateway.EventCount++
}
