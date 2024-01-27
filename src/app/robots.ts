import { MetadataRoute } from 'next';
import { BASE_URL } from '@lib/config';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/img/', '/assets/']
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  };
};

export default robots;
