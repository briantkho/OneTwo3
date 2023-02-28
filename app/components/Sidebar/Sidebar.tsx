import Link from 'next/link';
import './sidebar.css';

import {
  BsPlus,
  BsPersonCircle,
  BsCheck2,
  BsJournalBookmark,
  BsAward,
  BsGrid1X2,
} from 'react-icons/bs';

import { VscAdd } from 'react-icons/vsc';

const SidebarIcon = ({ icon }: any) => {
  return (
    <div className="text-3xl transition-all ease-in-out hover:opacity-60 dark:text-white-bg">
      {icon}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-bg w-min h-min flex flex-col gap-5 shadow-lg items-center justify-center p-6 rounded-2xl sticky backdrop-blur-lg float-left">
      <div>
        <SidebarIcon icon={<VscAdd />} />
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
  );
};

export default Sidebar;
