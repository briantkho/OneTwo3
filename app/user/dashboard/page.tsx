import TasksCard from '@/app/components/Tasks/TasksCard';
import ModalSelector from '@/app/utils/ModalSelector';
import GoalsCard from '../goals/GoalsCard';
import HabitsCard from '../habits/HabitsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  // !!! Make a completed section

  return (
    <>
      <ModalSelector />
      <div className="flex flex-col gap-10">
        {/* @ts-expect-error */}
        <GetUser />
        <div className="grid grid-cols-2 gap-7">
          <GoalsCard key={'goals'} />
          <TasksCard key={'tasks'} />
          <HabitsCard key={'habits'} />
        </div>
      </div>
    </>
  );
}
