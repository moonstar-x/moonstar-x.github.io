import { BASE_URL } from '@core/config/app';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getAllWorkMetadata } from '@core/services/data/work';
import type { MetadataRoute } from 'next';

type SingleSitemap = MetadataRoute.Sitemap[number];

const withTrailingSlash = (path: string): string => path.endsWith('/') ? path : `${path}/`;

const makeSitemap = (path: string, lastModified?: Date, priority?: number, changeFrequency?: SingleSitemap['changeFrequency']): SingleSitemap => ({
  url: `${BASE_URL}${withTrailingSlash(path)}`,
  ...lastModified && { lastModified },
  changeFrequency: changeFrequency ?? 'weekly',
  priority: priority ?? 1
});

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const work = await getAllWorkMetadata({ sort: 'date' });
  const latestWorkDate = work[0]?.date;
  const workSitemap: SingleSitemap[] = work.map(({ slug, date }) => makeSitemap(DynamicRouteDefs.workBySlug(slug), date, 0.5));

  return [
    makeSitemap(RouteDefs.home, latestWorkDate),
    makeSitemap(RouteDefs.contact, undefined, 0.8, 'yearly'),
    makeSitemap(RouteDefs.work, latestWorkDate, 0.7),
    ...workSitemap
  ];
};

export const dynamic = 'force-static';

export default sitemap;
