import React from 'react';
import { Metadata } from 'next';
import { getAllWorkSlugs, getWorkBySlug } from '@lib/services/work';
import { getSettings } from '@lib/services/data';

interface Params {
  slug: string
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllWorkSlugs();

  return slugs.map((slug) => {
    return { slug };
  });
};

interface GenerateMetadataParameters {
  params: Params
}

// TODO: Implement metadata generation.
export const generateMetadata = async ({ params }: GenerateMetadataParameters): Promise<Metadata> => {
  const { metadata } = await getWorkBySlug(params.slug);
  const { page } = getSettings();

  return {
    title: `${metadata.name} - ${page.baseTitle}`
  };
};

interface Props {
  params: Params
}

// TODO: Implement this page.
const SingleWorkPage: React.FC<Props> = async ({ params }) => {
  const { metadata, markdown } = await getWorkBySlug(params.slug);

  return (
    <div>
      PROJECT

      <pre>
        {JSON.stringify(metadata, null, 2)}
      </pre>

      <pre>
        {markdown}
      </pre>
    </div>
  );
};

export default SingleWorkPage;
