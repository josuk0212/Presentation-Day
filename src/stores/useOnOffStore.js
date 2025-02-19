import { create } from "zustand";

const useOnOffStore = create((set) => ({
  isFullScreen: false,
  isOpenSpeakerPage: false,
  isDisplayDrawing: false,
  isClearDrawing: false,
  setIsFullScreen: (state) => set({ isFullScreen: state }),
  setIsOpenSpeakerpage: (state) => set({ isOpenSpeakerPage: state }),
  setIsDisplayDrawing: (state) => set({ isDisplayDrawing: state }),
  setIsClearDrawing: (state) => set({ isClearDrawing: state }),
}));

export default useOnOffStore;
