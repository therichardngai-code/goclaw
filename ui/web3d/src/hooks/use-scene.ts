import { useEffect, useRef, type RefObject } from "react";
import { useOfficeStore } from "@/stores/use-office-store";
import { OfficeScene } from "@/scene/office-scene";

// Global reference for camera controls
let globalScene: OfficeScene | null = null;

export function useScene(canvasRef: RefObject<HTMLCanvasElement | null>): void {
  const sceneRef = useRef<OfficeScene | null>(null);
  const snapshot = useOfficeStore((s) => s.snapshot);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new OfficeScene();
    scene.init(canvasRef.current);
    sceneRef.current = scene;
    globalScene = scene;

    return () => {
      scene.dispose();
      sceneRef.current = null;
      globalScene = null;
    };
  }, [canvasRef]);

  useEffect(() => {
    if (snapshot && sceneRef.current) {
      sceneRef.current.update(snapshot);
    }
  }, [snapshot]);
}

// Camera control functions for external use
export function sceneZoomIn(): void {
  globalScene?.zoomIn();
}

export function sceneZoomOut(): void {
  globalScene?.zoomOut();
}

export function sceneRotateLeft(): void {
  globalScene?.rotateLeft();
}

export function sceneRotateRight(): void {
  globalScene?.rotateRight();
}

export function sceneResetCamera(): void {
  globalScene?.resetCamera();
}
