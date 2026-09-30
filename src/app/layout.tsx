import { UmamiAnalytics } from '@components/analytics/UmamiAnalytics';
import { MotionProvider } from '@components/motion/MotionProvider';
import { Navbar } from '@components/ui/Navbar';
import { ScrollToTopButton } from '@components/ui/ScrollToTopButton';
import { APP_CONTENT_LANG } from '@core/config/app';
import { getConfig } from '@core/services/data/config';
import { clsx } from 'clsx';
import { Hanken_Grotesk as HankenGrotesk, JetBrains_Mono as JetbrainsMono, League_Spartan as LeagueSpartan } from 'next/font/google';
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

const jetbrainsMono = JetbrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  const config = await getConfig();

  return (
    <html className={clsx(hankenGrotesk.variable, leagueSpartan.variable, jetbrainsMono.variable)} lang={APP_CONTENT_LANG}>
      <head>
        <UmamiAnalytics />
      </head>
      <body className="flex flex-col min-h-svh">
        <MotionProvider>
          <Navbar title={config.profile.alias} />
          {children}
          <ScrollToTopButton />
        </MotionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
