'use client';

import Link from 'next/link';
import Image from 'next/image';
import oneTwo3 from '@/public/oneTwo3.svg';
import {
  BsGithub,
  BsLinkedin,
  BsFileEarmarkPersonFill,
  BsWindowSidebar,
} from 'react-icons/bs';

export default function Footer() {
  return (
    <div
      className="border-solid border-t-[1px] border-black dark:border-white-bg dark:border-opacity-10 border-opacity-20 
    flex items-baseline justify-center h-36"
    >
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <div className="flex gap-3">
          <Image src={oneTwo3} alt="logo" className="h-8 w-min" />
          <p className="text-lg">By Brian Ho</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>About the Creator:</div>
          <Link
            href="https://github.com/briantkho"
            className={'hover:opacity-40 ease-in-out transition-all'}
            target="_blank"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/briantkho"
            className={'hover:opacity-40 ease-in-out transition-all'}
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://terminal.brianho.tech/"
            className={'hover:opacity-40 ease-in-out transition-all'}
            target="_blank"
          >
            <BsWindowSidebar />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1DTRz67E8Yzhk-mwqvskMYUhzy88LkSD8/view"
            className={'hover:opacity-40 ease-in-out transition-all'}
            target="_blank"
          >
            <BsFileEarmarkPersonFill />
          </Link>
        </div>
      </div>
    </div>
  );
}
