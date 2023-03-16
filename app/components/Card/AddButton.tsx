'use client';

import GoalsModal from '@/app/user/goals/GoalsModal';
import HabitsModal from '@/app/user/habits/HabitsModal';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useModalStore } from '@/app/utils/stateManager';
import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';

type AddType = {
  category: string;
};

export default function AddButton({ category }: AddType) {
  const [visible, setVisible] = useState(false);

  const toggleModal = useModalStore((state: any) => state.toggleModal);
  // const modalSelector = () => {
  //   if (category === CategoryTypes.goals) {
  //     return <GoalsModal key={category} />;
  //   } else if (category === CategoryTypes.habits) {
  //     return <HabitsModal key={category} />;
  //   }
  // };

  return (
    <div>
      {/* {get ? modalSelector() : null} */}
      <button
        className="cursor-pointer"
        // onClick={console.log('YEET')}
        onClick={toggleModal}
      >
        +
      </button>
    </div>
  );
}
