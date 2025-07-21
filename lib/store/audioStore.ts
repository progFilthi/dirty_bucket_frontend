import { create } from "zustand";

interface AudioStore {
  currentPlayingId: string | null;
  setCurrentPlayingId: (id: string | null) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  currentPlayingId: null,
  setCurrentPlayingId: (id) => set({ currentPlayingId: id }),
}));
