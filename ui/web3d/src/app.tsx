import { useRef } from "react";
import { useOfficeStore } from "./stores/use-office-store";
import { useOfficeState } from "./hooks/use-office-state";
import { useScene } from "./hooks/use-scene";
import { AuthGate } from "./components/auth-gate";
import { HUD } from "./components/hud";
import { ReconnectBanner } from "./components/reconnect-banner";
import { NotificationPanel } from "./components/notification-panel";
import { CameraControls } from "./components/camera-controls";

export function App() {
  const token = useOfficeStore((s) => s.token);
  const containerRef = useRef<HTMLDivElement>(null);

  useOfficeState(token);
  useScene(containerRef);

  if (!token) {
    return <AuthGate />;
  }

  return (
    <>
      <div ref={containerRef} className="absolute inset-0" />
      <HUD />
      <ReconnectBanner />
      <NotificationPanel />
      <CameraControls />
    </>
  );
}
