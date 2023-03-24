import TasksCard from '@/app/components/Tasks/TasksCard';
import GoalsCard from './GoalsCard';
import HabitsCard from './HabitsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="grid grid-cols-2 gap-7">
        <GoalsCard />
        <TasksCard />
        <HabitsCard />
      </div>
    </div>
  );
}
