import { Cell } from '../Cell';
import './card.css';

type CardType = {
  category: string;
  data: any;
};

export const Card = ({ category, data }: CardType) => {
  return (
    <div className="card-bg flex flex-col justify-center gap-4 shadow-lg min-w-[33%] w-min backdrop-blur-lg rounded-3xl p-4">
      <p className="text-xl font-thin dark:text-white-bg">{category}</p>
      <div className="flex flex-col gap-2">
        {data.map((obj: any) => (
          <Cell key={obj.id} data={obj} />
        ))}
      </div>
    </div>
  );
};
