'use client';

import GoalsModal from '@/app/user/goals/GoalsModal';
import HabitsModal from '@/app/user/habits/HabitsModal';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import Modal from '../Modal/Modal';

type AddType = {
  category: string;
};

export default function AddButton({ category }: AddType) {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const modalSelector = () => {
    if (category === CategoryTypes.goals) {
      return <GoalsModal key={category} />;
    } else if (category === CategoryTypes.habits) {
      return <HabitsModal key={category} />;
    }
  };

  return (
    <div>
      <VscAdd className="text-xl cursor-pointer" onClick={openModal} />
      {visible ? modalSelector() : null}
    </div>
  );
}
