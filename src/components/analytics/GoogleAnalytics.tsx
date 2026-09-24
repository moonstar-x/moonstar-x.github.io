import { ANALYTICS_GOOGLE_TAG } from '@core/config/app';
import Script from 'next/script';
import { Fragment } from 'react';
import type { FC } from 'react';

const createTagUrl = (tag: string): string => `https://www.googletagmanager.com/gtag/js?id=${tag}`;

export const GoogleAnalytics: FC = () => {
  if (ANALYTICS_GOOGLE_TAG === undefined || ANALYTICS_GOOGLE_TAG === '') {
    return null;
  }

  return (
    <Fragment>
      <Script
        async
        src={createTagUrl(ANALYTICS_GOOGLE_TAG)}
      />

      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${ANALYTICS_GOOGLE_TAG}');
        `}
      </Script>
    </Fragment>
  );
};
