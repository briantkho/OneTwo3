import { useModalStore } from '@/app/utils/stateManager';
import GoalsCard from '../goals/GoalsCard';
import GoalsModal from '../goals/GoalsModal';
import HabitsCard from '../habits/HabitsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  const modalState = useModalStore.getState().modalState;

  console.log(modalState);
  return (
    <div className="flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="flex flex-wrap gap-7">
        {/* Modal needs to be on this level */}
        {/* Have + button on cards update the state and use that state here */}
        {modalState ? <GoalsModal /> : null}
        {/* <GoalsModal /> */}
        <GoalsCard />
        <HabitsCard />
      </div>
    </div>
  );
}
