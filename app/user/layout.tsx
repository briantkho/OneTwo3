import Sidebar from '../components/Sidebar/Sidebar';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-10">
      <Sidebar />
      {children}
    </section>
  );
}
