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
    frequencyPerWeek: '',
    startDate: '',
    endDate: '',
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();

    await supabase.from('habit').insert([
      {
        user_id: user.user?.id,
        title: values.title,
        description: values.description,
        frequency_per_week: values.frequencyPerWeek,
        start_date: values.startDate,
        end_date: values.endDate,
      },
    ]);
  };

  const data = {
    stateValues: values,
    changeEvent: onChange,
    inputs: CategoryInput.habits,
    submit: handleSubmit,
  };

  return <Modal category={CategoryTypes.habits} data={data} />;
}
