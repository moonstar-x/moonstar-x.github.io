import { BASE_URL } from '@core/config/app';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getAllWorkSlugs } from '@core/services/data/work';
import type { MetadataRoute } from 'next';

type SingleSitemap = MetadataRoute.Sitemap[number];

const now = new Date();

const makeSitemap = (path: string, priority?: number, changeFrequency?: SingleSitemap['changeFrequency']): SingleSitemap => ({
  url: `${BASE_URL}${path}`,
  lastModified: now,
  changeFrequency: changeFrequency ?? 'weekly',
  priority: priority ?? 1
});

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const workSlugs = await getAllWorkSlugs();
  const workSitemap: SingleSitemap[] = workSlugs.map((slug) => makeSitemap(DynamicRouteDefs.workBySlug(slug), 0.5));

  return [
    makeSitemap(RouteDefs.home),
    makeSitemap(RouteDefs.contact, 0.8, 'yearly'),
    makeSitemap(RouteDefs.work, 0.7),
    ...workSitemap
  ];
};

export default sitemap;
