import { Markdown } from '@components/markdown/Markdown';
import { Breadcrumb } from '@components/ui/Breadcrumb';
import type { BreadcrumbItem } from '@components/ui/Breadcrumb';
import { WorkArticleFacts } from '@components/work/WorkArticleFacts';
import { WorkArticleHero } from '@components/work/WorkArticleHero';
import { WorkFooter } from '@components/work/WorkFooter';
import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkSlugs, getWorkBySlug } from '@core/services/data/work';
import { createPageMetadata } from '@core/utils/metadata';
import { capitalize } from '@core/utils/string';
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
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      id: 'work',
      label: 'Work',
      href: RouteDefs.work
    },
    {
      id: article.metadata.type,
      label: capitalize(article.metadata.type)
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
        <Breadcrumb items={breadcrumbItems} />
        <WorkArticleHero metadata={article.metadata} />
        <WorkArticleFacts metadata={article.metadata} />
        <Markdown>
          {article.markdown}
        </Markdown>
      </main>
      <WorkFooter links={config.profile.socials} />
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
