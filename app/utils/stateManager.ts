import { create } from 'zustand';

interface ModalState {
  modalState: boolean;
  setModalStateTrue: () => void;
  setModalStateFalse: () => void;
}

export const useGoalModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));

export const useHabitModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));

export const useTaskModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));
