import { dayCountdown } from '../utils/dayCountdown';
import Checkbox from './Checkbox';
import Tag from './Tag';
import Settings from './Settings';
import { CategoryTypes } from '../utils/CategoryTypes';

type CellType = {
  category: string;
  disabled?: boolean;
  data: any;
};

export const Cell = ({ category, disabled = false, data }: CellType) => {
  return (
    <div className="bg-white-cell rounded-xl h-min p-2 flex flex-col gap-2 justify-center">
      <div className="flex h-full justify-between items-center">
        <div className="flex flex-col">
          <p className="text-lg">{data.title}</p>
          {data.description ? (
            <p className="text-sm">{data.description}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-1">
          {disabled ? null : <Checkbox data={data} />}
          <Settings category={category} data={data} />
        </div>
      </div>
      <div className="flex gap-2">
        <Tag category="status" data={data.status} />
        {data.end_date && data.status != 2 ? (
          <Tag category="timeRemaining" data={dayCountdown(data.end_date)} />
        ) : null}
        {data.frequency_per_week ? (
          <Tag category="frequency" data={data.frequency_per_week} />
        ) : null}
      </div>
    </div>
  );
};
