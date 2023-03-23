'use client';

import { CategoryTypes } from '@/app/utils/CategoryTypes';
import {
  useGoalModalStore,
  useHabitModalStore,
  useTaskModalStore,
} from '@/app/utils/stateManager';

type ToggleComponentProps = {
  category: string;
};

export default function ToggleModal({ category }: ToggleComponentProps) {
  const toggleGoalState = useGoalModalStore((state) => state.setModalStateTrue);
  const toggleHabitState = useHabitModalStore(
    (state) => state.setModalStateTrue
  );
  const toggleTaskState = useTaskModalStore((state) => state.setModalStateTrue);

  const handleToggle = () => {
    if (category === CategoryTypes.goals) toggleGoalState();
    else if (category === CategoryTypes.habits) toggleHabitState();
    else if (category === CategoryTypes.tasks) toggleTaskState();
  };

  return (
    <button className="text-xl" onClick={handleToggle}>
      +
    </button>
  );
}
