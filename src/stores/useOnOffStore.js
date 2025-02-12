import { create } from "zustand";

const useOnOffStore = create((set) => ({
  isFullScreen: false,
  setIsFullScreen: (state) => set({ isFullScreen: state }),
}));

export default useOnOffStore;
