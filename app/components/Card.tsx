'use client';

import { Cell } from './Cell';

import ToggleModal from '@/app/user/dashboard/ToggleComponent';
import { HeaderTypes } from '../utils/CategoryTypes';

type CardType = {
  category: string;
  header?: string;
  data: any;
};

export const Card = ({ category, header, data }: CardType) => {
  const renderAmount = () => {
    if (data.length > 0) {
      if (header === HeaderTypes.completed) {
        return data.map((obj: any) => (
          <Cell category={category} key={obj.id} data={obj} disabled={true} />
        ));
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
  );
};
