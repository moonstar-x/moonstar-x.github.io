import React from 'react';
import Script from 'next/script';
import { ANALYTICS_UMAMI_SRC, ANALYTICS_UMAMI_WEBSITE_ID } from '@lib/config';

export const UmamiAnalytics = () => {
  if (!ANALYTICS_UMAMI_SRC || !ANALYTICS_UMAMI_WEBSITE_ID) {
    return null;
  }

  return (
    <Script
      src={ANALYTICS_UMAMI_SRC}
      data-website-id={ANALYTICS_UMAMI_WEBSITE_ID}
      defer
    />
  );
};
