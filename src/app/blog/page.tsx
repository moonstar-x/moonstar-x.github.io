import React from 'react';
import { Metadata } from 'next';
import { str } from '@lib/services/strings';
import { getSettings } from '@lib/services/data';
import { getAllPostsMetadata } from '@lib/services/blog';
import { PostsGrid } from '@components/blog/postsGrid';

// TODO: Implement metadata generation.
export const generateMetadata = (): Metadata => {
  const { page } = getSettings();

  return {
    title: `${str('pages.titles.blog')} - ${page.baseTitle}`
  };
};
const BlogPage = async () => {
  const posts = await getAllPostsMetadata();

  return (
    <PostsGrid posts={posts} />
  );
};

export default BlogPage;
