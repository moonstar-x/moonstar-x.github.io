import React from 'react';
import clsx from 'clsx';
import sampleSize from 'lodash.samplesize';
import { PostsGrid } from '@components/blog/postsGrid';
import { str } from '@lib/services/strings';
import { BlogPost } from '@lib/services/blog';

export interface Props {
  allPosts: BlogPost['metadata'][]
  currentSlug: string
  count?: number
  className?: string
}

export const PostSuggestions: React.FC<Props> = ({
  allPosts,
  currentSlug,
  count = 3,
  className
}) => {
  const randomPostsForGrid = sampleSize(
    allPosts.filter((post) => post.slug !== currentSlug),
    count
  );

  if (randomPostsForGrid.length < 1) {
    return null;
  }

  return (
    <div className={clsx('page-container', className)}>
      <h4 className="mb-[20px]">
        {str('blog.more_like_this.title')}
      </h4>

      <PostsGrid posts={randomPostsForGrid} withFeatured={false} />
    </div>
  );
};
