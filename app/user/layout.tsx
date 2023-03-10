import Sidebar from '../components/Sidebar/Sidebar';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
