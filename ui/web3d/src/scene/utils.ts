import { CHAR_MODELS, STATE_HEX } from "./constants";

// Deterministic character index from agent ID
export function charIdx(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = ((h << 5) - h + id.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % CHAR_MODELS.length;
}

// Get state color as hex number
export function stateHex(s: string): number {
  return STATE_HEX[s] ?? 0x666688;
}

// Convert number to hex color string
export function hex6(n: number): string {
  return "#" + n.toString(16).padStart(6, "0");
}

// Capitalize first letter
export function cap(s: string): string {
  return s && s.length > 0 ? s[0]!.toUpperCase() + s.slice(1) : s;
}

// Smallest signed angle between two angles (radians)
export function shortestAngle(from: number, to: number): number {
  let d = to - from;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

// Map agent state to animation category
export function toAnimState(
  agentState: string,
  hasSpeechBubble: boolean
): "idle" | "walking" | "talking" {
  if (hasSpeechBubble && agentState === "responding") return "talking";
  if (agentState === "idle" || agentState === "error") return "idle";
  return "walking";
}

// Deterministic wall theme for a platform key
export function wallTheme(key: string): "arcade" | "market" {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (Math.imul(h, 31) + key.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 2 === 0 ? "arcade" : "market";
}

// Resolve platform key for an agent
export function resolvePlatform(
  agent: { id: string; state: string; currentChannel?: string } | null,
  teams: Record<string, { members?: string[] }>
): string {
  if (!agent) return "idle";

  // Team members always belong to their team zone
  for (const [tid, team] of Object.entries(teams)) {
    if (team.members?.includes(agent.id)) return `team:${tid}`;
  }

  // Only show channel platform while agent is actively processing
  if (agent.state !== "idle" && agent.state !== "error") {
    const ch = agent.currentChannel;
    if (ch) return ch;
  }

  return "idle";
}
