import React, { Fragment } from 'react';
import clsx from 'clsx';
import { WorkCard } from '@components/work/workCard';
import { Divider } from '@components/ui/divider';
import { WorkArticle, WorkType } from '@lib/services/work';
import { str } from '@lib/services/strings';

const typeStrings = (type: WorkType): string | null => {
  switch (type) {
    case 'hobby':
      return str('work.type.hobby');
    case 'art':
      return str('work.type.art');
    case 'research':
      return str('work.type.research');
    default:
      return null;
  }
};

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  work: WorkArticle['metadata'][]
  type?: WorkType
}

export const WorkGrid: React.FC<Props> = ({ work, type, className, ...props }) => {
  const typeName = type ? typeStrings(type) : null;

  return (
    <section className={clsx('page-container', className)} {...props}>
      {
        typeName && (
          <Fragment>
            <h2>
              {str('work.grid.title', { type: typeName })}
            </h2>

            <Divider className="mt-[20px]" />
          </Fragment>
        )
      }

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-[40px] gap-y-[40px] tablet:gap-y-[80px]">
        {
          work.map((workArticle, idx) => (
            <WorkCard key={idx} work={workArticle} />
          ))
        }
      </div>
    </section>
  );
};
