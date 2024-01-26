import React from 'react';
import { Metadata } from 'next';
import { NoPostsAvailable, PostsGrid } from '@components/blog/postsGrid';
import { getAllPostsMetadata } from '@lib/services/blog';
import { str } from '@lib/services/strings';
import { resolveMetadataObject } from '@lib/utils/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const posts = await getAllPostsMetadata();

  return resolveMetadataObject({
    title: str('pages.titles.blog'),
    images: posts.map((post) => post.cover)
  });
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
