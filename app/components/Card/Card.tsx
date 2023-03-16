import { Cell } from '../Cell';
import './card.css';

import AddButton from './AddButton';

type CardType = {
  category: string;
  data: any;
};

export const Card = ({ category, data }: CardType) => {
  return (
    <div className="card-bg flex flex-col justify-between gap-4 shadow-lg min-w-[45%] w-min backdrop-blur-lg rounded-3xl p-4 h-min -z-10">
      <div className="flex items-center justify-between">
        <p className="text-xl font-thin dark:text-white-bg">{category}</p>
        <AddButton category={category} />
      </div>
      <div className="flex flex-col gap-2 h-full">
        {data.length > 0 ? (
          data.map((obj: any) => <Cell key={obj.id} data={obj} />)
        ) : (
          <p className="font-thin">No {category} found.</p>
        )}
      </div>
    </div>
  );
};
