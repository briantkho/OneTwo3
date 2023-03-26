'use client';

import { Loading } from '@/app/components/Loading';
import Settings from '@/app/components/Settings';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-browser';
import { useEffect, useState } from 'react';

export default function JournalCard() {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const user = await supabase.auth.getUser();
      const { data, error, status } = await supabase
        .from('journal')
        .select('*')
        .order('date', { ascending: false })
        .eq('user_id', user.data.user?.id);

      if (error) {
        window.alert('Oops, something went wrong!');
      } else if (!error && data) {
        setData(data);
        setLoading(false);
      }
    };

    getData();

    const subscription = supabase
      .channel('data')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'journal' },
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
    <>
      {loading ? <Loading /> : null}
      <div className="grid grid-cols-2 gap-5">
        {Object.keys(data).length > 0 ? (
          data.map((obj: any) => {
            let date = '';
            if (obj.date) {
              date = obj.date.split('T')[0];
            }

            return (
              <>
                <div
                  key={obj.id}
                  className="glass-bg p-5 rounded-lg flex justify-between w-full max-h-[50vh]"
                >
                  <div className="flex flex-col gap-3">
                    <p className="font-bold text-xl">{obj.title}</p>
                    <div className="w-full overflow-y-scroll">
                      <p style={{ overflowWrap: 'normal' }}>
                        {obj.description}
                      </p>
                      <p className="text-xs opacity-50">{date}</p>
                    </div>
                  </div>
                  <Settings category={CategoryTypes.journals} data={obj} />
                </div>
              </>
            );
          })
        ) : (
          <p>No Journals Found.</p>
        )}
      </div>
    </>
  );
}
