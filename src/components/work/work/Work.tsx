import React from 'react';
import { WorkHead } from './WorkHead';
import { WorkBody } from './WorkBody';
import { Divider } from '@components/ui/divider';
import { WorkArticle } from '@lib/services/work';

export interface Props {
  work: WorkArticle
}

export const Work: React.FC<Props> = ({ work }) => {
  return (
    <article className="page-container mx-auto !max-w-[768px]">
      <WorkHead {...work.metadata} />

      <Divider />

      <WorkBody content={work.markdown} />
    </article>
  );
};
