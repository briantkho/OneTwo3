import { createClient } from '../../utils/supabase-server';

const getData = async () => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  let { data, error, status } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.data.user?.id)
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
};

const getTimeOfDay = () => {
  const currentHour = new Date().getHours();
  console.log(currentHour);

  if (0 <= currentHour && currentHour < 12) {
    return 'morning';
  } else if (12 < currentHour && currentHour < 17) {
    return 'afternoon';
  } else if (17 < currentHour && currentHour < 23) {
    return 'evening';
  }
};

export default async function GetUser() {
  const user = await getData();
  const timeOfDay = getTimeOfDay();

  return (
    <p className="text-6xl font-bold dark:text-white-bg">
      Good {timeOfDay}, {user.first_name}!
    </p>
  );
}
