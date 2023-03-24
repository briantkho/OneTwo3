import { Card } from '@/app/components/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';

export default function HabitsCard() {
  return <Card category={CategoryTypes.habits} filterStatus={1} />;
}
