import Link from 'next/link';
import SignOut from '../components/SignOut';
import { createClient } from '../utils/supabase-server';

export default async function Dashboard() {
  const supabase = createClient();

  let { data, error, status } = await supabase
    .from('profiles')
    .select('*')
    .single();

  if (error && status !== 406) {
    throw error;
  }

  const firstName = data ? data.first_name : '';

  return (
    <div>
      {firstName ? (
        <p>Hello, {firstName}</p>
      ) : (
        <p>
          Welcome, finish setting up your profile{' '}
          <Link href="/profile">
            <p className="text-3xl">here</p>
          </Link>
        </p>
      )}
      <div>Dashboard</div>
      <SignOut />
    </div>
  );
}
