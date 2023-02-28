'use client';

import { CategoryInput } from '@/app/utils/CategoryInputs';
import { useState } from 'react';
import { FormInput } from '../FormInput';

type ModalType = {
  category: string;
  data?: any;
};

export default function Modal({ category, data }: ModalType) {
  let newCategory = category;

  const [values, setValues] = useState({
    title: '',
    description: '',
    targetDate: '',
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (category) {
    if (newCategory.slice(-1) === 's') {
      newCategory = category.substring(0, category.length - 1);
    }
  }

  return (
    <div className="absolute rounded-md bg-white-bg p-4 flex flex-col">
      <p className="whitespace-nowrap">Add {newCategory}</p>
      {CategoryInput.Goals.map((input) => (
        <FormInput
          key={input.id}
          value={values[input.name]}
          {...input}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
