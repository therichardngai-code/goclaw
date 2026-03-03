package office

import (
	"context"
	"log/slog"
)

// Office is the top-level controller for the Agent Office feature.
// It owns the in-memory state and coordinates the SSE hub and event bridge.
// Hub and Bridge fields are wired in by later phases (Phase 3 and Phase 2).
type Office struct {
	State *OfficeState
	// Hub  *SSEHub  — added in Phase 3
	// bridge *Bridge — added in Phase 2
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

	return &Office{State: state}
}

// SeedAgents pre-populates agent desks from known agents at startup.
// In standalone mode call with router.ListInfo(); in managed mode agents
// auto-register on first bus event so this is optional.
func (o *Office) SeedAgents(seeds []AgentSeed) {
	for _, a := range seeds {
		o.State.RegisterAgent(a.ID, a.Name, a.Model, a.Provider)
	}
}

// Start blocks until ctx is cancelled. Intended to be called in a goroutine.
// Phase 3 will replace the body with o.Hub.Run(ctx).
func (o *Office) Start(ctx context.Context) {
	slog.Info("office.started",
		"version", o.State.Gateway.Version,
		"mode", o.State.Gateway.Mode,
	)
	<-ctx.Done()
	slog.Info("office.stopped")
}
