import Link from 'next/link';

export default async function LandingPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-bold">Say hello to the new you</h1>
      </div>
      <div className="flex flex-col">
        <Link
          href={'/signup'}
          className="outline w-min whitespace-nowrap px-8 py-3 rounded-full"
        >
          Get Started
        </Link>
        <Link href={'/login'}>Login</Link>
      </div>
    </>
  );
}
