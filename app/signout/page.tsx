'use client';

import { useSupabase } from '../components/supabase-provider';

export default function SignOut() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}
