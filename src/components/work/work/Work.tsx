import React from 'react';
import clsx from 'clsx';
import { WorkHead } from './WorkHead';
import { WorkBody } from './WorkBody';
import { AuthorCard } from '@components/ui/authorCard';
import { Divider } from '@components/ui/divider';
import { WorkData } from '@lib/services/data';
import { WorkArticle } from '@lib/services/work';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  work: WorkArticle
  author: WorkData['author']
}

export const Work: React.FC<Props> = ({ work, author, className, ...props }) => {
  return (
    <article className={clsx('page-container mx-auto !max-w-[768px]', className)} {...props}>
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
