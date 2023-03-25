'use client';

import { createClient } from '@/app/utils/supabase-browser';
import { useState } from 'react';

export default function JournalForm() {
  const supabase = createClient();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();

    const { error } = await supabase.from('journal').insert({
      user_id: user.user?.id,
      title: title,
      description: description,
      date: date,
    });

    if (error) {
      window.alert('Oops, something went wrong!');
    } else {
      window.alert('Journal added!');
      setTitle('');
      setDescription('');
      setDate('');
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <div className="flex justify-between">
          <input
            key={0}
            value={title}
            type={'text'}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add title..."
            className="focus:outline-none border-b-[1px] w-full"
            style={{ background: 'none' }}
          />
          <button className="gradient-btn">Add Journal</button>
        </div>
        <textarea
          key={1}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add your thoughts, ideas, or anything you may want to get off of your chest..."
          className="focus:outline-none border-b-[1px]"
          style={{ background: 'none' }}
          rows={7}
        />
        <input
          key={2}
          type={'date'}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="focus:outline-none border-b-[1px]"
          style={{ background: 'none' }}
        />
      </form>
    </div>
  );
}
