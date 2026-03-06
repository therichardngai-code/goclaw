import { create } from "zustand";
import { LOCAL_STORAGE_TOKEN_KEY } from "@/lib/constants";
import type { OfficeSnapshot, Notification } from "@/api/types";

interface OfficeStore {
  token: string;
  connected: boolean;
  snapshot: OfficeSnapshot | null;
  localNotifications: Notification[];
  notificationPanelOpen: boolean;
  agentPanelOpen: boolean;

  setToken: (t: string) => void;
  setConnected: (c: boolean) => void;
  setSnapshot: (s: OfficeSnapshot) => void;
  addLocalNotification: (n: Notification) => void;
  clearLocalNotifications: () => void;
  toggleNotificationPanel: () => void;
  toggleAgentPanel: () => void;
}

const MAX_LOCAL_NOTIFICATIONS = 50;

export const useOfficeStore = create<OfficeStore>((set) => ({
  token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ?? "",
  connected: false,
  snapshot: null,
  localNotifications: [],
  notificationPanelOpen: false,
  agentPanelOpen: false,

  setToken: (token) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    set({ token });
  },
  setConnected: (connected) => set({ connected }),
  setSnapshot: (snapshot) => set({ snapshot }),
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
