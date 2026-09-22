'use client';
import { TypedWorkList } from '@components/work/TypedWorkList';
import type { WorkMetadata, WorkType } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import { useState } from 'react';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'section'> {
  items: Record<WorkType, Array<ContentMetadata<WorkMetadata>>>;
  orderedWorkTypes: WorkType[];
}

export const FilteringWorkList: FC<Props> = ({ items, orderedWorkTypes, className, ...props }) => {
  const [filter, setFilter] = useState<null | WorkType>(null);

  const createHandleFilterClick = (type: null | WorkType) => (): void => {
    setFilter(type);
  };

  return (
    <section className={clsx(className)} {...props}>
      <div className="bg-text text-background py-2.5 px-10 flex flex-row gap-6.5 items-center">
        <span className="font-title font-bold text-sm tracking-[0.2em] uppercase pt-1.25 pb-1">
          Filter
        </span>

        {[null, ...orderedWorkTypes].map((type) => (
          <button className={clsx('text-sm font-medium tracking-widest uppercase text-background py-1.25 px-3.25 cursor-pointer hover:font-semibold hover:text-text hover:bg-background', filter === type && 'font-semibold text-text bg-background')} key={type ?? 'all'} type="button" onClick={createHandleFilterClick(type)}>
            {type ?? 'all'}
          </button>
        ))}
      </div>

      {
        filter === null
          ? (
              <>
                {orderedWorkTypes.map((type) => (
                  <TypedWorkList items={items[type]} key={type} type={type} />
                ))}
              </>
            )
          : (
              <TypedWorkList items={items[filter]} type={filter} />
            )
      }
    </section>
  );
};
