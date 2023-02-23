import { Cell } from './Cell';
import './card.css';

type CardType = {
  category: string;
  data: any;
};

export const Card = ({ category, data }: CardType) => {
  return (
    <div className="card-bg">
      <h1 className="text-9xl">{category}</h1>
      {data.map((obj: any) => (
        <Cell key={obj.id} data={obj} />
      ))}
    </div>
  );
};
