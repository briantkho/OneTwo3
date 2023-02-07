import { useSupabase } from '../components/supabase-provider';
import { createClient } from '../utils/supabase-server';

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <p>{user?.email}</p>
    </div>
  );
}
