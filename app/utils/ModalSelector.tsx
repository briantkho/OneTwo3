'use client';

import ItemModal from '../components/Modal/ItemModal';
import Modal from '../components/Modal/Modal';
import TasksModal from '../components/Tasks/TasksModal';
import GoalsModal from '../user/goals/GoalsModal';
import HabitsModal from '../user/habits/HabitsModal';
import {
  // useEditModalStore,
  useGoalModalStore,
  useHabitModalStore,
  // useCreateModalStore,
  useEditModalStore,
  useTaskModalStore,
} from './stateManager';

export default function ModalSelector() {
  const getGoalModalState = useGoalModalStore((state) => state.modalState);
  const getHabitModalState = useHabitModalStore((state) => state.modalState);
  const getTaskModalState = useTaskModalStore((state) => state.modalState);
  // const getCreateModalState = use
  // const getCreateModalState = useCreateModalStore((state) => state.modalState);
  // const getCreateModalData = useCreateModalStore((state) => state.data);
  // const getCreateModalCategory = useCreateModalStore((state) => state.category);

  const getEditModalState = useEditModalStore((state) => state.modalState);
  const getEditModalData = useEditModalStore((state) => state.data);

  const modalHandler = () => {
    if (getGoalModalState) return <GoalsModal />;
    else if (getHabitModalState) return <HabitsModal />;
    else if (getTaskModalState) return <TasksModal />;
    else if (getEditModalState) return <ItemModal data={getEditModalData} />;
  };

  return <div>{modalHandler()}</div>;
}
