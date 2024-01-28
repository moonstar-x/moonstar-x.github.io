/* eslint-disable camelcase */
import { MetadataRoute } from 'next';
import { getSettings } from '@lib/services/data';

const manifest = (): MetadataRoute.Manifest => {
  const { page } = getSettings();

  return {
    name: page.shortTitle,
    short_name: page.shortTitle,
    description: page.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  };
};

export default manifest;
