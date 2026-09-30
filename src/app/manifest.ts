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
        src: '/assets/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/assets/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
};

export const dynamic = 'force-static';

export default manifest;
