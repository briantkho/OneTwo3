'use client';

import Link from 'next/link';
import Image from 'next/image';
import oneTwo3 from '@/public/oneTwo3.svg';

export default function Navbar() {
  return (
    <div className="border-solid border-b-[1px] border-black dark:border-white-bg dark:border-opacity-10 border-opacity-20 h-16 items-center flex justify-between mx-20">
      <Link href={'/'} className="flex items-center gap-3">
        <Image src={oneTwo3} alt="logo" className="h-8 w-min" />
        <p className="font-bold text-lg">OneTwo3</p>
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          href={'/login'}
          className="hover:opacity-40 ease-in-out transition-all"
        >
          Log in
        </Link>
        <Link href={'/signup'} className="gradient-btn">
          Sign up
        </Link>
      </div>
    </div>
  );
}
