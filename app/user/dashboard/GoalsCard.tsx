import { Card } from '@/app/components/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';

type GoalsCardType = {
  header?: string;
};

export default function GoalsCard({ header }: GoalsCardType) {
  return (
    <div className="col-span-2">
      <Card category={CategoryTypes.goals} header={header} filterStatus={1} />
    </div>
  );
}
