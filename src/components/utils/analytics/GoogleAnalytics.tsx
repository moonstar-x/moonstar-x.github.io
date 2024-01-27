import React, { Fragment } from 'react';
import { ANALYTICS_GOOGLE_TAG } from '@lib/config';
import Script from 'next/script';

const createTagUrl = (tag: string): string => {
  return `https://www.googletagmanager.com/gtag/js?id=${tag}`;
};

export const GoogleAnalytics = () => {
  if (!ANALYTICS_GOOGLE_TAG) {
    return null;
  }

  return (
    <Fragment>
      <Script
        src={createTagUrl(ANALYTICS_GOOGLE_TAG)}
        async
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
