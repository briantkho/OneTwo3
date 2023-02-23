import SignOut from '@/app/components/SignOut';
import GoalsCard from '../goals/GoalsCard';
import GetUser from './GetUser';

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* @ts-expect-error */}
      <GetUser />
      {/* @ts-expect-error */}
      <GoalsCard />
      <SignOut />
    </div>
  );
}
