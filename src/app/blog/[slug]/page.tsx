import React from 'react';

interface Params {
  slug: string
}

export const generateStaticParams = (): Params[] => {
  return [{ slug: 'hello' }];
};

interface Props {
  params: Params
}

const BlogPostPage: React.FC<Props> = ({ params }) => {
  return (
    <div>
      BLOG POST
      {params.slug}
    </div>
  );
};

export default BlogPostPage;
