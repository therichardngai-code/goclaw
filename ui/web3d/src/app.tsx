import { useRef } from "react";
import { useOfficeStore } from "./stores/use-office-store";
import { useOfficeState } from "./hooks/use-office-state";
import { useScene } from "./hooks/use-scene";
import { AuthGate } from "./components/auth-gate";
import { HUD } from "./components/hud";
import { ReconnectBanner } from "./components/reconnect-banner";

export function App() {
  const token = useOfficeStore((s) => s.token);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useOfficeState(token);
  useScene(canvasRef);

  if (!token) {
    return <AuthGate />;
  }

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <HUD />
      <ReconnectBanner />
    </>
  );
}
