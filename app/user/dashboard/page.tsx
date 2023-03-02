import GoalsCard from '../goals/GoalsCard';
import HabitsCard from '../habits/HabitsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  return (
    <div className="pl-10 flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="flex flex-wrap gap-7">
        {/* @ts-expect-error */}
        <GoalsCard />
        {/* @ts-expect-error */}
        <HabitsCard />
      </div>
    </div>
  );
}
