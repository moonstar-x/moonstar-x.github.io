import React from 'react';
import { getAllWorkSlugs, getWorkBySlug } from '@lib/services/work';

interface Params {
  slug: string
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllWorkSlugs();

  return slugs.map((slug) => {
    return { slug };
  });
};

interface Props {
  params: Params
}

const SingleWorkPage: React.FC<Props> = async ({ params }) => {
  const { metadata, content } = await getWorkBySlug(params.slug);

  return (
    <div>
      PROJECT

      <pre>
        {JSON.stringify(metadata, null, 2)}
      </pre>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default SingleWorkPage;