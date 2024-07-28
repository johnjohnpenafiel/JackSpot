
import { create } from "zustand"

const usePostModal = create((set) => ({
  isOpen:false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
}));


export default usePostModal;