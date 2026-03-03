package office

import (
	"bytes"
	"context"
	"strings"
	"testing"
	"time"
)

// --- SSEClient ---

func TestSSEClient_CloseSignalsDone(t *testing.T) {
	c := NewSSEClient()
	select {
	case <-c.Done():
		t.Fatal("done channel should be open before Close()")
	default:
	}

	c.Close()

	select {
	case <-c.Done():
		// expected
	case <-time.After(100 * time.Millisecond):
		t.Fatal("done channel should be closed after Close()")
	}
}

func TestSSEClient_CloseIdempotent(t *testing.T) {
	c := NewSSEClient()
	// Calling Close multiple times must not panic.
	c.Close()
	c.Close()
	c.Close()
}

// --- formatSSE ---

func TestFormatSSE_CorrectFormat(t *testing.T) {
	data := []byte(`{"agents":{}}`)
	msg := formatSSE("state", data, 1)

	got := string(msg)
	if !strings.HasPrefix(got, "event: state\n") {
		t.Errorf("expected 'event: state\\n' prefix, got: %q", got)
	}
	if !strings.Contains(got, "data: {\"agents\":{}}\n") {
		t.Errorf("expected data line, got: %q", got)
	}
	if !strings.Contains(got, "id: 1\n") {
		t.Errorf("expected id line, got: %q", got)
	}
	if !strings.HasSuffix(got, "\n\n") {
		t.Errorf("SSE message must end with double newline, got: %q", got)
	}
}

func TestFormatSSE_EventIDMonotonic(t *testing.T) {
	msg1 := formatSSE("state", []byte("{}"), 1)
	msg2 := formatSSE("state", []byte("{}"), 2)

	if bytes.Equal(msg1, msg2) {
		t.Error("messages with different IDs should not be equal")
	}
	if !strings.Contains(string(msg1), "id: 1") {
		t.Errorf("msg1 should contain id: 1, got: %q", string(msg1))
	}
	if !strings.Contains(string(msg2), "id: 2") {
		t.Errorf("msg2 should contain id: 2, got: %q", string(msg2))
	}
}

// --- SSEHub.Run lifecycle ---

func TestSSEHub_RunExitsOnContextCancel(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())

	done := make(chan struct{})
	go func() {
		hub.Run(ctx)
		close(done)
	}()

	cancel()

	select {
	case <-done:
		// expected
	case <-time.After(500 * time.Millisecond):
		t.Fatal("hub.Run should exit when context is cancelled")
	}
}

// --- Register / Unregister ---

func TestSSEHub_RegisterAndReceiveBroadcast(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	client := NewSSEClient()
	hub.Register(client)

	// Allow hub goroutine to process the registration.
	time.Sleep(10 * time.Millisecond)

	// Broadcast a raw message directly to test fan-out.
	msg := []byte("event: state\ndata: {}\nid: 1\n\n")
	hub.broadcast <- msg

	select {
	case received := <-client.Messages:
		if !bytes.Equal(received, msg) {
			t.Errorf("received %q, want %q", received, msg)
		}
	case <-time.After(200 * time.Millisecond):
		t.Fatal("client should have received the broadcast message")
	}
}

func TestSSEHub_UnregisterStopsDelivery(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	client := NewSSEClient()
	hub.Register(client)
	time.Sleep(10 * time.Millisecond)

	hub.Unregister(client)
	time.Sleep(10 * time.Millisecond)

	// Hub should have closed the client's done channel.
	select {
	case <-client.Done():
		// expected
	case <-time.After(200 * time.Millisecond):
		t.Fatal("client.Done() should be closed after Unregister")
	}

	// Broadcast should not deliver to unregistered client.
	hub.broadcast <- []byte("event: state\ndata: {}\nid: 2\n\n")
	time.Sleep(10 * time.Millisecond)

	select {
	case msg := <-client.Messages:
		t.Errorf("unregistered client should not receive messages, got: %q", msg)
	default:
		// expected — no message
	}
}

// --- Fan-out to multiple clients ---

func TestSSEHub_FanOutToMultipleClients(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	const n = 5
	clients := make([]*SSEClient, n)
	for i := range clients {
		clients[i] = NewSSEClient()
		hub.Register(clients[i])
	}
	time.Sleep(20 * time.Millisecond)

	msg := []byte("event: state\ndata: {\"test\":true}\nid: 1\n\n")
	hub.broadcast <- msg

	for i, c := range clients {
		select {
		case received := <-c.Messages:
			if !bytes.Equal(received, msg) {
				t.Errorf("client[%d]: got %q want %q", i, received, msg)
			}
		case <-time.After(200 * time.Millisecond):
			t.Errorf("client[%d] should have received broadcast", i)
		}
	}
}

// --- Slow client drop ---

func TestSSEHub_SlowClientDoesNotBlockHub(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	// Slow client: buffer size = 16, we'll fill it and then broadcast more.
	slowClient := NewSSEClient()
	fastClient := NewSSEClient()
	hub.Register(slowClient)
	hub.Register(fastClient)
	time.Sleep(10 * time.Millisecond)

	// Fill slow client's buffer without reading from it.
	for i := 0; i < clientBufferSize; i++ {
		slowClient.Messages <- []byte("prefill")
	}

	// This broadcast should not block even though slowClient buffer is full.
	msg := []byte("event: state\ndata: {}\nid: 99\n\n")
	done := make(chan struct{})
	go func() {
		hub.broadcast <- msg
		close(done)
	}()

	select {
	case <-done:
		// hub accepted the broadcast without blocking
	case <-time.After(500 * time.Millisecond):
		t.Fatal("hub blocked on slow client")
	}

	// Fast client should still receive the message.
	select {
	case received := <-fastClient.Messages:
		if !bytes.Equal(received, msg) {
			t.Errorf("fastClient: got %q want %q", received, msg)
		}
	case <-time.After(200 * time.Millisecond):
		t.Fatal("fast client should have received the message")
	}
}

// --- Max clients enforcement ---

func TestSSEHub_MaxClientsRejectsExcess(t *testing.T) {
	hub := NewSSEHub()
	hub.maxClients = 2 // override for test

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)
	time.Sleep(10 * time.Millisecond)

	c1 := NewSSEClient()
	c2 := NewSSEClient()
	c3 := NewSSEClient() // should be rejected

	hub.Register(c1)
	hub.Register(c2)
	hub.Register(c3)
	time.Sleep(30 * time.Millisecond)

	// c3 should have been closed (rejected by hub).
	select {
	case <-c3.Done():
		// expected
	case <-time.After(200 * time.Millisecond):
		t.Fatal("excess client should be closed when at capacity")
	}

	// c1 and c2 must still be open.
	select {
	case <-c1.Done():
		t.Error("c1 should still be open (within capacity)")
	default:
	}
	select {
	case <-c2.Done():
		t.Error("c2 should still be open (within capacity)")
	default:
	}
}

// --- Graceful shutdown closes all clients ---

func TestSSEHub_ShutdownClosesAllClients(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	go hub.Run(ctx)
	time.Sleep(10 * time.Millisecond)

	clients := []*SSEClient{NewSSEClient(), NewSSEClient(), NewSSEClient()}
	for _, c := range clients {
		hub.Register(c)
	}
	time.Sleep(20 * time.Millisecond)

	cancel() // trigger shutdown
	time.Sleep(50 * time.Millisecond)

	for i, c := range clients {
		select {
		case <-c.Done():
			// expected
		case <-time.After(200 * time.Millisecond):
			t.Errorf("client[%d] should be closed on hub shutdown", i)
		}
	}
}

// --- BroadcastState integration ---

func TestSSEHub_BroadcastState_DeliversSSEMessage(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	client := NewSSEClient()
	hub.Register(client)
	time.Sleep(10 * time.Millisecond)

	state := NewOfficeState()
	state.Gateway.Version = "0.5.0"
	state.Gateway.Mode = "standalone"
	hub.BroadcastState(state)

	select {
	case msg := <-client.Messages:
		s := string(msg)
		if !strings.HasPrefix(s, "event: state\n") {
			t.Errorf("expected 'event: state\\n' prefix, got: %q", s)
		}
		if !strings.Contains(s, `"version":"0.5.0"`) {
			t.Errorf("SSE data should contain gateway version, got: %q", s)
		}
		if !strings.Contains(s, `"mode":"standalone"`) {
			t.Errorf("SSE data should contain gateway mode, got: %q", s)
		}
	case <-time.After(200 * time.Millisecond):
		t.Fatal("client should have received BroadcastState message")
	}
}

func TestSSEHub_BroadcastState_EventIDIncrementsMonotonically(t *testing.T) {
	hub := NewSSEHub()
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go hub.Run(ctx)

	client := NewSSEClient()
	hub.Register(client)
	time.Sleep(10 * time.Millisecond)

	state := NewOfficeState()
	hub.BroadcastState(state)
	hub.BroadcastState(state)

	recvWithTimeout := func(label string) []byte {
		select {
		case msg := <-client.Messages:
			return msg
		case <-time.After(200 * time.Millisecond):
			t.Fatalf("timeout waiting for %s", label)
			return nil
		}
	}

	msg1 := recvWithTimeout("first message")
	msg2 := recvWithTimeout("second message")

	if !strings.Contains(string(msg1), "id: 1") {
		t.Errorf("first broadcast should have id: 1, got: %q", string(msg1))
	}
	if !strings.Contains(string(msg2), "id: 2") {
		t.Errorf("second broadcast should have id: 2, got: %q", string(msg2))
	}
}

// --- Satisfies stateBroadcaster interface ---

func TestSSEHub_SatisfiesStateBroadcasterInterface(t *testing.T) {
	// Compile-time check: *SSEHub must satisfy stateBroadcaster.
	var _ stateBroadcaster = (*SSEHub)(nil)
}
