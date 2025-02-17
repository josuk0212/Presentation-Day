import { create } from "zustand";

const useOnOffStore = create((set) => ({
  isFullScreen: false,
  isOpenSpeakerPage: false,
  setIsFullScreen: (state) => set({ isFullScreen: state }),
  setIsOpenSpeakerpage: (state) => set({ isOpenSpeakerPage: state }),
}));

export default useOnOffStore;
