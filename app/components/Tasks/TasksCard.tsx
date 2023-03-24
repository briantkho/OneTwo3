import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { Card } from '../Card';

export default function TasksCard() {
  return <Card category={CategoryTypes.tasks} filterStatus={1} />;
}
