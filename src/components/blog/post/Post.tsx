import React from 'react';
import { PostHead } from './PostHead';
import { PostBody } from './PostBody';
import { AuthorCard } from './AuthorCard';
import { BlogPost } from '@lib/services/blog';
import { BlogData } from '@lib/services/data';
import { Divider } from '@components/ui/divider';
import { ShareCard } from '@components/ui/shareCard';

export interface Props {
  post: BlogPost
  author: BlogData['author']
}

export const Post: React.FC<Props> = ({ post, author }) => {
  return (
    <article className="page-container [&>*]:mx-auto">
      <PostHead {...post.metadata} />

      <Divider className="max-w-[768px]" />

      <PostBody content={post.markdown} />

      <Divider className="max-w-[768px]" />

      <div className="max-w-[768px]">
        <AuthorCard author={author} />
      </div>

      <ShareCard className="max-w-[768px] my-[4rem]" />
    </article>
  );
};
