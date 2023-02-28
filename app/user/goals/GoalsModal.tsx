'use client';

import Modal from '@/app/components/Modal/Modal';
import { CategoryInput } from '@/app/utils/CategoryInputs';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useState } from 'react';
import { useSupabase } from '@/app/components/supabase-provider';

export default function GoalsModal() {
  const { supabase } = useSupabase();
  const [values, setValues] = useState({
    title: '',
    description: '',
    targetDate: '',
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();

    await supabase.from('goal').insert([
      {
        user_id: user.user?.id,
        title: values.title,
        description: values.description,
        target_date: values.targetDate,
      },
    ]);
  };

  const data = {
    stateValues: values,
    changeEvent: onChange,
    inputs: CategoryInput.goals,
    submit: handleSubmit,
  };

  return (
    <div>
      <Modal category={CategoryTypes.goals} data={data} />
    </div>
  );
}
