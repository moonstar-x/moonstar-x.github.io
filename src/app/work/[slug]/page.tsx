import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Work } from '@components/work/work';
import { ShareCard } from '@components/ui/shareCard';
import { getAllWorkSlugs, getWorkBySlug } from '@lib/services/work';
import { getSettings, getWorkData } from '@lib/services/data';

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

const SingleWorkPage: React.FC<Props> = async ({ params }) => {
  const work = await getWorkBySlug(params.slug);
  const { author } = getWorkData();

  return (
    <Fragment>
      <Work work={work} author={author} />

      <ShareCard className="page-container mt-[4rem] !max-w-[1024px]" />
    </Fragment>
  );
};

export default SingleWorkPage;
