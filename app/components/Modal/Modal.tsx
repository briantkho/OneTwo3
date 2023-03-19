'use client';

import { useModalStore } from '@/app/utils/stateManager';
import { FormInput } from '../FormInput';

type ModalType = {
  category: string;
  data: any;
};

export default function Modal({ category, data }: ModalType) {
  const { stateValues, changeEvent, inputs, submit } = data;
  let newCategory = category;

  const toggleModal = useModalStore((state) => state.setModalState);

  if (category) {
    if (newCategory.slice(-1) === 's') {
      newCategory = category.substring(0, category.length - 1);
    }
  }

  return (
    <div
      onClick={toggleModal}
      className="flex bg-opacity-50 bg-black w-screen h-screen fixed justify-center items-center top-0 left-0 m-auto backdrop-blur-sm"
    >
      <div className="bg-white-bg flex flex-col w-2/3 p-10 rounded-md">
        <p className="whitespace-nowrap font-bold text-xl">Add {newCategory}</p>
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
    </div>
  );
}
