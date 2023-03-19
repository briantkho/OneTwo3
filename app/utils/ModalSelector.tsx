'use client';

import GoalsModal from '../user/goals/GoalsModal';
import HabitsModal from '../user/habits/HabitsModal';
import { useGoalModalStore, useHabitModalStore } from './stateManager';

export default function ModalSelector() {
  const getGoalModalState = useGoalModalStore((state) => state.modalState);
  const getHabitModalState = useHabitModalStore((state) => state.modalState);

  const modalHandler = () => {
    if (getGoalModalState) return <GoalsModal />;
    else if (getHabitModalState) return <HabitsModal />;
  };

  console.log(getGoalModalState);

  return <div>{modalHandler()}</div>;
}
