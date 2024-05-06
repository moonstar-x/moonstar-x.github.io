import React from 'react';
import { Header } from '@components/ui/header';
import { Footer } from '@components/ui/footer';
import { UmamiAnalytics, GoogleAnalytics } from '@components/utils/analytics';
import { getOwner, getSocials, getSettings } from '@lib/services/data';
import { CONTENT_LANG } from '@lib/config';
import '@styles/global.css';
import 'animate.css/animate.min.css';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const socials = getSocials();
  const owner = getOwner();
  const settings = getSettings();

  return (
    <html lang={CONTENT_LANG}>
      <head>
        <UmamiAnalytics />
        <GoogleAnalytics />
      </head>

      <body>
        <Header brand={settings.brand} socials={socials} owner={owner.name} creationYear={settings.creationYear} />

        <main>
          {children}
        </main>

        <Footer socials={socials} owner={owner.name} creationYear={settings.creationYear} letsConnectText={owner.letsConnect} compact={false} />
      </body>
    </html>
  );
};

export default RootLayout;
