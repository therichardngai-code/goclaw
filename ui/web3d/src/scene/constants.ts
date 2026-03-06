// Scene constants matching the original renderer

export const ASSET_BASE = "/office/assets";

export const CHAN_COLOR: Record<string, number> = {
  telegram: 0x2aabee,
  discord: 0x5865f2,
  whatsapp: 0x25d366,
  feishu: 0x00b0f0,
  zalo: 0xff3333,
  zalo_personal: 0xff3333,
  direct: 0xff6600,
  system: 0xff6600,
  team: 0xffd700,
  idle: 0x334466,
};

export const CHAN_ICON: Record<string, string> = {
  telegram: "T",
  discord: "D",
  whatsapp: "W",
  feishu: "F",
  zalo: "Z",
  zalo_personal: "Z",
  direct: "X",
  system: "X",
  team: "T",
  idle: "H",
};

export const CHAR_MODELS = [
  "character-female-a",
  "character-female-b",
  "character-female-c",
  "character-female-d",
  "character-female-e",
  "character-female-f",
  "character-male-a",
  "character-male-b",
  "character-male-c",
  "character-male-d",
  "character-male-e",
  "character-male-f",
  "character-employee",
  "character-gamer",
];

// Per-character animated GLB names
export const ANIM_GLB: Array<{
  idle: string | null;
  walking: string | null;
  talking: string | null;
}> = [
  {
    idle: "anim-female-a-idle",
    walking: "anim-female-a-walking",
    talking: "anim-female-a-talking",
  },
  {
    idle: "anim-female-a-idle",
    walking: "anim-female-a-walking",
    talking: "anim-female-a-talking",
  },
  { idle: "anim-female-c-idle", walking: "anim-female-c-walking", talking: null },
  { idle: "anim-female-d-idle", walking: "anim-female-d-walking", talking: null },
  { idle: "anim-female-c-idle", walking: "anim-female-c-walking", talking: null },
  { idle: "anim-female-d-idle", walking: "anim-female-d-walking", talking: null },
  { idle: "anim-male-a-idle", walking: "anim-male-a-walking", talking: null },
  { idle: "anim-male-b-idle", walking: "anim-male-b-walking", talking: null },
  {
    idle: "anim-male-c-idle",
    walking: "anim-male-c-walking",
    talking: "anim-male-c-talking",
  },
  { idle: "anim-male-d-idle", walking: "anim-male-d-walking", talking: null },
  { idle: "anim-male-e-idle", walking: "anim-male-e-walking", talking: null },
  { idle: "anim-male-f-idle", walking: "anim-male-f-walking", talking: null },
  { idle: "anim-employee-idle", walking: "anim-employee-walking", talking: null },
  { idle: "anim-gamer-idle", walking: "anim-gamer-walking", talking: null },
];

// Platform slot Y offsets — space-station has 2 elevated stone layers
export const HOME_SLOT_Y = 1.8;  // upper deck of space-station
export const DEFAULT_SLOT_Y = 0.15;

// Platform room Y rotation (radians) — camera sits at PI/4 (45°) from +Z toward +X
// Tune these so each room's entrance faces the camera
export const HOME_ROTATION_Y = Math.PI;          // space-station
export const ROOM_ROTATION_Y = -Math.PI / 2;     // arcade-full / mini-market-full

// Movement constants
export const WALK_SPEED = 0.35;
export const WANDER_RANGE = 0.45;
export const ARRIVE_DIST = 0.08;
export const HANDSHAKE_MS = 3000;

// Camera constants
export const CAM_RADIUS = Math.sqrt(12 * 12 + 12 * 12);
export const CAM_HEIGHT = 10;

// State colors
export const STATE_HEX: Record<string, number> = {
  idle: 0x666688,
  thinking: 0x4488ff,
  responding: 0x44ff88,
  tool_calling: 0xffaa00,
  error: 0xff3333,
};
