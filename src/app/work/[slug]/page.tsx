import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Work } from '@components/work/work';
import { ShareCard } from '@components/ui/shareCard';
import { WorkSuggestions } from '@components/work/workSuggestions';
import { getAllWorkMetadataForType, getAllWorkSlugs, getWorkBySlug } from '@lib/services/work';
import { getWorkData } from '@lib/services/data';
import { resolveMetadataObject } from '@lib/utils/metadata';
import { RouteDefs } from '@lib/constants/routes';

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

export const generateMetadata = async ({ params }: GenerateMetadataParameters): Promise<Metadata> => {
  const { metadata } = await getWorkBySlug(params.slug);

  return resolveMetadataObject(RouteDefs.workBySlug(params.slug), {
    title: metadata.name,
    description: metadata.description,
    images: [metadata.cover],
    type: 'article',
    twitterCard: 'summary_large_image'
  });
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
      <Work className="mt-[4rem]" work={work} author={author} />

      <ShareCard className="page-container my-[2rem] tablet:my-[4rem] !max-w-[1024px]" />

      <WorkSuggestions className="!max-w-[1024px] mb-[4rem]" allWork={allWorkForCurrentType} currentSlug={params.slug} />
    </Fragment>
  );
};

export default SingleWorkPage;
