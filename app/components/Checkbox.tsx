'use client';

import { createClient } from '../utils/supabase-browser';

export default function Checkbox({ data }: any) {
  const supabase = createClient();

  const handleClick = async () => {
    await supabase.from(data.category).update({ status: 2 }).eq('id', data.id);
  };

  return <input type={'checkbox'} onClick={handleClick} />;
}
