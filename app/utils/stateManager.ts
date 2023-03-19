import { create } from 'zustand';

interface ModalState {
  modalState: boolean;
  setModalState: () => void;
}

export const useModalStore = create<ModalState>()((set, get) => ({
  modalState: false,
  setModalState: () =>
    set((state) => ({
      modalState: !state.modalState,
    })),
}));
