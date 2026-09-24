import { Breadcrumb } from '@components/ui/Breadcrumb';
import type { BreadcrumbItem } from '@components/ui/Breadcrumb';
import { WorkArticleFacts } from '@components/work/WorkArticleFacts';
import { WorkArticleHero } from '@components/work/WorkArticleHero';
import { WorkFooter } from '@components/work/WorkFooter';
import { RouteDefs } from '@core/routes/routes';
import { getConfig } from '@core/services/data/config';
import { getAllWorkSlugs, getWorkBySlug } from '@core/services/data/work';
import { capitalize } from '@core/utils/string';
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
        <pre>
          {JSON.stringify(article, null, 2)}
        </pre>
      </main>
      <WorkFooter links={config.profile.socials} />
    </Fragment>
  );
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
};

export default WorkArticleBySlugPage;
