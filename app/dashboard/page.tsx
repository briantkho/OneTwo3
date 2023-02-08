import { useSupabase } from '../components/supabase-provider';
import { middleware } from '../../middleware';
import SignOut from '../components/SignOut';
import { createClient } from '../utils/supabase-server';

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <p>Dashboard</p>
      <p>{user?.email}</p>
      <SignOut />
    </div>
  );
}
