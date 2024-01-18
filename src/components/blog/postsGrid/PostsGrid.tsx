import React from 'react';
import clsx from 'clsx';
import { PostCard } from '@components/blog/postCard';
import { NoPostsAvailable } from './NoPostsAvailable';
import { BlogPost } from '@lib/services/blog';


export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  posts: BlogPost['metadata'][]
  withFeatured?: boolean
}

export const PostsGrid: React.FC<Props> = ({
  posts,
  withFeatured = true,
  className,
  ...props
}) => {
  if (posts.length < 1) {
    return (
      <NoPostsAvailable className={className} {...props} />
    );
  }

  let firstPost: BlogPost['metadata'] | undefined;
  let restOfPosts: BlogPost['metadata'][] = [];

  if (!withFeatured) {
    restOfPosts = posts;
  } else {
    restOfPosts = [...posts];
    firstPost = restOfPosts.shift();
  }

  return (
    <section className={clsx('page-container', className)} {...props}>
      {
        firstPost && (
          <PostCard className="mb-[40px] tablet:mb-[80px]" post={firstPost} featured />
        )
      }

      {
        restOfPosts.length >= 1 && (
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-[40px] gap-y-[40px] tablet.gap-y-[80px]">
            {
              restOfPosts.map((post, idx) => (
                <PostCard key={idx} post={post} />
              ))
            }
          </div>
        )
      }
    </section>
  );
};
