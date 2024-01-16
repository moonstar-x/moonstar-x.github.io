import React from 'react';
import { Metadata } from 'next';
import { getAllPostSlugs, getPostBySlug } from '@lib/services/blog';
import { getSettings } from '@lib/services/data';

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

// TODO: Implement this page.
const BlogPostPage: React.FC<Props> = async ({ params }) => {
  const { metadata, markdown } = await getPostBySlug(params.slug);

  return (
    <div>
      BLOG POST

      <pre>
        {JSON.stringify(metadata, null, 2)}
      </pre>

      <pre>
        {markdown}
      </pre>
    </div>
  );
};

export default BlogPostPage;
