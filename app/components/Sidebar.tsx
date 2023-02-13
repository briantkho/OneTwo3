import React from 'react';
import Link from 'next/link';

import {
  BsPlus,
  BsPersonCircle,
  BsCheck2,
  BsJournalBookmark,
  BsAward,
  BsGrid1X2,
} from 'react-icons/bs';

const SidebarIcon = ({ icon }: any) => {
  return (
    <div
      className="cursor-pointer text-4xl w-14 h-14 flex justify-center items-center 
      dark:text-dark-textHigh text-primary-900 hover:bg-[#d1d5db] dark:hover:bg-dark-text dark:hover:text-dark-bg 
        rounded-2xl transition-all duration-200 ease-linear"
    >
      {icon}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="shadow-lg w-min h-min p-5 bg-white-bg rounded-xl top-5 left-5 dark:bg-dark-card dark:shadow-none float-left">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div
          className="text-4xl cursor-pointer text-primary-900 dark:text-dark-textHigh w-11 h-11
          rounded-lg border-2 border-solid border-primary-900 dark:border-dark-text flex items-center justify-center
          hover:bg-primary-900 hover:text-primary-100 dark:hover:bg-dark-text 
          dark:hover:text-dark-bg transition-all duration-200 ease-linear"
        >
          <BsPlus />
        </div>
        <Link href="/user/dashboard">
          <SidebarIcon icon={<BsGrid1X2 />} />
        </Link>
        <Link href="/user/goals">
          <SidebarIcon icon={<BsAward />} />
        </Link>
        <Link href="/user/journals">
          <SidebarIcon icon={<BsJournalBookmark />} />
        </Link>
        <Link href="/user/habits">
          <SidebarIcon icon={<BsCheck2 />} />
        </Link>
        <Link href="/user/profile">
          <SidebarIcon icon={<BsPersonCircle />} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
