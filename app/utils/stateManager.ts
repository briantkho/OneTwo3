import { create } from 'zustand';

interface GoalModalState {
  modalState: boolean;
  setModalStateTrue: () => void;
  setModalStateFalse: () => void;
}

export const useGoalModalStore = create<GoalModalState>()((set) => ({
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
interface HabitModalState {
  modalState: boolean;
  setModalStateTrue: () => void;
  setModalStateFalse: () => void;
}

export const useHabitModalStore = create<HabitModalState>()((set) => ({
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
