'use client';

import { useState } from 'react';
import { FormInput } from '../components/FormInput';
import { useSupabase } from '../components/supabase-provider';

export default function SignUpPage() {
  const { supabase } = useSupabase();

  const [values, setValues] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'text',
      Placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 2,
      name: 'phone',
      type: 'text',
      Placeholder: 'Phone',
      label: 'Phone',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      Placeholder: 'Password',
      label: 'Password',
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      Placeholder: 'Confirm Password',
      label: 'Confirm Password',
    },
  ] as const;

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await supabase.auth.signUp({
      email: values.email,
      phone: values.phone,
      password: values.password,
    });

    console.log('done');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg w-1/4 rounded-xl px-12 py-9 bg-white-bg dark:bg-dark-card dark:shadow-none">
        <h1 className="text-primary-900 dark:text-dark-textHigh font-bold text-header flex items-center justify-center">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="w-auto flex flex-col gap-7">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              {...input}
              onChange={onChange}
            />
          ))}
          <button
            className="bg-primary-900 text-white-bg w-full py-2 rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
