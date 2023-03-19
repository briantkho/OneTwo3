import ModalSelector from '@/app/utils/ModalSelector';
import GoalsCard from '../goals/GoalsCard';
import HabitsCard from '../habits/HabitsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="flex">
        <ModalSelector />
        <GoalsCard />
        <HabitsCard />
      </div>
    </div>
  );
}
