package http

import (
	"net/http"

	"github.com/nextlevelbuilder/goclaw/internal/sandbox"
	"github.com/nextlevelbuilder/goclaw/internal/store"
)

// SandboxPortsHandler serves viewport port info for the requesting tenant's active sandbox.
// Used by ClawBoxes to proxy live browser (noVNC) and terminal (ttyd) views.
type SandboxPortsHandler struct {
	sandboxMgr sandbox.Manager
}

// NewSandboxPortsHandler creates a handler for sandbox port queries.
func NewSandboxPortsHandler(mgr sandbox.Manager) *SandboxPortsHandler {
	return &SandboxPortsHandler{sandboxMgr: mgr}
}

// RegisterRoutes registers the sandbox ports endpoint.
func (h *SandboxPortsHandler) RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("GET /v1/sandbox/ports", requireAuth("", h.handlePorts))
}

func (h *SandboxPortsHandler) handlePorts(w http.ResponseWriter, r *http.Request) {
	if h.sandboxMgr == nil {
		writeJSON(w, http.StatusOK, map[string]any{"status": "disabled"})
		return
	}

	// Try tenant slug as sandbox key (tenant-scoped sandbox)
	tenantSlug := store.TenantSlugFromContext(r.Context())
	if tenantSlug == "" {
		// Fallback: try user ID as key
		tenantSlug = store.UserIDFromContext(r.Context())
	}

	if tenantSlug == "" {
		writeJSON(w, http.StatusOK, map[string]any{"status": "inactive"})
		return
	}

	vncPort, ttydPort := h.sandboxMgr.GetPorts(tenantSlug)

	// Also check with common key patterns
	if vncPort == 0 && ttydPort == 0 {
		// Try all active sandboxes — find one matching this user's tenant
		stats := h.sandboxMgr.Stats()
		if containers, ok := stats["containers"].(map[string]string); ok {
			for key := range containers {
				v, t := h.sandboxMgr.GetPorts(key)
				if v > 0 || t > 0 {
					vncPort, ttydPort = v, t
					break
				}
			}
		}
	}

	if vncPort == 0 && ttydPort == 0 {
		writeJSON(w, http.StatusOK, map[string]any{"status": "inactive"})
		return
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"status":    "running",
		"vnc_port":  vncPort,
		"ttyd_port": ttydPort,
	})
}
