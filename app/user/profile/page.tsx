'use client';

import SignOut from '@/app/components/SignOut';
import { useEffect, useState } from 'react';
import { FormInput } from '../../components/FormInput';
import { Loading } from '../../components/Loading';
import { createClient } from '../../utils/supabase-browser';

export default function Profile() {
  type UpdateParams = {
    firstName: String;
    lastName: String;
  };

  const supabase = createClient();

  const [loading, setLoading] = useState(true);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
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
  ] as const;

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const user = await supabase.auth.getUser();

    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name, avatar_url`)
        .eq('id', user.data.user?.id)
        .single();

      if (error && status !== 406) {
        // throw error;
      }

      if (data) {
        setValues({ firstName: data.first_name, lastName: data.last_name });
      }
    } catch (error) {
      // alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
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

      // if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      <p>Your Profile</p>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          value={values[input.name]}
          {...input}
          onChange={onChange}
        />
      ))}
      <button onClick={handleUpdate}>Update</button>
      <SignOut />
    </div>
  );
}
