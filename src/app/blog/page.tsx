import React from 'react';
import { Metadata } from 'next';
import { NoPostsAvailable, PostsGrid } from '@components/blog/postsGrid';
import { getAllPostsMetadata } from '@lib/services/blog';
import { str } from '@lib/services/strings';
import { resolveMetadataObject } from '@lib/utils/metadata';
import { RouteDefs } from '@lib/constants/routes';

export const generateMetadata = async (): Promise<Metadata> => {
  const posts = await getAllPostsMetadata();

  return resolveMetadataObject(RouteDefs.blog, {
    title: str('pages.titles.blog'),
    images: posts.map((post) => post.cover)
  });
};

const BlogPage = async () => {
  const posts = await getAllPostsMetadata();

  return (
    <div className="my-[4rem] animate__animated animate__fadeIn">
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
