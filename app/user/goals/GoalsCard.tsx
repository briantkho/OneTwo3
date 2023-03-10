'use client';

import { Card } from '@/app/components/Card/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { switchCases } from '@/app/utils/subscription';
import { createClient } from '@/app/utils/supabase-browser';
import { useEffect, useState } from 'react';

const supabase = createClient();

export default function GoalsCard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.auth.getUser();

      let { data, error, status } = await supabase
        .from('goal')
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
        { event: '*', schema: 'public', table: 'goal' },
        (payload) => {
          switch (payload.eventType) {
            case 'INSERT':
              setData((prevItems: any) => [...prevItems, payload.new]);
              break;
            case 'DELETE':
              setData((prevItems: any) =>
                prevItems.filter((item: any) => item.id !== payload.old.id)
              );
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

  return <Card category={CategoryTypes.goals} data={data} />;
}
