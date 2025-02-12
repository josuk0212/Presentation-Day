import { create } from "zustand";

const useFileStore = create((set) => ({
  pdfUrl: "",
  setPdfUrl: (state) => set({ pdfUrl: state }),
}));

export default useFileStore;
