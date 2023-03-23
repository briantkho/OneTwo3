import Link from 'next/link';
import './sidebar.css';

import {
  BsPersonCircle,
  BsCheck2,
  BsJournalBookmark,
  BsAward,
  BsGrid1X2,
} from 'react-icons/bs';

const SidebarIcon = ({ icon }: any) => {
  return (
    <div className="text-4xl transition-all ease-in-out hover:scale-110">
      {icon}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="glass-bg w-min h-min flex flex-col items-center justify-around gap-6 p-6 rounded-2xl float-left mr-10">
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
