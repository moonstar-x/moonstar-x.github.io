import React from 'react';
import { WorkHead } from './WorkHead';
import { WorkBody } from './WorkBody';
import { AuthorCard } from '@components/ui/authorCard';
import { Divider } from '@components/ui/divider';
import { WorkData } from '@lib/services/data';
import { WorkArticle } from '@lib/services/work';

export interface Props {
  work: WorkArticle
  author: WorkData['author']
}

export const Work: React.FC<Props> = ({ work, author }) => {
  return (
    <article className="page-container mx-auto !max-w-[768px]">
      <WorkHead {...work.metadata} />

      <Divider />

      <WorkBody content={work.markdown} />

      <Divider />

      <div>
        <AuthorCard {...author} />
      </div>
    </article>
  );
};
