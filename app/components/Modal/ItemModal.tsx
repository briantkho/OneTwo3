'use client';

import { dayCountdown } from '@/app/utils/dateHandler';
import { useEditModalStore } from '@/app/utils/stateManager';
import { createClient } from '@/app/utils/supabase-browser';
import { useState } from 'react';
import Tag from '../Tag';

type ItemModalType = {
  data: any;
};

export default function ItemModal({ data }: ItemModalType) {
  const { setModalStateFalse } = useEditModalStore();
  const { title, description, status, start_date, end_date, ...otherData } =
    data;

  const [values, setValues] = useState({
    title: title,
    description: description,
    start_date: start_date,
    end_date: end_date,
    ...otherData,
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const supabase = createClient();

    const { error } = await supabase.from(data.category).upsert({
      ...values,
    });

    if (error) {
      window.alert('Oops, something went wrong!');
    }
  };

  const category =
    data.category.charAt(0).toUpperCase() + data.category.slice(1);

  return (
    <div className="flex w-screen h-screen fixed top-0 left-0 m-auto backdrop-blur-sm z-50 justify-center items-center">
      <div className="bg-white-bg w-11/12 h-5/6 p-11 rounded-xl dark:glass-bg shadow-lg">
        <form
          className="w-full h-full flex flex-col justify-between items-start"
          onSubmit={handleSubmit}
        >
          <section className="w-full h-full overflow-clip flex flex-col gap-5">
            <div>
              <p className="text-3xl font-bold">
                <input
                  type={'text'}
                  name="title"
                  value={values.title}
                  onChange={onChange}
                  className="focus:outline-none"
                  style={{ background: 'none' }}
                />
              </p>
              <p>Category: {category}</p>
              {data.start_date ? (
                <div className="flex gap-3">
                  <p>Start Date: </p>
                  <input
                    name="startDate"
                    type={'date'}
                    value={values.startDate}
                    onChange={onChange}
                    className="focus:outline-none"
                    style={{ background: 'none' }}
                  />
                </div>
              ) : null}
              {data.end_date ? (
                <div className="flex gap-1">
                  <p>Target Date: </p>
                  <input
                    name="end_date"
                    type={'date'}
                    value={values.end_date}
                    onChange={onChange}
                    className="focus:outline-none"
                    style={{ background: 'none' }}
                  />
                </div>
              ) : null}
              <div className="bg-black dark:bg-white-bg w-full h-[1px] opacity-20"></div>
            </div>

            {data.description ? (
              <textarea
                name="description"
                value={values.description}
                onChange={onChange}
                className="w-full focus:outline-none resize-none h-full"
                style={{ background: 'none' }}
              />
            ) : null}
          </section>
          <section className="flex justify-between w-full h-min items-center">
            <div className="flex gap-3">
              <Tag category="status" data={data.status} />
              {data.end_date && data.status != 2 ? (
                <Tag
                  category="timeRemaining"
                  data={dayCountdown(data.end_date)}
                />
              ) : null}
              {data.frequency_per_week ? (
                <Tag category="frequency" data={data.frequency_per_week} />
              ) : null}
              {data.priority ? (
                <Tag category="priority" data={data.priority} />
              ) : null}
            </div>
            {data.status === 2 ? null : (
              <button className="gradient-btn">Update {category}</button>
            )}
          </section>
        </form>
      </div>
      <div
        className="bg-black w-screen h-screen absolute -z-10 dark:opacity-95 opacity-25"
        onClick={setModalStateFalse}
      ></div>
    </div>
  );
}
