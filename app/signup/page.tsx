'use client';

import { useState } from 'react';
import { FormInput } from '../components/FormInput';
import Navbar from '../components/Navbar';
import { useSupabase } from '../components/supabase-provider';

export default function SignUpPage() {
  const { supabase } = useSupabase();

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'text',
      placeholder: 'example@email.com',
      label: 'Email',
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: '******',
      label: 'Password',
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: '******',
      label: 'Confirm Password',
    },
  ] as const;

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (values.password != values.confirmPassword)
      throw new Error('Password does not match');

    await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen landing-height">
        <div className="flex flex-col justify-center items-center glass-bg rounded-3xl gap-5 p-10">
          <div className="header">Sign Up</div>
          <form
            onSubmit={handleSubmit}
            className="gap-5 flex flex-col items-center"
          >
            <div className="flex flex-col gap-2">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  value={values[input.name]}
                  {...input}
                  onChange={onChange}
                />
              ))}
            </div>
            <button className="gradient-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
