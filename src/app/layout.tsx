import { Navbar } from '@components/ui/Navbar';
import { APP_CONTENT_LANG } from '@core/config/app';
import { getConfig } from '@core/services/data/config';
import type { FC, ReactNode } from 'react';
import '@styles/main.css';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  const config = await getConfig();

  return (
    <html lang={APP_CONTENT_LANG}>
      <body>
        <Navbar title={config.navbar.title} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
