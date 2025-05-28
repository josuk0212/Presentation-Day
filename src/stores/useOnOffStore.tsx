import { create } from "zustand";

interface OnOffStore {
  isFullScreen: boolean;
  isDisplayDrawing: boolean;
  isClearDrawing: boolean;
  isCloseSpeakerPage: boolean;
  setIsFullScreen: (state: boolean) => void;
  setIsDisplayDrawing: (state: boolean) => void;
  setIsClearDrawing: (state: boolean) => void;
  setIsCloseSpeakerPage: (state: boolean) => void;
}

const useOnOffStore = create<OnOffStore>((set) => ({
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
