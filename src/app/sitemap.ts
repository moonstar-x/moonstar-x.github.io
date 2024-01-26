import { MetadataRoute } from 'next';
import { BASE_URL } from '@lib/config';
import { RouteDefs } from '@lib/constants/routes';
import { getAllWorkSlugs } from '@lib/services/work';
import { getAllPostSlugs } from '@lib/services/blog';

type SingleSitemap = MetadataRoute.Sitemap[number];

const now = new Date();

const makeSitemap = (path: string, priority?: number, changeFrequency?: SingleSitemap['changeFrequency']): SingleSitemap => {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: changeFrequency ?? 'weekly',
    priority: priority ?? 1
  };
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const workSlugs = await getAllWorkSlugs();
  const postsSlugs = await getAllPostSlugs();

  const workSitemap: SingleSitemap[] = workSlugs.map((slug) => makeSitemap(RouteDefs.workBySlug(slug), 0.5));
  const postsSitemap: SingleSitemap[] = postsSlugs.map((slug) => makeSitemap(RouteDefs.postBySlug(slug), 0.5));

  return [
    makeSitemap(RouteDefs.home),
    makeSitemap(RouteDefs.about, 0.8, 'yearly'),
    makeSitemap(RouteDefs.work, 0.7),
    ...workSitemap,
    makeSitemap(RouteDefs.blog, 0.7),
    ...postsSitemap
  ];
};

export default sitemap;
