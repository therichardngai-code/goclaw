import { useEffect, useRef } from "react";
import { OfficeSSEClient } from "@/api/sse-client";
import { useOfficeStore } from "@/stores/use-office-store";

export function useOfficeState(token: string): void {
  const setSnapshot = useOfficeStore((s) => s.setSnapshot);
  const setConnected = useOfficeStore((s) => s.setConnected);
  const clientRef = useRef<OfficeSSEClient | null>(null);

  useEffect(() => {
    if (!token) return;

    const client = new OfficeSSEClient();
    clientRef.current = client;

    client.on("snapshot", setSnapshot);
    client.on("connected", () => setConnected(true));
    client.on("disconnected", () => setConnected(false));
    client.connect(token);

    return () => {
      client.disconnect();
      clientRef.current = null;
    };
  }, [token, setSnapshot, setConnected]);
}
