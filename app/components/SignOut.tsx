'use client';

import { useSupabase } from './supabase-provider';

export default function SignOut() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return <div onClick={handleSignOut}>Sign Out</div>;
}
