'use client';

import { Card } from '@/app/components/Card';
import { Loading } from '@/app/components/Loading';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-browser';
import { useEffect, useState } from 'react';

const supabase = createClient();

export default function CompletedGoals() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.auth.getUser();

      let { data, error, status } = await supabase
        .from('goal')
        .select('*')
        .eq('status', 2)
        .eq('user_id', user.user?.id);

      if (error && status !== 406) {
        throw error;
      }

      if (!data) throw error;

      setData(data);
      setLoading(false);
    };

    getData();

    // const subscription = supabase
    //   .channel('data')
    //   .on(
    //     'postgres_changes',
    //     { event: '*', schema: 'public', table: 'goal', filter: 'status=eq.2' },
    //     (payload) => {
    //       setData((prevItems: any) => [...prevItems]);
    //     }
    //   )
    //   .subscribe();

    // return () => {
    //   subscription.unsubscribe();
    // };
  }, []);

  return (
    <div>
      {loading ? <Loading /> : null}
      <Card
        category={CategoryTypes.goals}
        header={HeaderTypes.completed}
        data={data}
      />
    </div>
  );
}
