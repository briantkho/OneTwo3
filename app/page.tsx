import Link from 'next/link';
import Navbar from './components/Navbar';

export default async function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center gap-10 landing-height">
        <h1 className="header w-min text-center landing-title">
          Make Yourself Unrecognizable
        </h1>
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href={'/signup'} className="gradient-btn landing-btn">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
