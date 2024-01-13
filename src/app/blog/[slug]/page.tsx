import React from 'react';
import { getAllPostSlugs, getPostBySlug } from '@lib/services/blog';

interface Params {
  slug: string
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => {
    return { slug };
  });
};

interface Props {
  params: Params
}

const BlogPostPage: React.FC<Props> = async ({ params }) => {
  const { metadata, content } = await getPostBySlug(params.slug);

  return (
    <div>
      BLOG POST

      <pre>
        {JSON.stringify(metadata, null, 2)}
      </pre>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPostPage;
