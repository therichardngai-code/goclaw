import * as THREE from "three";
import type { OfficeSnapshot } from "@/api/types";

/**
 * OfficeScene manages the Three.js renderer, camera, and scene graph.
 * This is a minimal scaffold — full implementation comes in Phase 4.
 */
export class OfficeScene {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animationId: number | null = null;

  init(canvas: HTMLCanvasElement): void {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x0a0a0f);

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 15, 20);
    this.camera.lookAt(0, 0, 0);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(10, 20, 10);
    this.scene.add(directional);

    // Ground plane placeholder
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial({ color: 0x1a1a24 })
    );
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    // Handle resize
    window.addEventListener("resize", this.handleResize);

    // Start render loop
    this.animate();
  }

  private handleResize = (): void => {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  update(_snapshot: OfficeSnapshot): void {
    // TODO: Phase 4 — reconcile scene with snapshot
    // - Platforms (idle + channel + team)
    // - Characters (spawn/move/animate/bubble)
    // - Delegation arcs
    // - Agent link arcs
  }

  dispose(): void {
    window.removeEventListener("resize", this.handleResize);
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.renderer?.dispose();
    this.scene?.clear();
    this.renderer = null;
    this.scene = null;
    this.camera = null;
  }
}
