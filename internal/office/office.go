package office

import (
	"context"
	"log/slog"
	"time"
)

// Office is the top-level controller for the Agent Office feature.
// It owns the in-memory state and the SSE hub.
// The event Bridge is wired externally by the gateway (Phase 6).
type Office struct {
	State *OfficeState
	Hub   *SSEHub
}

// AgentSeed is the minimal info needed to pre-populate an agent desk on startup.
type AgentSeed struct {
	ID          string
	Name        string
	Model       string
	Provider    string
	AgentType   string // "open" or "predefined"
	DisplayName string // human-friendly label shown above the 3D character
}

// New creates a new Office instance with gateway metadata pre-set.
func New(version, mode string) *Office {
	state := NewOfficeState()
	state.Gateway.Version = version
	state.Gateway.Mode = mode

	return &Office{
		State: state,
		Hub:   NewSSEHub(),
	}
}

// SeedAgents pre-populates agent desks from known agents at startup.
// In standalone mode call with router.ListInfo(); in managed mode agents
// auto-register on first bus event so this is optional.
func (o *Office) SeedAgents(seeds []AgentSeed) {
	for _, a := range seeds {
		o.State.RegisterAgent(a.ID, a.Name, a.Model, a.Provider)
		if a.AgentType != "" || a.DisplayName != "" {
			o.State.SetAgentMeta(a.ID, a.AgentType, a.DisplayName)
		}
	}
}

// TeamSeed is the minimal info needed to pre-populate a team platform on startup.
type TeamSeed struct {
	ID      string
	Name    string
	LeadID  string
	Members []string // agent IDs
}

// SeedTeams pre-populates team platforms from known teams at startup.
// Only meaningful in managed mode where teams exist in the database.
func (o *Office) SeedTeams(seeds []TeamSeed) {
	for _, t := range seeds {
		o.State.UpsertTeam(OfficeTeam{
			ID:      t.ID,
			Name:    t.Name,
			LeadID:  t.LeadID,
			Members: t.Members,
		})
	}
}

// Start runs the SSE hub loop and a periodic state heartbeat.
// The heartbeat re-pushes the current state every 3 seconds so browsers
// self-correct if any event-driven broadcast was dropped during high-traffic bursts
// (the broadcast channel is non-blocking and silently drops when full).
// Blocks until ctx is cancelled. Call in a dedicated goroutine: go office.Start(ctx)
func (o *Office) Start(ctx context.Context) {
	slog.Info("office.started",
		"version", o.State.Gateway.Version,
		"mode", o.State.Gateway.Mode,
	)

	// Periodic heartbeat: push current state snapshot to all clients.
	// Ensures agent positions/states catch up even after dropped broadcasts.
	ticker := time.NewTicker(3 * time.Second)
	defer ticker.Stop()
	go func() {
		for {
			select {
			case <-ticker.C:
				o.Hub.BroadcastState(o.State)
			case <-ctx.Done():
				return
			}
		}
	}()

	o.Hub.Run(ctx)
	slog.Info("office.stopped")
}
