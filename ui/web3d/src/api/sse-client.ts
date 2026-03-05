import type { OfficeSnapshot } from "./types";

type SnapshotHandler = (snapshot: OfficeSnapshot) => void;
type ConnectionHandler = () => void;

export class OfficeSSEClient {
  private es: EventSource | null = null;
  private retryDelay = 1_000;
  private readonly maxRetry = 30_000;
  private token = "";
  private handlers = {
    snapshot: new Set<SnapshotHandler>(),
    connected: new Set<ConnectionHandler>(),
    disconnected: new Set<ConnectionHandler>(),
  };

  connect(token: string): void {
    this.token = token;
    this.doConnect();
  }

  private doConnect(): void {
    if (this.es) {
      this.es.close();
    }

    const url = `/office/events?token=${encodeURIComponent(this.token)}`;
    this.es = new EventSource(url);

    this.es.onopen = () => {
      this.retryDelay = 1_000;
      this.handlers.connected.forEach((cb) => cb());
    };

    this.es.onmessage = (event) => {
      try {
        const snapshot: OfficeSnapshot = JSON.parse(event.data);
        this.handlers.snapshot.forEach((cb) => cb(snapshot));
      } catch {
        // Ignore parse errors
      }
    };

    this.es.onerror = () => {
      this.handlers.disconnected.forEach((cb) => cb());
      this.es?.close();
      this.es = null;

      // Exponential backoff
      setTimeout(() => this.doConnect(), this.retryDelay);
      this.retryDelay = Math.min(this.retryDelay * 2, this.maxRetry);
    };
  }

  disconnect(): void {
    if (this.es) {
      this.es.close();
      this.es = null;
    }
  }

  on(event: "snapshot", cb: SnapshotHandler): () => void;
  on(event: "connected" | "disconnected", cb: ConnectionHandler): () => void;
  on(
    event: "snapshot" | "connected" | "disconnected",
    cb: SnapshotHandler | ConnectionHandler
  ): () => void {
    if (event === "snapshot") {
      this.handlers.snapshot.add(cb as SnapshotHandler);
      return () => this.handlers.snapshot.delete(cb as SnapshotHandler);
    }
    if (event === "connected") {
      this.handlers.connected.add(cb as ConnectionHandler);
      return () => this.handlers.connected.delete(cb as ConnectionHandler);
    }
    this.handlers.disconnected.add(cb as ConnectionHandler);
    return () => this.handlers.disconnected.delete(cb as ConnectionHandler);
  }
}
