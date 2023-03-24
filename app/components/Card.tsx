'use client';

import { Cell } from './Cell';

import ToggleModal from '@/app/user/dashboard/ToggleComponent';
import { HeaderTypes } from '../utils/CategoryTypes';
import { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase-browser';
import { Loading } from './Loading';

type CardType = {
  category: string;
  filterStatus: number;
  header?: string;
};

const supabase = createClient();

export const Card = ({ category, filterStatus, header }: CardType) => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const categoryString = category.toLowerCase().slice(0, -1);

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.auth.getUser();

      if (header === HeaderTypes.completed) {
        let { data, error, status } = await supabase
          .from(categoryString)
          .select('*')
          .eq('status', filterStatus)
          .eq('user_id', user.user?.id);
        if (error && status !== 406) {
          throw error;
        }

        if (!data) throw error;

        setData(data);
        setLoading(false);
      } else {
        let { data, error, status } = await supabase
          .from(categoryString)
          .select('*')
          .lte('status', filterStatus)
          .eq('user_id', user.user?.id);
        if (error && status !== 406) {
          throw error;
        }

        if (!data) throw error;

        setData(data);
        setLoading(false);
      }
    };

    getData();

    const subscription = supabase
      .channel('data')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: categoryString },
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

  const renderAmount = () => {
    if (data.length > 0) {
      if (header === HeaderTypes.completed) {
        return (
          data
            // @ts-expect-error
            .filter((obj) => obj.status)
            .map((obj: any) => (
              <Cell
                category={category}
                key={obj.id}
                data={obj}
                disabled={true}
              />
            ))
        );
      } else if (header) {
        return data.map((obj: any) => (
          <Cell category={category} key={obj.id} data={obj} />
        ));
      } else if (!header) {
        return data
          .slice(0, 3)
          .map((obj: any) => (
            <Cell category={category} key={obj.id} data={obj} />
          ));
      }
    } else {
      return <p>No {category} Found.</p>;
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="glass-bg flex flex-col justify-between gap-4 w-full rounded-3xl p-4 h-min max-h-min">
        <div className="flex items-center justify-between">
          {header ? (
            <p className="text-xl dark:text-white-bg">{header}</p>
          ) : (
            <p className="text-xl dark:text-white-bg">{category}</p>
          )}
          {header === HeaderTypes.completed ? null : (
            <ToggleModal category={category} />
          )}
        </div>
        <div className="flex flex-col gap-2 h-full">{renderAmount()}</div>
      </div>
    </>
  );
};
