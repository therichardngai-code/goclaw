import { create } from "zustand";
import { LOCAL_STORAGE_TOKEN_KEY } from "@/lib/constants";
import type { OfficeSnapshot } from "@/api/types";

interface OfficeStore {
  token: string;
  connected: boolean;
  snapshot: OfficeSnapshot | null;

  setToken: (t: string) => void;
  setConnected: (c: boolean) => void;
  setSnapshot: (s: OfficeSnapshot) => void;
}

export const useOfficeStore = create<OfficeStore>((set) => ({
  token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ?? "",
  connected: false,
  snapshot: null,

  setToken: (token) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    set({ token });
  },
  setConnected: (connected) => set({ connected }),
  setSnapshot: (snapshot) => set({ snapshot }),
}));
