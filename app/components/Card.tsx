import { Cell } from './Cell';

import ToggleComponent from '@/app/user/dashboard/ToggleComponent';

type CardType = {
  category: string;
  data: any;
};

export const Card = ({ category, data }: CardType) => {
  return (
    <div className="glass-bg flex flex-col justify-between gap-4 min-w-[45%] w-min rounded-3xl p-4 h-min">
      <div className="flex items-center justify-between">
        <p className="text-xl dark:text-white-bg">{category}</p>
        <ToggleComponent category={category} />
      </div>
      <div className="flex flex-col gap-2 h-full">
        {data.length > 0 ? (
          data.map((obj: any) => <Cell key={obj.id} data={obj} />)
        ) : (
          <p>No {category} found.</p>
        )}
      </div>
    </div>
  );
};
