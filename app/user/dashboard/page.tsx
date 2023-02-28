import GoalsCard from '../goals/GoalsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  return (
    <div className="pl-10 flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      {/* @ts-expect-error */}
      <GoalsCard />
    </div>
  );
}
