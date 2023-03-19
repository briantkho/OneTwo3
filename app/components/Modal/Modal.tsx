'use client';

import {
  useGoalModalStore,
  useHabitModalStore,
} from '@/app/utils/stateManager';
import { FormInput } from '../FormInput';
import { GrClose } from 'react-icons/gr';
import { CategoryTypes } from '@/app/utils/CategoryTypes';

type ModalType = {
  category: string;
  data: any;
};

export default function Modal({ category, data }: ModalType) {
  const { stateValues, changeEvent, inputs, submit } = data;
  let newCategory = category;

  const toggleGoalState = useGoalModalStore(
    (state) => state.setModalStateFalse
  );
  const toggleHabitState = useHabitModalStore(
    (state) => state.setModalStateFalse
  );

  const toggleModal = () => {
    if (category === CategoryTypes.goals) toggleGoalState();
    else if (category === CategoryTypes.habits) toggleHabitState();
  };

  if (category) {
    if (newCategory.slice(-1) === 's') {
      newCategory = category.substring(0, category.length - 1);
    }
  }

  return (
    <div className="flex w-screen h-screen fixed justify-center items-center top-0 left-0 m-auto backdrop-blur-sm z-50">
      <div className="bg-white-bg flex flex-col w-2/3 p-10 rounded-3xl shadow-lg">
        <div className="flex justify-between items-center">
          <p className="whitespace-nowrap font-bold text-xl">
            Add {newCategory}
          </p>
          <GrClose className="cursor-pointer" onClick={toggleModal} />
        </div>
        <form onSubmit={submit}>
          {inputs.map((input: any) => (
            <FormInput
              key={input.id}
              value={stateValues[input.name]}
              {...input}
              onChange={changeEvent}
            />
          ))}
          <button type="submit">Go!</button>
        </form>
      </div>
      <div
        className="bg-black w-screen h-screen absolute -z-10 opacity-50"
        onClick={toggleModal}
      ></div>
    </div>
  );
}
