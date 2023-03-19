import { useModalStore } from '@/app/utils/stateManager';
import GoalsCard from '../goals/GoalsCard';
import GoalsModal from '../goals/GoalsModal';
import HabitsCard from '../habits/HabitsCard';
import GetUser from './GetUser';
import ToggleComponent from './ToggleComponent';

export default function DashboardPage() {
  const modalState = useModalStore.getState().modalState;

  console.log(modalState);
  // !!! Modal does not update the state real time, but toggle modal changes correctly
  // getModalState

  // console.log(getModalState);

  return (
    <div className="flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="flex flex-wrap gap-7">
        <ToggleComponent />
        {/* {modalState() ? <GoalsModal /> : null} */}
        <GoalsCard />
        <HabitsCard />
      </div>
    </div>
  );
}
