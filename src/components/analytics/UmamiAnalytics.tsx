import { ANALYTICS_UMAMI_SRC, ANALYTICS_UMAMI_WEBSITE_ID } from '@core/config/app';
import Script from 'next/script';
import type { FC } from 'react';

export const UmamiAnalytics: FC = () => {
  if (ANALYTICS_UMAMI_SRC === undefined || ANALYTICS_UMAMI_SRC === '' || ANALYTICS_UMAMI_WEBSITE_ID === undefined || ANALYTICS_UMAMI_WEBSITE_ID === '') {
    return null;
  }

  return (
    <Script
      defer
      data-website-id={ANALYTICS_UMAMI_WEBSITE_ID}
      src={ANALYTICS_UMAMI_SRC}
    />
  );
};
