'use client';

import { useState } from 'react';
import { useSupabase } from '../components/supabase-provider';
import { FormInput } from '../components/FormInput';
import { Loading } from '../components/Loading';

export default function LoginPage() {
  const { supabase } = useSupabase();

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
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

    setLoading(true);
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      <div>Log In</div>
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
  );
}
