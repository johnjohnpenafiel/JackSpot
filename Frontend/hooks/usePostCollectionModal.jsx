
import { create } from "zustand";

const usePostCollectionModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePostCollectionModal;
