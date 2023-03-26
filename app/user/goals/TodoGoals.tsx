import { Card } from '@/app/components/Card';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';

export default function CompletedGoals() {
  return (
    <Card
      category={CategoryTypes.goals}
      header={HeaderTypes.todo}
      filterStatus={0}
    />
  );
}
