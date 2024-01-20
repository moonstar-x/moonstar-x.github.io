import React from 'react';
import { PostHead } from './PostHead';
import { PostBody } from './PostBody';
import { AuthorCard } from './AuthorCard';
import { Divider } from '@components/ui/divider';
import { BlogPost } from '@lib/services/blog';
import { BlogData } from '@lib/services/data';

export interface Props {
  post: BlogPost
  author: BlogData['author']
}

export const Post: React.FC<Props> = ({ post, author }) => {
  return (
    <article className="page-container mx-auto !max-w-[768px]">
      <PostHead {...post.metadata} />

      <Divider />

      <PostBody content={post.markdown} />

      <Divider />

      <div>
        <AuthorCard author={author} />
      </div>
    </article>
  );
};
