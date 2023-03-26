'use client';

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { CategoryTypes } from '../utils/CategoryTypes';
import { createClient } from '../utils/supabase-browser';
import SettingsPopup from './SettingsPopup';

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
    <div className="">
      <BsThreeDotsVertical
        className="cursor-pointer opacity-60"
        onClick={handlePopup}
      />
      {popup ? (
        <div className="">
          <SettingsPopup
            handlePopup={handlePopup}
            handleDelete={handleDelete}
          />
        </div>
      ) : null}
    </div>
  );
}
