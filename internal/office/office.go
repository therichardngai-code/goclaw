package office

import (
	"context"
	"log/slog"
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
	ID       string
	Name     string
	Model    string
	Provider string
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
	}
}

// Start runs the SSE hub loop. Blocks until ctx is cancelled.
// Call in a dedicated goroutine: go office.Start(ctx)
func (o *Office) Start(ctx context.Context) {
	slog.Info("office.started",
		"version", o.State.Gateway.Version,
		"mode", o.State.Gateway.Mode,
	)
	o.Hub.Run(ctx)
	slog.Info("office.stopped")
}
