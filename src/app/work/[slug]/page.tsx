import { WorkFooter } from '@components/work/WorkFooter';
import { getConfig } from '@core/services/data/config';
import { getAllWorkSlugs, getWorkBySlug } from '@core/services/data/work';
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

  return (
    <Fragment>
      <main className="flex-1">
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
