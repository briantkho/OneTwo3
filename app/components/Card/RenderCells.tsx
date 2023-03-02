'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/app/utils/supabase-browser';
import { Cell } from '../Cell';

type RenderCellType = {
  category: string;
  data: any;
};

export default function RenderCells({ category, data }: RenderCellType) {
  const supabase = createClient();
  const [realtime, setRealtime] = useState(data);

  useEffect(() => {
    const goal = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'goal' },
        (payload) => {
          //   const outData = data;
          //   outData.push(payload.new);

          //   console.log(payload.new);
          setRealtime(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(goal);
    };
  }, []);

  const loopRender = () => {
    for (let data of realtime) {
      return <Cell key={data.id} data={data} />;
    }
  };

  return (
    <div>
      {realtime.length > 0 ? (
        realtime.map((obj: any) => <Cell key={obj.id} data={obj} />)
      ) : (
        <p className="font-thin">No {category} found.</p>
      )}
    </div>
  );
}
