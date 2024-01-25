import React from 'react';
import clsx from 'clsx';
import { PostHead } from './PostHead';
import { PostBody } from './PostBody';
import { AuthorCard } from '@components/ui/authorCard';
import { Divider } from '@components/ui/divider';
import { BlogPost } from '@lib/services/blog';
import { BlogData } from '@lib/services/data';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  post: BlogPost
  author: BlogData['author']
}

export const Post: React.FC<Props> = ({ post, author, className, ...props }) => {
  return (
    <article className={clsx('page-container mx-auto !max-w-[768px]', className)} {...props}>
      <PostHead {...post.metadata} />

      <Divider />

      <PostBody content={post.markdown} />

      <Divider />

      <div>
        <AuthorCard {...author} />
      </div>
    </article>
  );
};
