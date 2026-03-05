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

	// 3D renderer fields
	CurrentChannel string `json:"currentChannel,omitempty"` // "telegram","discord","whatsapp","feishu","zalo","direct"
	AgentType      string `json:"agentType,omitempty"`       // "open" or "predefined"
	DisplayName    string `json:"displayName,omitempty"`     // human-friendly label
	CharacterIndex int    `json:"characterIndex"`            // 0–13, deterministic from agent ID hash
}

// OfficeTeam represents a team cluster shown as its own platform in the 3D scene.
type OfficeTeam struct {
	ID      string   `json:"id"`
	Name    string   `json:"name"`
	LeadID  string   `json:"leadId"`
	Members []string `json:"members"` // agent IDs
}

// OfficeDelegation tracks an active delegation arc between two agents.
type OfficeDelegation struct {
	ID        string    `json:"id"`
	SourceID  string    `json:"sourceId"`
	TargetID  string    `json:"targetId"`
	Status    string    `json:"status"` // "running","completed","failed","cancelled"
	Mode      string    `json:"mode"`   // "sync","async"
	StartedAt time.Time `json:"startedAt"`
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
	Gateway           GatewayDesk             `json:"gateway"`
	Agents            map[string]*OfficeAgent  `json:"agents"`
	Notifications     []Notification           `json:"notifications"`
	UpdatedAt         time.Time               `json:"updatedAt"`
	Teams             map[string]*OfficeTeam   `json:"teams,omitempty"`
	ActiveDelegations []OfficeDelegation       `json:"activeDelegations,omitempty"`

	mu        sync.RWMutex
	maxNotifs int
}

const defaultMaxNotifications = 50

// NewOfficeState creates an empty, ready-to-use office state.
func NewOfficeState() *OfficeState {
	return &OfficeState{
		Agents:    make(map[string]*OfficeAgent),
		Teams:     make(map[string]*OfficeTeam),
		maxNotifs: defaultMaxNotifications,
		Gateway: GatewayDesk{
			Healthy:   true,
			StartedAt: time.Now(),
		},
	}
}

// computeCharacterIndex maps an agent ID to a deterministic character model index (0–13).
// Uses the same hash algorithm as the Three.js renderer so they always agree.
func computeCharacterIndex(agentID string) int {
	const numCharacters = 14
	hash := int32(0)
	for _, c := range agentID {
		hash = (hash<<5 - hash) + int32(c)
	}
	if hash < 0 {
		hash = -hash
	}
	return int(hash) % numCharacters
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

	// Deep-copy teams map.
	teams := make(map[string]*OfficeTeam, len(s.Teams))
	for k, v := range s.Teams {
		members := make([]string, len(v.Members))
		copy(members, v.Members)
		t := *v
		t.Members = members
		teams[k] = &t
	}

	// Copy active delegations slice.
	delegations := make([]OfficeDelegation, len(s.ActiveDelegations))
	copy(delegations, s.ActiveDelegations)

	// Return a fresh struct literal — does NOT copy the live mutex.
	return OfficeState{
		Gateway:           gw,
		Agents:            agents,
		Notifications:     notifs,
		Teams:             teams,
		ActiveDelegations: delegations,
		UpdatedAt:         s.UpdatedAt,
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
		ID:             id,
		Name:           name,
		Model:          model,
		Provider:       provider,
		State:          StateIdle,
		CharacterIndex: computeCharacterIndex(id),
	}
}

// SetAgentState transitions an agent to a new state.
// Creates an agent entry if the agentID is not yet registered.
func (s *OfficeState) SetAgentState(agentID string, state AgentState, runID string) {
	s.mu.Lock()
	defer s.mu.Unlock()

	ag, ok := s.Agents[agentID]
	if !ok {
		ag = &OfficeAgent{ID: agentID, Name: agentID, State: StateIdle, CharacterIndex: computeCharacterIndex(agentID)}
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
		ag.CurrentRunID   = ""
		ag.SpeechBubble   = ""
		ag.CurrentChannel = "" // always clear channel on terminal state so the channel platform is removed
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

// SetAgentChannel updates the channel an agent is currently serving.
func (s *OfficeState) SetAgentChannel(agentID, channel string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if ag, ok := s.Agents[agentID]; ok {
		ag.CurrentChannel = channel
	}
}

// ClearAgentChannel removes channel context when an agent goes idle.
func (s *OfficeState) ClearAgentChannel(agentID string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if ag, ok := s.Agents[agentID]; ok {
		ag.CurrentChannel = ""
	}
}

// SetAgentMeta sets the agent type and display name (called during seeding).
func (s *OfficeState) SetAgentMeta(id, agentType, displayName string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if ag, ok := s.Agents[id]; ok {
		ag.AgentType = agentType
		ag.DisplayName = displayName
	}
}

// UpsertTeam adds or updates a team in the state.
func (s *OfficeState) UpsertTeam(team OfficeTeam) {
	s.mu.Lock()
	defer s.mu.Unlock()
	t := team
	s.Teams[team.ID] = &t
	s.UpdatedAt = time.Now()
}

// AddDelegation tracks a new active delegation arc.
func (s *OfficeState) AddDelegation(d OfficeDelegation) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.ActiveDelegations = append(s.ActiveDelegations, d)
	s.UpdatedAt = time.Now()
}

// CompleteDelegation marks a delegation arc with the given terminal status.
// Delegations in terminal state are kept briefly so the UI can animate the completion,
// then they are pruned on the next cleanup pass (handled by periodic snapshot trimming).
func (s *OfficeState) CompleteDelegation(id, status string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	for i := range s.ActiveDelegations {
		if s.ActiveDelegations[i].ID == id {
			s.ActiveDelegations[i].Status = status
			break
		}
	}
	s.UpdatedAt = time.Now()
}
