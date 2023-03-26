import { Card } from '@/app/components/Card';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';

export default function GoalsPage() {
  return (
    <div className="flex flex-col gap-10">
      <p className="header">My Goals</p>
      <div className="flex flex-col gap-7">
        <Card
          category={CategoryTypes.goals}
          header={HeaderTypes.todo}
          filterStatus={0}
        />
        <Card
          category={CategoryTypes.goals}
          header={HeaderTypes.completed}
          filterStatus={2}
        />
      </div>
    </div>
  );
}
