import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-10 min-h-screen">
      <Sidebar />
      {children}
    </section>
  );
}
