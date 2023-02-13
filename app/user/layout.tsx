import Sidebar from '../components/Sidebar';

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
