'use client';

import { Card } from '@/app/components/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-browser';
import { useEffect, useState } from 'react';

const supabase = createClient();

export default function HabitsCard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.auth.getUser();

      let { data, error, status } = await supabase
        .from('habit')
        .select('*')
        .lte('status', 1)
        .eq('user_id', user.user?.id);

      if (error && status !== 406) {
        throw error;
      }

      if (!data) throw error;

      setData(data);
    };

    getData();

    const subscription = supabase
      .channel('data')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'habit' },
        (payload) => {
          switch (payload.eventType) {
            case 'INSERT':
              setData((prevItems: any) => [...prevItems, payload.new]);
              break;
            case 'UPDATE':
              setData((prevItems: any) =>
                prevItems.map((item: any) =>
                  item.id === payload.new.id ? payload.new : item
                )
              );
              break;
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <Card category={CategoryTypes.habits} data={data} />;
}
