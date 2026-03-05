import { useEffect, useRef, type RefObject } from "react";
import { useOfficeStore } from "@/stores/use-office-store";
import { OfficeScene } from "@/scene/office-scene";

export function useScene(canvasRef: RefObject<HTMLCanvasElement | null>): void {
  const sceneRef = useRef<OfficeScene | null>(null);
  const snapshot = useOfficeStore((s) => s.snapshot);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new OfficeScene();
    scene.init(canvasRef.current);
    sceneRef.current = scene;

    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, [canvasRef]);

  useEffect(() => {
    if (snapshot && sceneRef.current) {
      sceneRef.current.update(snapshot);
    }
  }, [snapshot]);
}
