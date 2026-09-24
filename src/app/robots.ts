import { BASE_URL } from '@core/config/app';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    disallow: ['/img/', '/assets/']
  },
  sitemap: `${BASE_URL}/sitemap.xml`
});

export const dynamic = 'force-static';

export default robots;
