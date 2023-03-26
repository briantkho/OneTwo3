'use client';

import Modal from '@/app/components/Modal/Modal';
import { CategoryInput } from '@/app/utils/CategoryInputs';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useState } from 'react';
import { createClient } from '@/app/utils/supabase-browser';
import { useTaskModalStore } from '@/app/utils/stateManager';

export default function TasksModal() {
  const toggleModal = useTaskModalStore((state) => state.setModalStateFalse);
  const supabase = createClient();
  const [values, setValues] = useState({
    title: '',
    description: '',
    priority: '',
    endDate: '',
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();

    const { error } = await supabase.from('task').insert([
      {
        user_id: user.user?.id,
        title: values.title,
        description: values.description,
        priority: values.priority,
        end_date:
          values.endDate === '' ? new Date().toISOString() : values.endDate,
      },
    ]);

    if (!error) {
      toggleModal();
    } else {
      window.alert('Oops, something went wrong!');
    }
  };

  const data = {
    stateValues: values,
    changeEvent: onChange,
    inputs: CategoryInput.tasks,
    submit: handleSubmit,
  };

  return (
    <Modal
      key={CategoryTypes.tasks}
      category={CategoryTypes.tasks}
      data={data}
    />
  );
}
