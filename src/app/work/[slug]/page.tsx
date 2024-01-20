import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Work } from '@components/work/work';
import { ShareCard } from '@components/ui/shareCard';
import { WorkSuggestions } from '@components/work/workSuggestions';
import { getAllWorkMetadataForType, getAllWorkSlugs, getWorkBySlug } from '@lib/services/work';
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
  const allWorkForCurrentType = await getAllWorkMetadataForType(work.metadata.type);
  const { author } = getWorkData();

  return (
    <Fragment>
      <Work work={work} author={author} />

      <ShareCard className="page-container mt-[4rem] !max-w-[1024px]" />

      <WorkSuggestions className="!max-w-[1024px] mt-[4rem]" allWork={allWorkForCurrentType} currentSlug={params.slug} />
    </Fragment>
  );
};

export default SingleWorkPage;
