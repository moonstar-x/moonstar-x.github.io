import React from 'react';
import clsx from 'clsx';
import { PostCard } from '@components/blog/postCard';
import { NoPostsAvailable } from './NoPostsAvailable';
import { BlogPost } from '@lib/services/blog';


export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  posts: BlogPost['metadata'][]
}

export const PostsGrid: React.FC<Props> = ({ posts, className, ...props }) => {
  if (!posts.length) {
    return (
      <NoPostsAvailable className={className} {...props} />
    );
  }

  const [firstPost, ...restOfPosts] = posts;

  return (
    <section className={clsx('page-container', className)} {...props}>
      <PostCard post={firstPost} featured />

      {
        restOfPosts.length > 1 && (
          <div className="mt-[40px] tablet:mt-[80px] grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-[40px] gap-y-[40px] tablet.gap-y-[80px]">
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
