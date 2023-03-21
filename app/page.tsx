import Link from 'next/link';

export default async function LandingPage() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="header">Make yourself unrecognizable</h1>
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href={'/signup'} className="gradient-btn">
            Get Started
          </Link>
          <Link href={'/login'}>Login</Link>
        </div>
      </section>
    </>
  );
}
