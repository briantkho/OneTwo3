import Sidebar from '../components/Sidebar/Sidebar';
import ModalSelector from '@/app/utils/ModalSelector';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-10 min-h-screen">
      <ModalSelector />
      <Sidebar />
      {children}
    </section>
  );
}
