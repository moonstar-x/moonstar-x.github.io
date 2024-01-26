import React, { Fragment } from 'react';
import { Metadata } from 'next';
import { Post } from '@components/blog/post';
import { PostSuggestions } from '@components/blog/postSuggestions';
import { ShareCard } from '@components/ui/shareCard';
import { getAllPostSlugs, getAllPostsMetadata, getPostBySlug } from '@lib/services/blog';
import { getBlogData } from '@lib/services/data';
import { resolveMetadataObject } from '@lib/utils/metadata';

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

export const generateMetadata = async ({ params }: GenerateMetadataParameters): Promise<Metadata> => {
  const { metadata } = await getPostBySlug(params.slug);

  return resolveMetadataObject({
    title: metadata.title,
    description: metadata.description,
    images: [metadata.cover],
    type: 'article',
    twitterCard: 'summary_large_image'
  });
};

interface Props {
  params: Params
}

const BlogPostPage: React.FC<Props> = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  const allPosts = await getAllPostsMetadata();
  const { author } = getBlogData();

  return (
    <Fragment>
      <Post className="mt-[4rem]" post={post} author={author} />

      <ShareCard className="page-container my-[2rem] tablet:my-[4rem] !max-w-[1024px]" />

      <PostSuggestions className="!max-w-[1024px] mb-[4rem]" allPosts={allPosts} currentSlug={params.slug} />
    </Fragment>
  );
};

export default BlogPostPage;
