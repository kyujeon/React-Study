import { create } from "zustand";

export const useBear = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((useBear) => ({
      bears: state.bears + 1,
    })),
  removeAllBears: () =>
    set({
      bears: 0,
    }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
