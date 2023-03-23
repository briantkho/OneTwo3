'use client';

import TasksModal from '../components/Tasks/TasksModal';
import GoalsModal from '../user/goals/GoalsModal';
import HabitsModal from '../user/habits/HabitsModal';
import {
  useGoalModalStore,
  useHabitModalStore,
  useTaskModalStore,
} from './stateManager';

export default function ModalSelector() {
  const getGoalModalState = useGoalModalStore((state) => state.modalState);
  const getHabitModalState = useHabitModalStore((state) => state.modalState);
  const getTaskModalState = useTaskModalStore((state) => state.modalState);

  const modalHandler = () => {
    if (getGoalModalState) return <GoalsModal />;
    else if (getHabitModalState) return <HabitsModal />;
    else if (getTaskModalState) return <TasksModal />;
  };

  return <div>{modalHandler()}</div>;
}
