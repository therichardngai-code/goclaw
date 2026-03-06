import * as THREE from "three";
import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";
import { ASSET_BASE, CHAN_COLOR, CHAN_ICON, MACHINE_DEFS } from "./constants";
import { cap, hex6, wallTheme } from "./utils";
import type { AssetLoader } from "./asset-loader";
import type { CameraController } from "./camera-controller";

interface PlatformData {
  group: THREE.Group;
  width: number;
  depth: number;
  color: number;
}

interface WallSet {
  glbs: {
    wall: THREE.Object3D | null;
    corner: THREE.Object3D | null;
    door: THREE.Object3D | null;
    column: THREE.Object3D | null;
  };
  pending: Array<
    [THREE.Group, number, number, number, "arcade" | "market"]
  >;
  colormap: THREE.Texture;
}

export class PlatformManager {
  private scene: THREE.Scene;
  private loader: AssetLoader;
  private map = new Map<string, PlatformData>();

  private crateGLB: THREE.Object3D | null = null;
  private cratePending: Array<{
    g: THREE.Group;
    color: number;
    W: number;
    D: number;
  }> = [];
  private blasterColormap: THREE.Texture;

  private machinesReady = false;
  private machinePool: Record<
    string,
    { scene: THREE.Object3D; colorTheme: string }
  > = {};
  private machinePending: Array<
    [THREE.Group, number, number, number, string]
  > = [];

  private wallSets: Record<"arcade" | "market", WallSet>;

  constructor(scene: THREE.Scene, loader: AssetLoader) {
    this.scene = scene;
    this.loader = loader;

    this.blasterColormap = loader.loadTexture(
      `${ASSET_BASE}/platform/blaster-colormap.png`
    );

    this.wallSets = {
      arcade: this.createWallSet("arcade"),
      market: this.createWallSet("market"),
    };

    this.loadCrate();
    this.loadMachines();
    this.loadWallSets();
  }

  private createWallSet(theme: "arcade" | "market"): WallSet {
    return {
      glbs: { wall: null, corner: null, door: null, column: null },
      pending: [],
      colormap: this.loader.loadTexture(
        `${ASSET_BASE}/platform/${theme}-colormap.png`
      ),
    };
  }

  private async loadCrate(): Promise<void> {
    try {
      const gltf = await this.loader.loadGLTF(
        `${ASSET_BASE}/platform/crate-medium.glb`
      );
      this.crateGLB = gltf.scene;
      for (const { g, color, W, D } of this.cratePending) {
        this.addCrates(g, color, W, D);
      }
      this.cratePending = [];
    } catch (err) {
      console.warn("[office] crate GLB load failed:", err);
    }
  }

  private async loadMachines(): Promise<void> {
    const promises = MACHINE_DEFS.map(async (def) => {
      try {
        const gltf = await this.loader.loadGLTF(
          `${ASSET_BASE}/platform/machines/${def.file}.glb`
        );
        this.machinePool[def.file] = {
          scene: gltf.scene,
          colorTheme: def.colorTheme,
        };
      } catch (err) {
        console.warn("[office] machine GLB failed:", def.file, err);
      }
    });

    await Promise.all(promises);
    this.machinesReady = true;
    for (const args of this.machinePending) {
      this.addMachines(...args);
    }
    this.machinePending = [];
  }

  private async loadWallSets(): Promise<void> {
    for (const theme of ["arcade", "market"] as const) {
      const set = this.wallSets[theme];
      const dir =
        theme === "arcade"
          ? `${ASSET_BASE}/platform/`
          : `${ASSET_BASE}/platform/market/`;
      const assets: Array<[string, keyof WallSet["glbs"]]> = [
        ["wall", "wall"],
        ["wall-corner", "corner"],
        ["wall-door-rotate", "door"],
        ["column", "column"],
      ];

      await Promise.all(
        assets.map(async ([file, key]) => {
          try {
            const gltf = await this.loader.loadGLTF(`${dir}${file}.glb`);
            set.glbs[key] = gltf.scene;
          } catch (err) {
            console.warn("[office] wall GLB failed:", theme, file, err);
          }
        })
      );

      // Process pending walls
      for (const args of set.pending) {
        this.addWalls(...args);
      }
      set.pending = [];
    }
  }

  create(key: string, teams: Record<string, { name?: string }>): void {
    let color: number = CHAN_COLOR.idle ?? 0x334466;
    let icon = "H";
    let name = "Home";

    if (key.startsWith("team:")) {
      const t = teams[key.slice(5)];
      color = CHAN_COLOR.team ?? 0xffd700;
      icon = "T";
      name = t?.name || "Team";
    } else if (key !== "idle") {
      const chanColor = CHAN_COLOR[key];
      if (chanColor !== undefined) {
        color = chanColor;
        icon = CHAN_ICON[key] || "X";
        name = cap(key);
      }
    }

    const W = 5.5;
    const D = 4.5;
    const group = new THREE.Group();

    // Ground fill
    const fill = new THREE.Mesh(
      new THREE.PlaneGeometry(W, D),
      new THREE.MeshStandardMaterial({
        color: 0x080818,
        transparent: true,
        opacity: 0.45,
        roughness: 1,
        metalness: 0,
        depthWrite: false,
      })
    );
    fill.rotation.x = -Math.PI / 2;
    fill.receiveShadow = true;
    group.add(fill);

    // Border
    const hw = W / 2;
    const hd = D / 2;
    const y = 0.01;
    const pts = [
      new THREE.Vector3(-hw, y, -hd),
      new THREE.Vector3(hw, y, -hd),
      new THREE.Vector3(hw, y, hd),
      new THREE.Vector3(-hw, y, hd),
      new THREE.Vector3(-hw, y, -hd),
    ];
    group.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color })
      )
    );

    // Label
    const div = document.createElement("div");
    div.className = "platform-label";
    div.textContent = `${icon} ${name}`;
    div.style.color = hex6(color);
    div.style.fontSize = "0.72rem";
    div.style.fontWeight = "600";
    div.style.letterSpacing = "0.08em";
    div.style.padding = "3px 10px";
    div.style.background = "#05050fcc";
    div.style.borderRadius = "12px";
    div.style.border = `1px solid ${hex6(color)}`;
    div.style.whiteSpace = "nowrap";
    div.style.textShadow = `0 0 8px ${hex6(color)}`;
    const lbl = new CSS2DObject(div);
    lbl.position.set(-hw + 0.3, 0, hd + 0.3);
    group.add(lbl);

    // Crates
    if (this.crateGLB) {
      this.addCrates(group, color, W, D);
    } else {
      this.cratePending.push({ g: group, color, W, D });
    }

    // Walls
    const theme = wallTheme(key);
    const wset = this.wallSets[theme];
    const wallsReady = wset.glbs.wall && wset.glbs.corner && wset.glbs.door;
    if (wallsReady) {
      this.addWalls(group, color, W, D, theme);
    } else {
      wset.pending.push([group, color, W, D, theme]);
    }

    // Machines
    if (this.machinesReady) {
      this.addMachines(group, color, W, D, key);
    } else {
      this.machinePending.push([group, color, W, D, key]);
    }

    this.scene.add(group);
    this.map.set(key, { group, width: W, depth: D, color });
  }

  remove(key: string): void {
    const p = this.map.get(key);
    if (!p) return;

    this.scene.remove(p.group);
    p.group.traverse((o) => {
      // Check for CSS2DObject by checking for element property
      const css2dObj = o as CSS2DObject & { isCSS2DObject?: boolean };
      if (css2dObj.element && css2dObj.element.parentNode) {
        css2dObj.element.parentNode.removeChild(css2dObj.element);
      }
      const mesh = o as THREE.Mesh;
      mesh.geometry?.dispose();
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    });
    this.map.delete(key);
  }

  layout(camCtrl: CameraController): void {
    const list = [...this.map.values()];
    if (!list.length || !list[0]) return;

    const first = list[0];
    const cols = Math.max(1, Math.ceil(Math.sqrt(list.length)));
    const gX = 3.5;
    const gZ = 3.5;
    const stepX = first.width + gX;
    const stepZ = first.depth + gZ;
    const offX = ((cols - 1) * stepX) / 2;

    list.forEach((p, i) => {
      p.group.position.set(
        (i % cols) * stepX - offX,
        0,
        Math.floor(i / cols) * stepZ
      );
    });

    camCtrl.fitToScene(
      list.map((p) => ({
        position: p.group.position,
        width: p.width,
        depth: p.depth,
      }))
    );
  }

  slotPos(key: string, slot: number, total: number): THREE.Vector3 {
    const p = this.map.get(key);
    if (!p) return new THREE.Vector3();

    const perRow = Math.min(4, Math.max(1, total));
    const col = slot % perRow;
    const row = Math.floor(slot / perRow);
    const rows = Math.ceil(total / perRow);

    return p.group.position.clone().add(
      new THREE.Vector3(
        (col - (perRow - 1) / 2) * 1.3,
        0.15,
        row * 1.3 - (rows - 1) * 0.65
      )
    );
  }

  has(key: string): boolean {
    return this.map.has(key);
  }

  keys(): IterableIterator<string> {
    return this.map.keys();
  }

  private addCrates(
    g: THREE.Group,
    color: number,
    W: number,
    D: number
  ): void {
    if (!this.crateGLB) return;
    const hw = W / 2;
    const hd = D / 2;
    const inset = 0.42;
    const corners: Array<[number, number, number]> = [
      [hw - inset, -hd + inset, Math.PI / 2],
    ];

    for (const corner of corners) {
      const [cx, cz, ry] = corner;
      const crate = SkeletonUtils.clone(this.crateGLB);
      crate.scale.setScalar(1);
      crate.position.set(cx, 0, cz);
      crate.rotation.y = ry;
      crate.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const m = child as THREE.Mesh;
          m.castShadow = true;
          m.receiveShadow = true;
          m.material = (m.material as THREE.Material).clone();
          (m.material as THREE.MeshStandardMaterial).map =
            this.blasterColormap;
          (m.material as THREE.MeshStandardMaterial).emissive =
            new THREE.Color(color);
          (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.18;
          m.material.needsUpdate = true;
        }
      });
      g.add(crate);
    }
  }

  private pickMachines(key: string): string[] {
    const files = Object.keys(this.machinePool);
    if (!files.length) return [];
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = (Math.imul(h, 31) + key.charCodeAt(i)) | 0;
    }
    const n = files.length;
    const i0 = Math.abs(h) % n;
    const i1 = (i0 + 1) % n;
    const f0 = files[i0];
    const f1 = files[i1];
    return f0 && f1 ? [f0, f1] : f0 ? [f0] : [];
  }

  private addMachines(
    g: THREE.Group,
    color: number,
    W: number,
    D: number,
    key: string
  ): void {
    const TARGET_H = 1.3;
    const hw = W / 2;
    const hd = D / 2;
    const slots = [
      { x: -hw * 0.55, z: -hd + 0.5, ry: 0 },
      { x: -hw + 0.5, z: 0, ry: Math.PI / 2 },
    ];

    const picked = this.pickMachines(key);
    for (let i = 0; i < picked.length; i++) {
      const file = picked[i];
      if (!file) continue;
      const def = this.machinePool[file];
      if (!def) continue;

      const mesh = SkeletonUtils.clone(def.scene);
      const box = new THREE.Box3().setFromObject(mesh);
      const sz = new THREE.Vector3();
      box.getSize(sz);

      if (sz.y > 0.01) {
        const s = TARGET_H / sz.y;
        mesh.scale.setScalar(s);
        mesh.position.y = -box.min.y * s;
      }

      const colormap = this.wallSets[def.colorTheme as "arcade" | "market"]
        ?.colormap;
      mesh.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const m = child as THREE.Mesh;
          m.castShadow = true;
          m.material = (m.material as THREE.Material).clone();
          if (colormap) {
            (m.material as THREE.MeshStandardMaterial).map = colormap;
          }
          (m.material as THREE.MeshStandardMaterial).emissive =
            new THREE.Color(color);
          (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.12;
          m.material.needsUpdate = true;
        }
      });

      const slot = slots[i];
      if (!slot) continue;
      const grp = new THREE.Group();
      grp.add(mesh);
      grp.position.set(slot.x, 0, slot.z);
      grp.rotation.y = slot.ry;
      g.add(grp);
    }
  }

  private prepWallMesh(
    src: THREE.Object3D,
    color: number,
    colormap: THREE.Texture
  ): THREE.Object3D {
    const mesh = SkeletonUtils.clone(src);
    mesh.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const m = child as THREE.Mesh;
        m.castShadow = true;
        m.material = (m.material as THREE.Material).clone();
        (m.material as THREE.MeshStandardMaterial).map = colormap;
        (m.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(
          color
        );
        (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15;
        m.material.needsUpdate = true;
      }
    });
    return mesh;
  }

  private addWalls(
    g: THREE.Group,
    color: number,
    W: number,
    D: number,
    theme: "arcade" | "market"
  ): void {
    const set = this.wallSets[theme];
    const { wall, corner, door, column } = set.glbs;
    const colormap = set.colormap;
    if (!wall || !corner || !door) return;

    const hw = W / 2;
    const hd = D / 2;

    // Measure tile width
    const tmp = SkeletonUtils.clone(wall);
    const bbox = new THREE.Box3().setFromObject(tmp);
    const sz = new THREE.Vector3();
    bbox.getSize(sz);
    const tileW = Math.max(sz.x, sz.z) > 0.01 ? Math.max(sz.x, sz.z) : 1.0;

    // Back wall
    const nBack = Math.ceil(W / tileW);
    const doorIdx = Math.floor(nBack / 2);
    const startX = -(((nBack - 1) * tileW) / 2);
    for (let i = 0; i < nBack; i++) {
      const src = i === doorIdx ? door : wall;
      const tile = this.prepWallMesh(src, color, colormap);
      tile.position.set(startX + i * tileW, 0, -hd);
      tile.rotation.y = 0;
      g.add(tile);
    }

    // Left wall
    const nLeft = Math.ceil(D / tileW);
    const startZ = -(((nLeft - 1) * tileW) / 2);
    for (let i = 0; i < nLeft; i++) {
      const tile = this.prepWallMesh(wall, color, colormap);
      tile.position.set(-hw, 0, startZ + i * tileW);
      tile.rotation.y = Math.PI / 2;
      g.add(tile);
    }

    // Corner
    const c = this.prepWallMesh(corner, color, colormap);
    c.position.set(-hw, 0, -hd);
    c.rotation.y = Math.PI / 2;
    g.add(c);

    // Column
    if (column) {
      const col = this.prepWallMesh(column, color, colormap);
      col.position.set(-hw, 0, -hd);
      g.add(col);
    }
  }
}
