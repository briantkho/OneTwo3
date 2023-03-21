'use client';

import { createClient } from '../utils/supabase-browser';

export default function Checkbox({ data }: any) {
  const supabase = createClient();

  const handleClick = async (e: any) => {
    if (e.target.checked) {
      await supabase
        .from(data.category)
        .update({ status: 2 })
        .eq('id', data.id);
    } else {
      await supabase
        .from(data.category)
        .update({ status: 0 })
        .eq('id', data.id);
    }
  };

  return <input type={'checkbox'} onClick={handleClick} />;
}
