import { create } from "zustand";
import { LOCAL_STORAGE_TOKEN_KEY } from "@/lib/constants";
import type { OfficeSnapshot, Notification, OfficeAgent } from "@/api/types";
import type { AgentRecord } from "@/api/agent-api";
import { charIdx } from "@/scene/utils";

// Build merged agents: all API agents (with correct characterIndex from key hash)
// overlaid with live SSE state for those that have fired events.
function buildMergedAgents(
  snapshot: OfficeSnapshot | null,
  apiAgents: AgentRecord[]
): Record<string, OfficeAgent> {
  const live = snapshot?.agents ?? {};
  const merged: Record<string, OfficeAgent> = {};

  for (const api of apiAgents) {
    const liveAgent = live[api.id];
    const ci = charIdx(api.agent_key);
    merged[api.id] = {
      id: api.id,
      name: api.agent_key,
      model: api.model,
      provider: api.provider,
      agentType: api.agent_type,
      displayName: api.display_name || api.agent_key,
      characterIndex: ci,
      state: liveAgent?.state ?? "idle",
      speechBubble: liveAgent?.speechBubble,
      currentRunId: liveAgent?.currentRunId,
      currentChannel: liveAgent?.currentChannel,
      lastActiveAt: liveAgent?.lastActiveAt ?? new Date(0).toISOString(),
    };
  }

  // Include any snapshot agents not in the API list (edge cases, e.g. standalone)
  for (const [id, agent] of Object.entries(live)) {
    if (!merged[id]) {
      merged[id] = { ...agent, characterIndex: charIdx(agent.name) };
    }
  }

  return merged;
}

function applyMerge(
  snapshot: OfficeSnapshot | null,
  apiAgents: AgentRecord[]
): OfficeSnapshot | null {
  if (!snapshot && apiAgents.length === 0) return null;
  const base = snapshot ?? {
    gateway: { version: "-", healthy: true, mode: "managed", uptime: 0, eventCount: 0, startedAt: new Date().toISOString() },
    agents: {}, teams: {}, activeDelegations: [], agentLinks: [], tasks: {}, notifications: [], updatedAt: new Date().toISOString(),
  } as unknown as OfficeSnapshot;
  return { ...base, agents: buildMergedAgents(snapshot, apiAgents) };
}

interface OfficeStore {
  token: string;
  connected: boolean;
  snapshot: OfficeSnapshot | null;
  mergedSnapshot: OfficeSnapshot | null;
  apiAgents: AgentRecord[];
  localNotifications: Notification[];
  notificationPanelOpen: boolean;
  agentPanelOpen: boolean;

  setToken: (t: string) => void;
  setConnected: (c: boolean) => void;
  setSnapshot: (s: OfficeSnapshot) => void;
  setApiAgents: (agents: AgentRecord[]) => void;
  addLocalNotification: (n: Notification) => void;
  clearLocalNotifications: () => void;
  toggleNotificationPanel: () => void;
  toggleAgentPanel: () => void;
}

const MAX_LOCAL_NOTIFICATIONS = 50;

export const useOfficeStore = create<OfficeStore>((set, get) => ({
  token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ?? "",
  connected: false,
  snapshot: null,
  mergedSnapshot: null,
  apiAgents: [],
  localNotifications: [],
  notificationPanelOpen: false,
  agentPanelOpen: false,

  setToken: (token) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    set({ token });
  },
  setConnected: (connected) => set({ connected }),
  setSnapshot: (snapshot) => {
    const { apiAgents } = get();
    set({ snapshot, mergedSnapshot: applyMerge(snapshot, apiAgents) });
  },
  setApiAgents: (apiAgents) => {
    const { snapshot } = get();
    set({ apiAgents, mergedSnapshot: applyMerge(snapshot, apiAgents) });
  },
  addLocalNotification: (n) =>
    set((state) => ({
      localNotifications: [
        ...state.localNotifications.slice(-MAX_LOCAL_NOTIFICATIONS + 1),
        n,
      ],
    })),
  clearLocalNotifications: () => set({ localNotifications: [] }),
  toggleNotificationPanel: () =>
    set((state) => ({ notificationPanelOpen: !state.notificationPanelOpen })),
  toggleAgentPanel: () =>
    set((state) => ({ agentPanelOpen: !state.agentPanelOpen })),
}));
