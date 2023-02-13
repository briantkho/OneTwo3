'use client';

import { useState } from 'react';
import { FormInput } from '../components/FormInput';
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
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
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
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              {...input}
              onChange={onChange}
            />
          ))}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
