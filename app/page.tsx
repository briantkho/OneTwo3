import Link from 'next/link';

export default async function LandingPage() {
  return (
    <div>
      <p>Landing Page</p>
      <Link href={'/login'}>Login</Link>
    </div>
  );
}
