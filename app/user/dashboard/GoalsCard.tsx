'use client';

import { Card } from '@/app/components/Card';
import { Loading } from '@/app/components/Loading';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-browser';
import { useEffect, useState } from 'react';

const supabase = createClient();

type GoalsCardType = {
  header?: string;
};

export default function GoalsCard({ header }: GoalsCardType) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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
            case 'UPDATE':
              setData((prevItems: any) =>
                prevItems.map((item: any) =>
                  item.id === payload.new.id ? payload.new : item
                )
              );
              break;
            case 'DELETE':
              setData((prevItems: any) =>
                prevItems.filter((item: any) => item.id !== payload.old.id)
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

  return (
    <div className="col-span-2">
      {loading ? <Loading /> : null}
      <Card category={CategoryTypes.goals} header={header} data={data} />
    </div>
  );
}
