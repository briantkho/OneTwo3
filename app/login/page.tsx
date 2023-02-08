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
    <div>
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              {...input}
              onChange={onChange}
            />
          ))}
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
