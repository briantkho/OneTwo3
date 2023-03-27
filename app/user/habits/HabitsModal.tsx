'use client';

import Modal from '@/app/components/Modal/Modal';
import { CategoryInput } from '@/app/utils/CategoryInputs';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useState } from 'react';
import { useSupabase } from '@/app/components/supabase-provider';
import { useHabitModalStore } from '@/app/utils/stateManager';

export default function HabitsModal() {
  const toggleModal = useHabitModalStore((state) => state.setModalStateFalse);

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

    const { error } = await supabase.from('habit').insert([
      {
        user_id: user.user?.id,
        title: values.title,
        description: values.description,
        frequency_per_week: values.frequencyPerWeek,
        start_date:
          values.startDate === '' ? new Date().toISOString() : values.startDate,
        end_date: values.endDate === '' ? null : values.endDate,
      },
    ]);

    if (!error) {
      window.location.reload();
    } else {
      window.alert('Oops, something went wrong!');
    }
  };

  const data = {
    stateValues: values,
    changeEvent: onChange,
    inputs: CategoryInput.habit,
    submit: handleSubmit,
  };

  return (
    <Modal
      key={CategoryTypes.habits}
      category={CategoryTypes.habits}
      data={data}
    />
  );
}
