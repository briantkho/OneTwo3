import { create } from 'zustand';

interface ModalState {
  modalState: boolean;
  setModalStateTrue: () => void;
  setModalStateFalse: () => void;
}

interface EditModalState {
  modalState: boolean;
  data: any;
  setModalStateTrue: () => void;
  setModalStateFalse: () => void;
  setModalData: (data: any) => void;
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

export const useEditModalStore = create<EditModalState>()((set) => ({
  modalState: false,
  data: null,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
  setModalData: (data) =>
    set((state) => ({
      data: data,
    })),
}));
