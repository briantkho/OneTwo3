'use client';

import GoalsModal from '@/app/user/goals/GoalsModal';
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

  return (
    <div>
      <VscAdd
        className="text-xl cursor-pointer dark:text-white-bg"
        onClick={openModal}
      />
      {visible ? <GoalsModal /> : null}
    </div>
  );
}
