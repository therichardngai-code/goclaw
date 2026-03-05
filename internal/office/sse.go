package office

import (
	"context"
	"encoding/json"
	"fmt"
	"log/slog"
	"sync/atomic"
)

const (
	clientBufferSize = 16
	defaultMaxClients = 100
)

// SSEClient represents a single connected browser's event stream.
// The HTTP handler reads from Messages and writes raw SSE bytes to the response.
type SSEClient struct {
	Messages chan []byte
	done     chan struct{}
}

// NewSSEClient creates a client with a buffered message channel.
func NewSSEClient() *SSEClient {
	return &SSEClient{
		Messages: make(chan []byte, clientBufferSize),
		done:     make(chan struct{}),
	}
}

// Close signals that this client's connection has been closed.
// Safe to call multiple times.
func (c *SSEClient) Close() {
	select {
	case <-c.done:
	default:
		close(c.done)
	}
}

// Done returns a channel that is closed when the client disconnects.
func (c *SSEClient) Done() <-chan struct{} {
	return c.done
}

// SSEHub manages all connected SSE browser clients.
// One goroutine runs the select loop (Run); all other goroutines interact
// via the register/unregister/broadcast channels — no direct map access.
type SSEHub struct {
	register   chan *SSEClient
	unregister chan *SSEClient
	broadcast  chan []byte
	maxClients int
	eventID    atomic.Int64
}

// NewSSEHub creates a hub ready to be started with Run().
func NewSSEHub() *SSEHub {
	return &SSEHub{
		register:   make(chan *SSEClient, 8),
		unregister: make(chan *SSEClient, 8),
		broadcast:  make(chan []byte, 512),
		maxClients: defaultMaxClients,
	}
}

// BroadcastState serialises a state snapshot into an SSE message and
// queues it for fan-out to all connected clients.
// Satisfies the stateBroadcaster interface used by Bridge.
// Non-blocking: drops the message if the broadcast channel is full.
func (h *SSEHub) BroadcastState(state *OfficeState) {
	snap := state.Snapshot()
	data, err := json.Marshal(snap)
	if err != nil {
		slog.Error("office.sse: marshal state failed", "error", err)
		return
	}
	id := h.eventID.Add(1)
	msg := formatSSE("state", data, id)

	select {
	case h.broadcast <- msg:
	default:
		slog.Debug("office.sse: broadcast channel full, message dropped")
	}
}

// Run is the hub's main loop. It blocks until ctx is cancelled.
// Must be called in a dedicated goroutine.
func (h *SSEHub) Run(ctx context.Context) {
	clients := make(map[*SSEClient]struct{})

	for {
		select {
		case client := <-h.register:
			if len(clients) >= h.maxClients {
				slog.Warn("office.sse: max clients reached, rejecting connection",
					"max", h.maxClients)
				client.Close()
				continue
			}
			clients[client] = struct{}{}
			slog.Debug("office.sse: client connected", "total", len(clients))

		case client := <-h.unregister:
			if _, ok := clients[client]; ok {
				delete(clients, client)
				client.Close()
				slog.Debug("office.sse: client disconnected", "total", len(clients))
			}

		case msg := <-h.broadcast:
			for client := range clients {
				select {
				case client.Messages <- msg:
				default:
					// Client too slow to consume — drop rather than block the hub.
					slog.Debug("office.sse: slow client, message dropped")
				}
			}

		case <-ctx.Done():
			// Graceful shutdown: signal all clients to stop streaming.
			for client := range clients {
				client.Close()
			}
			slog.Info("office.sse: hub stopped", "clients_closed", len(clients))
			return
		}
	}
}

// Register adds a client to the hub. Returns false if the hub is at capacity
// (the client will be closed by the hub's Run loop on capacity check).
func (h *SSEHub) Register(client *SSEClient) {
	h.register <- client
}

// Unregister removes a client from the hub and closes it.
func (h *SSEHub) Unregister(client *SSEClient) {
	h.unregister <- client
}

// formatSSE formats bytes into an SSE message frame.
// Format: "event: {name}\ndata: {data}\nid: {id}\n\n"
func formatSSE(event string, data []byte, id int64) []byte {
	return []byte(fmt.Sprintf("event: %s\ndata: %s\nid: %d\n\n", event, data, id))
}
