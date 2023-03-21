'use client';

import { useSupabase } from './supabase-provider';

export default function SignOut() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <a className="cursor-pointer" onClick={handleSignOut}>
      Sign Out
    </a>
  );
}
