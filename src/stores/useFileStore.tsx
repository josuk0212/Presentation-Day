import { create } from "zustand";

interface FileStore {
  pdfUrl: string;
  setPdfUrl: (state: string) => void;
}

const useFileStore = create<FileStore>((set) => ({
  pdfUrl: "",
  setPdfUrl: (state) => set({ pdfUrl: state }),
}));

export default useFileStore;
