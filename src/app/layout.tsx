import { APP_CONTENT_LANG } from '@core/config/app';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }: Props) => (
  <html lang={APP_CONTENT_LANG}>
    <body>
      <main>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
