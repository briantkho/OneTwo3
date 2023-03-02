import { Card } from '@/app/components/Card/Card';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { createClient } from '@/app/utils/supabase-server';

const getData = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  let { data, error, status } = await supabase
    .from('habit')
    .select('*')
    .eq('user_id', user.user?.id);

  if (error && status !== 406) {
    throw error;
  }

  if (!data) throw error;

  return data;
};

export default async function HabitsCard() {
  const habits = await getData();
  return (
    <>
      <Card category={CategoryTypes.habits} data={habits} />
    </>
  );
}
