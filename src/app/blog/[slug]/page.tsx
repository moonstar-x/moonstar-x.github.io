import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Post } from '@components/blog/post';
import { ShareCard } from '@components/ui/shareCard';
import { getAllPostSlugs, getPostBySlug } from '@lib/services/blog';
import { getSettings, getBlogData } from '@lib/services/data';

interface Params {
  slug: string
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => {
    return { slug };
  });
};

interface GenerateMetadataParameters {
  params: Params
}

// TODO: Implement metadata generation.
export const generateMetadata = async ({ params }: GenerateMetadataParameters): Promise<Metadata> => {
  const { metadata } = await getPostBySlug(params.slug);
  const { page } = getSettings();

  return {
    title: `${metadata.title} - ${page.baseTitle}`
  };
};

interface Props {
  params: Params
}

const BlogPostPage: React.FC<Props> = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  const { author } = getBlogData();

  return (
    <Fragment>
      <Post post={post} author={author} />

      <ShareCard className="page-container my-[4rem] !max-w-[1024px]" />
    </Fragment>
  );
};

export default BlogPostPage;
