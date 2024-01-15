import '@styles/global.css';
import React from 'react';
import { Header } from '@components/ui/header';
import { Footer } from '@components/ui/footer';
import { getOwner, getSocials } from '@lib/services/data';
import { CONTENT_LANG } from '@lib/config';

interface Props {
  children: React.ReactNode
}

// TODO: Add analytics headers here.
const RootLayout: React.FC<Props> = ({ children }) => {
  const socials = getSocials();
  const owner = getOwner();

  return (
    <html lang={CONTENT_LANG}>
      <body>
        <Header brand={owner.name} />

        <main>
          {children}
        </main>

        <Footer socials={socials} owner={owner.name} />
      </body>
    </html>
  );
};

export default RootLayout;
