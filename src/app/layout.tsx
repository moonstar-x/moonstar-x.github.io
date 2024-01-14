import '@styles/global.css';
import React from 'react';
import { Header } from '@components/ui/header';
import { Footer } from '@components/ui/footer';
import { getOwner, getSocials } from '@lib/services/json';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const socials = getSocials();
  const owner = getOwner();

  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer socials={socials} owner={owner.name} />
      </body>
    </html>
  );
};

export default RootLayout;
