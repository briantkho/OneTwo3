import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-dark-bg w-screen h-screen">{children}</body>
    </html>
  );
}
