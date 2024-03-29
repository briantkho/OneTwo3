'use client';

import { Cell } from './Cell';

import ToggleModal from '@/app/user/dashboard/ToggleComponent';
import { HeaderTypes } from '../utils/CategoryTypes';
import { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase-browser';
import { Loading } from './Loading';

type CardType = {
  category: string;
  filterStatus?: number;
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

      if (header) {
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
      } else if (!filterStatus) {
        let { data, error, status } = await supabase
          .from(categoryString)
          .select('*')
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
      } else if (header === HeaderTypes.todo) {
        return (
          data
            // @ts-expect-error
            .filter((obj) => obj.status === 0 || obj.status === 1)
            .map((obj: any) => (
              <Cell
                category={category}
                key={obj.id}
                data={obj}
                disabled={false}
              />
            ))
        );
      } else if (!header) {
        const filteredData = data
          // @ts-expect-error
          .filter((obj) => obj.status === 0 || obj.status === 1);

        if (filteredData.length < 1) {
          return <p>All {category} Completed.</p>;
        } else {
          return filteredData
            .slice(0, 3)
            .map((obj: any) => (
              <Cell category={category} key={obj.id} data={obj} />
            ));
        }
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
