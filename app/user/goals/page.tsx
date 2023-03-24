import { HeaderTypes } from '@/app/utils/CategoryTypes';
import GoalsCard from '../dashboard/GoalsCard';
import CompletedGoals from './CompletedGoals';

export default function GoalsPage() {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <p className="header">My Goals</p>
        <div className="flex flex-col gap-7">
          <GoalsCard header={HeaderTypes.todo} />
          <CompletedGoals />
        </div>
      </div>
    </div>
  );
}
