/* eslint-disable camelcase */
import { getConfig } from '@core/services/data/config';
import type { MetadataRoute } from 'next';

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const config = await getConfig();

  return {
    name: config.profile.alias,
    short_name: config.profile.alias,
    description: config.profile.shortBio,
    start_url: '/',
    display: 'standalone',
    background_color: '#F2F1EB',
    theme_color: '#6B3BFF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
};

export const dynamic = 'force-static';

export default manifest;
