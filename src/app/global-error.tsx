'use client';
import { CompleteErrorView } from '@components/error/CompleteErrorView';
import type { ErrorViewProps } from '@components/error/CompleteErrorView';
import { MotionProvider } from '@components/motion/MotionProvider';
import { APP_CONTENT_LANG } from '@core/config/app';
import { FONT_VARIABLES_CLASS_NAME } from '@core/config/fonts';
import type { FC } from 'react';
import '@styles/main.css';

const GlobalErrorLayout: FC<ErrorViewProps> = ({ error, retry }) => (
  <html className={FONT_VARIABLES_CLASS_NAME} lang={APP_CONTENT_LANG}>
    <head>
      <title>Something Broke</title>
    </head>
    <body className="flex flex-col min-h-svh">
      <MotionProvider>
        <CompleteErrorView error={error} retry={retry} />
      </MotionProvider>
    </body>
  </html>
);

export default GlobalErrorLayout;
