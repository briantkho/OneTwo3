'use client';

import SignOut from '@/app/components/SignOut';
import { useEffect, useState } from 'react';
import { FormInput } from '../../components/FormInput';
import { createClient } from '../../utils/supabase-browser';

export default function Profile() {
  type UpdateParams = {
    firstName: String;
    lastName: String;
    email: String | undefined;
  };

  const supabase = createClient();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      label: 'First Name',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      label: 'Last Name',
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
  ] as const;

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const { data: user } = await supabase.auth.getUser();
    console.log(user);

    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name, avatar_url`)
        .eq('id', user.user?.id)
        .single();

      if (error && status !== 406) {
      }

      if (data) {
        setValues({
          firstName: data.first_name,
          lastName: data.last_name,
          email: user ? user.user?.email : '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const user = await supabase.auth.getUser();
    try {
      const updates = {
        id: user.data.user?.id,
        first_name: values.firstName,
        last_name: values.lastName,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col flex-start">
      <p className="text-6xl font-bold">Your Profile</p>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          value={values[input.name]}
          {...input}
          onChange={onChange}
        />
      ))}
      <a className="cursor-pointer" onClick={handleUpdate}>
        Update
      </a>
      <SignOut />
    </div>
  );
}
