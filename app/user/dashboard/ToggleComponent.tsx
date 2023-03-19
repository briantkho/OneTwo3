'use client';

import { CategoryTypes } from '@/app/utils/CategoryTypes';
import {
  useGoalModalStore,
  useHabitModalStore,
} from '@/app/utils/stateManager';

type ToggleComponentProps = {
  category: string;
};

export default function ToggleComponent({ category }: ToggleComponentProps) {
  const toggleGoalState = useGoalModalStore((state) => state.setModalStateTrue);
  const toggleHabitState = useHabitModalStore(
    (state) => state.setModalStateTrue
  );

  const handleToggle = () => {
    if (category === CategoryTypes.goals) toggleGoalState();
    else if (category === CategoryTypes.habits) toggleHabitState();
  };

  return (
    <button className="text-xl" onClick={handleToggle}>
      +
    </button>
  );
}
