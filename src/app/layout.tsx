import { UmamiAnalytics } from '@components/analytics/UmamiAnalytics';
import { MotionProvider } from '@components/motion/MotionProvider';
import { SocialsProvider } from '@components/providers/SocialsProvider';
import { Navbar } from '@components/ui/Navbar';
import { ScrollToTopButton } from '@components/ui/ScrollToTopButton';
import { APP_CONTENT_LANG } from '@core/config/app';
import { FONT_VARIABLES_CLASS_NAME } from '@core/config/fonts';
import { getConfig } from '@core/services/data/config';
import type { FC, ReactNode } from 'react';
import '@styles/main.css';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  const config = await getConfig();

  return (
    <html className={FONT_VARIABLES_CLASS_NAME} lang={APP_CONTENT_LANG}>
      <head>
        <UmamiAnalytics />
      </head>
      <body className="flex flex-col min-h-svh">
        <MotionProvider>
          <SocialsProvider socials={config.profile.socials}>
            <Navbar title={config.profile.alias} />
            {children}
            <ScrollToTopButton />
          </SocialsProvider>
        </MotionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
