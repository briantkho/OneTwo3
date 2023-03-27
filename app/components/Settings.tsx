'use client';

import { TiDelete } from 'react-icons/ti';
import { createClient } from '../utils/supabase-browser';

type SettingsType = {
  category: string;
  data: any;
};
export default function Settings({ category, data }: SettingsType) {
  const categoryString = category.toLowerCase().slice(0, -1);

  const handleDelete = async () => {
    const supabase = createClient();
    await supabase.from(categoryString).delete().eq('id', data.id);
    window.location.reload();
  };

  return (
    <TiDelete
      className="cursor-pointer opacity-60 text-2xl min-w-max"
      onClick={handleDelete}
    />
  );
}
