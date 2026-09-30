import { Markdown } from '@components/markdown/Markdown';
import { JsonLd } from '@components/seo/JsonLd';
import { Breadcrumbs } from '@components/ui/Breadcrumbs';
import type { BreadcrumbItem } from '@components/ui/Breadcrumbs';
import { WorkArticleCover } from '@components/work/WorkArticleCover';
import { WorkArticleFacts } from '@components/work/WorkArticleFacts';
import { WorkArticleHero } from '@components/work/WorkArticleHero';
import { WorkFooter } from '@components/work/WorkFooter';
import { WorkFooterNavigation } from '@components/work/WorkFooterNavigation';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkMetadata, getAllWorkSlugs, getWorkBySlug } from '@core/services/data/work';
import { getWorkTypeLabel } from '@core/services/data/work-type';
import { createBreadcrumbJsonLd, createWorkJsonLd } from '@core/utils/json-ld';
import { createPageMetadata } from '@core/utils/metadata';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import type { FC } from 'react';

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

const WorkArticleBySlugPage: FC<Props> = async ({ params }) => {
  const awaitedParams = await params;
  const config = await getConfig();
  const article = await getWorkBySlug(awaitedParams.slug);
  const allArticles = await getAllWorkMetadata({ sort: 'date' });
  const currentArticleIndex = allArticles.findIndex((a) => a.slug === article.metadata.slug);
  const nextArticle = allArticles[(currentArticleIndex + 1) % allArticles.length];
  const articlePath = DynamicRouteDefs.workBySlug(article.metadata.slug);
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      id: 'work',
      label: 'Work',
      href: RouteDefs.work
    },
    {
      id: article.metadata.type,
      label: getWorkTypeLabel(article.metadata.type),
      href: `${RouteDefs.work}?type=${article.metadata.type}`
    },
    {
      id: article.metadata.slug,
      label: article.metadata.name,
      active: true
    }
  ];

  return (
    <Fragment>
      <main className="flex-1">
        <Breadcrumbs className="page-horizontal-align" items={breadcrumbItems} />
        <WorkArticleCover className="page-horizontal-align" metadata={article.metadata} />
        <WorkArticleHero className="page-horizontal-align" metadata={article.metadata} />
        <WorkArticleFacts className="page-horizontal-align" metadata={article.metadata} />
        <Markdown className="mb-8 page-horizontal-align">
          {article.markdown}
        </Markdown>
      </main>
      <WorkFooterNavigation className="mt-4" nextArticleName={nextArticle?.name} nextArticleSlug={nextArticle?.slug} />
      <WorkFooter links={config.profile.socials} />
      <JsonLd data={createWorkJsonLd(config, article.metadata, articlePath)} />
      <JsonLd data={createBreadcrumbJsonLd(breadcrumbItems.map((item) => ({ label: item.label, path: item.href ?? articlePath })))} />
    </Fragment>
  );
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const awaitedParams = await params;
  const article = await getWorkBySlug(awaitedParams.slug);

  return await createPageMetadata(DynamicRouteDefs.workBySlug(article.metadata.slug), {
    title: article.metadata.name,
    description: article.metadata.description,
    images: [article.metadata.cover],
    twitterCard: 'summary_large_image',
    type: 'article'
  });
};

export default WorkArticleBySlugPage;
