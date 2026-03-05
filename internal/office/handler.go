package office

import (
	"crypto/subtle"
	"embed"
	"encoding/json"
	"io/fs"
	"log/slog"
	"net/http"
)

//go:embed renderer
var rendererFS embed.FS

// Handler serves the Agent Office UI and API endpoints.
// Three routes: GET /office (UI), GET /office/state (JSON snapshot), GET /office/events (SSE stream).
type Handler struct {
	office *Office
	token  string
}

// NewHandler creates an office HTTP handler with the given token for auth.
func NewHandler(office *Office, token string) *Handler {
	return &Handler{office: office, token: token}
}

// RegisterRoutes adds all office routes to the given mux.
func (h *Handler) RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/office", h.ServeUI)
	mux.HandleFunc("/office/state", h.ServeState)
	mux.HandleFunc("/office/events", h.ServeSSE)

	// Serve 3D assets (GLB models, textures) embedded from renderer/assets/.
	assets, err := fs.Sub(rendererFS, "renderer/assets")
	if err != nil {
		slog.Error("office: failed to sub renderer/assets", "error", err)
		return
	}
	mux.Handle("/office/assets/", http.StripPrefix("/office/assets/", http.FileServer(http.FS(assets))))
}

// ServeUI serves the embedded index.html. No auth required — HTML shell contains no data.
func (h *Handler) ServeUI(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	data, err := fs.ReadFile(rendererFS, "renderer/index.html")
	if err != nil {
		slog.Error("office.serve_ui: read embedded file failed", "error", err)
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "no-cache")
	w.Write(data) //nolint:errcheck
}

// ServeState returns the current office state as a JSON snapshot.
// Auth: Bearer token header OR ?token= query param.
func (h *Handler) ServeState(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if !h.authenticate(r) {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	snap := h.office.State.Snapshot()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(snap) //nolint:errcheck
}

// ServeSSE establishes a Server-Sent Events stream for real-time state pushes.
// Auth: ?token= query param only (EventSource API cannot set custom headers).
// Sends initial state snapshot immediately on connect, then streams hub broadcasts.
func (h *Handler) ServeSSE(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if !h.authenticate(r) {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "streaming unsupported", http.StatusInternalServerError)
		return
	}

	// SSE headers — X-Accel-Buffering: no disables nginx proxy buffering.
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("X-Accel-Buffering", "no")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Register client with hub; hub handles capacity enforcement.
	client := NewSSEClient()
	h.office.Hub.Register(client)
	defer h.office.Hub.Unregister(client)

	// Send initial state snapshot immediately so the browser doesn't wait for the next event.
	snap := h.office.State.Snapshot()
	if data, err := json.Marshal(snap); err == nil {
		w.Write(formatSSE("state", data, 0)) //nolint:errcheck
		flusher.Flush()
	}

	slog.Debug("office.sse: client connected", "remote", r.RemoteAddr)

	ctx := r.Context()
	for {
		select {
		case msg, ok := <-client.Messages:
			if !ok {
				return // hub closed the channel (shutdown)
			}
			if _, err := w.Write(msg); err != nil {
				slog.Debug("office.sse: write error, disconnecting", "error", err)
				return
			}
			flusher.Flush()

		case <-client.Done():
			// Hub closed this client (capacity exceeded or shutdown).
			return

		case <-ctx.Done():
			// Browser disconnected.
			slog.Debug("office.sse: client disconnected", "remote", r.RemoteAddr)
			return
		}
	}
}

// authenticate validates the request token using constant-time comparison.
// Checks ?token= query param first (required for SSE EventSource), then Authorization header.
// Returns true when token is empty (no auth configured).
func (h *Handler) authenticate(r *http.Request) bool {
	if h.token == "" {
		return true // auth not configured
	}

	// Query param takes precedence — EventSource cannot set headers.
	if t := r.URL.Query().Get("token"); t != "" {
		return subtle.ConstantTimeCompare([]byte(t), []byte(h.token)) == 1
	}

	// Authorization: Bearer <token> fallback for non-SSE endpoints.
	auth := r.Header.Get("Authorization")
	if len(auth) > 7 && auth[:7] == "Bearer " {
		return subtle.ConstantTimeCompare([]byte(auth[7:]), []byte(h.token)) == 1
	}

	return false
}
