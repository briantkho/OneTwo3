'use client';

import { useState } from 'react';
import { useSupabase } from '../components/supabase-provider';
import { FormInput } from '../components/FormInput';
import Navbar from '../components/Navbar';

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
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen landing-height">
        <div className="flex flex-col justify-center items-center glass-bg rounded-3xl gap-5 p-10">
          <div className="header">Log In</div>
          <form
            onSubmit={handleSubmit}
            className="gap-5 flex flex-col items-center"
          >
            <div>
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
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
