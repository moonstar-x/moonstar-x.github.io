import '@styles/global.css';
import React from 'react';
import { Header } from '@components/ui/header';
import { Footer } from '@components/ui/footer';

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
