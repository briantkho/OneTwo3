import { Card } from '@/app/components/Card/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-server';

const getData = async () => {
  const supabase = createClient();

  let { data, error, status } = await supabase.from('goal').select('*');

  if (error && status !== 406) {
    throw error;
  }

  if (!data) throw error;

  return data;
};

export default async function GoalsCard() {
  let goals = await getData();

  return (
    <>
      <Card category={CategoryTypes.goals} data={goals} />
    </>
  );
}
