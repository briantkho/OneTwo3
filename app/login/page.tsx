'use client';

import { useState } from 'react';
import { useSupabase } from '../components/supabase-provider';
import { FormInput } from '../components/FormInput';

export default function LoginPage() {
  const { supabase } = useSupabase();

  const [values, setValues] = useState({
    email: '',
    password: '',
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
      name: 'password',
      type: 'password',
      Placeholder: 'Password',
      label: 'Password',
    },
  ] as const;

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg w-1/4 rounded-xl px-12 py-9 bg-white-bg dark:bg-dark-card dark:shadow-none flex flex-col gap-6">
        <h1 className="text-primary-900 dark:text-dark-textHigh font-bold text-3xl flex items-center justify-center">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="w-auto flex flex-col gap-4">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              {...input}
              onChange={onChange}
            />
          ))}
          <button
            className="bg-primary-900 text-white-bg w-full py-2 rounded-lg font-thin"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
