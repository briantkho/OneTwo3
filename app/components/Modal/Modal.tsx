'use client';

import { FormInput } from '../FormInput';

type ModalType = {
  category: string;
  data: any;
};

export default function Modal({ category, data }: ModalType) {
  const { stateValues, changeEvent, inputs, submit } = data;
  let newCategory = category;

  if (category) {
    if (newCategory.slice(-1) === 's') {
      newCategory = category.substring(0, category.length - 1);
    }
  }

  return (
    <div className="flex bg-opacity-50 bg-black w-screen h-screen fixed justify-center items-center top-0 left-0 m-auto backdrop-blur-sm">
      <div className="bg-white-bg">
        <p className="whitespace-nowrap">Add {newCategory}</p>
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
