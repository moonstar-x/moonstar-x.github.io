import { Navbar } from '@components/ui/Navbar';
import { APP_CONTENT_LANG } from '@core/config/app';
import { getConfig } from '@core/services/data/config';
import { Hanken_Grotesk as HankenGrotesk, League_Spartan as LeagueSpartan } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import '@styles/main.css';

const hankenGrotesk = HankenGrotesk({
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap'
});

const leagueSpartan = LeagueSpartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap'
});

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  const config = await getConfig();

  return (
    <html className={`${hankenGrotesk.variable} ${leagueSpartan.variable}`} lang={APP_CONTENT_LANG}>
      <body className="flex flex-col min-h-svh">
        <Navbar title={config.profile.alias} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
