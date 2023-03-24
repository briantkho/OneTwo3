'use client';

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { CategoryTypes } from '../utils/CategoryTypes';
import { createClient } from '../utils/supabase-browser';

type SettingsType = {
  category: string;
  data: any;
};
export default function Settings({ category, data }: SettingsType) {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };
  const categoryString = category.toLowerCase().slice(0, -1);

  const supabase = createClient();

  const handleDelete = async () => {
    await supabase.from(categoryString).delete().eq('id', data.id);
  };

  return (
    <div onClick={handlePopup}>
      <div>
        {popup ? (
          <>
            <div className="absolute bg-white-bg text-black p-2 rounded-sm z-50 flex w-min">
              <div className="flex flex-col items-start w-full">
                <div className="flex justify-between items-center w-full">
                  <button>Edit</button>
                  <GrClose
                    className="text-black cursor-pointer text-xs"
                    onClick={handlePopup}
                  />
                </div>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </>
        ) : null}

        <BsThreeDotsVertical
          className="cursor-pointer opacity-60"
          onClick={handlePopup}
        />
      </div>
    </div>
  );
}
