import React from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getSettings } from '@lib/services/data';
import { getAllPostsMetadata } from '@lib/services/blog';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.blog')} - ${page.baseTitle}`
  };
};

// TODO: Implement this page.
const BlogPage = async () => {
  const posts = await getAllPostsMetadata();

  return (
    <div>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
};

export default BlogPage;
