import React from 'react';
import { Metadata } from 'next';
import { NoPostsAvailable, PostsGrid } from '@components/blog/postsGrid';
import { getSettings } from '@lib/services/data';
import { getAllPostsMetadata } from '@lib/services/blog';
import { str } from '@lib/services/strings';

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
    <div className="my-[4rem]">
      {
        posts.length < 1 ? (
          <NoPostsAvailable />
        ) : (
          <PostsGrid posts={posts} withFeatured />
        )
      }
    </div>
  );
};

export default BlogPage;
