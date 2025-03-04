import { create } from "zustand";

const useOnOffStore = create((set) => ({
  isFullScreen: false,
  isDisplayDrawing: false,
  isClearDrawing: false,
  isCloseSpeakerPage: false,
  setIsFullScreen: (state) => set({ isFullScreen: state }),
  setIsDisplayDrawing: (state) => set({ isDisplayDrawing: state }),
  setIsClearDrawing: (state) => set({ isClearDrawing: state }),
  setIsCloseSpeakerPage: (state) => set({ isCloseSpeakerPage: state }),
}));

export default useOnOffStore;
