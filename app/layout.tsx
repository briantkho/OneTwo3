import 'server-only';
import './globals.css';

import SupabaseListener from './components/supabase-listener';
import SupabaseProvider from './components/supabase-provider';
import { createClient } from './utils/supabase-server';
import Background from './components/Background/Background';
import Footer from './components/Footer';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className="dark:bg-black dark:text-white-bg dark:border-white-bg dark:outline-white-bg font-thin">
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
          <Footer />
          <Background />
        </SupabaseProvider>
      </body>
    </html>
  );
}
