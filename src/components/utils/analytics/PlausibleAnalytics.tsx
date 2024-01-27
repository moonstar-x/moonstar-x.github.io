import React from 'react';
import Script from 'next/script';
import { ANALYTICS_PLAUSIBLE_SRC, ANALYTICS_PLAUSIBLE_DOMAIN } from '@lib/config';

export const PlausibleAnalytics = () => {
  if (!ANALYTICS_PLAUSIBLE_SRC || !ANALYTICS_PLAUSIBLE_DOMAIN) {
    return null;
  }

  return (
    <Script
      src={ANALYTICS_PLAUSIBLE_SRC}
      data-domain={ANALYTICS_PLAUSIBLE_DOMAIN}
      defer
    />
  );
};
