import React from 'react';
import clsx from 'clsx';
import sampleSize from 'lodash.samplesize';
import { WorkGrid } from '@components/work/workGrid';
import { str } from '@lib/services/strings';
import { WorkArticle } from '@lib/services/work';

export interface Props {
  allWork: WorkArticle['metadata'][]
  currentSlug: string
  count?: number
  className?: string
}

export const WorkSuggestions: React.FC<Props> = ({
  allWork,
  currentSlug,
  count = 3,
  className
}) => {
  const randomPostsForGrid = sampleSize(
    allWork.filter((work) => work.slug !== currentSlug),
    count
  );

  if (randomPostsForGrid.length < 1) {
    return null;
  }

  return (
    <div className={clsx('page-container', className)}>
      <h4 className="mb-[20px]">
        {str('work.more_like_this.title')}
      </h4>

      <WorkGrid work={randomPostsForGrid} />
    </div>
  );
};
