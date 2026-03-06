import { useEffect, useRef } from "react";
import { OfficeSSEClient } from "@/api/sse-client";
import { useOfficeStore } from "@/stores/use-office-store";
import type { OfficeSnapshot } from "@/api/types";

// Coalesce rapid SSE bursts (LLM token chunks fire at 20-50 Hz).
// Scene update at ~7-10 Hz is more than enough for visual smoothness.
const DEBOUNCE_MS = 150;

export function useOfficeState(token: string): void {
  const setSnapshot = useOfficeStore((s) => s.setSnapshot);
  const setConnected = useOfficeStore((s) => s.setConnected);
  const clientRef = useRef<OfficeSSEClient | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef<OfficeSnapshot | null>(null);

  useEffect(() => {
    if (!token) return;

    const client = new OfficeSSEClient();
    clientRef.current = client;

    // Trailing-edge debounce — always flushes the latest snapshot
    const debouncedSetSnapshot = (snapshot: OfficeSnapshot) => {
      pendingRef.current = snapshot;
      if (timerRef.current !== null) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (pendingRef.current) setSnapshot(pendingRef.current);
        timerRef.current = null;
        pendingRef.current = null;
      }, DEBOUNCE_MS);
    };

    client.on("snapshot", debouncedSetSnapshot);
    client.on("connected", () => setConnected(true));
    client.on("disconnected", () => setConnected(false));
    client.connect(token);

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
      client.disconnect();
      clientRef.current = null;
    };
  }, [token, setSnapshot, setConnected]);
}
