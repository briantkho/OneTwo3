import { Card } from '@/app/components/Card';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';

export default function HabitsPage() {
  return (
    <div className="flex flex-col gap-10">
      <p className="header">My Habits</p>
      <div className="flex flex-col gap-7">
        <Card
          category={CategoryTypes.habits}
          header={HeaderTypes.todo}
          filterStatus={0}
        />
        <Card
          category={CategoryTypes.habits}
          header={HeaderTypes.completed}
          filterStatus={2}
        />
      </div>
    </div>
  );
}
