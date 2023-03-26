import GetUser from './GetUser';
import { Card } from '@/app/components/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* @ts-expect-error */}
      <GetUser />
      <div className="grid grid-cols-2 gap-7">
        <div className="col-span-2">
          <Card category={CategoryTypes.goals} filterStatus={0} />
        </div>
        <Card category={CategoryTypes.tasks} filterStatus={0} />
        <Card category={CategoryTypes.habits} filterStatus={0} />
      </div>
    </div>
  );
}
