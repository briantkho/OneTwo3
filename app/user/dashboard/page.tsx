'use client';

import { Loading } from '@/app/components/Loading';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SignOut from '../../components/SignOut';
import { createClient } from '../../utils/supabase-browser';

export default function Dashboard() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await supabase.auth.getUser();
    let { data, error, status } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.data.user?.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    setFirstName(data.first_name);

    setLoading(false);
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      {firstName !== '' ? (
        <p>Hello, {firstName}</p>
      ) : (
        <p>
          Welcome, finish setting up your profile{' '}
          <Link href="/user/profile">
            <p className="text-3xl">here</p>
          </Link>
        </p>
      )}
      <div>Home</div>
      <SignOut />
    </div>
  );
}
