'use client';
import { TypedWorkList } from '@components/work/TypedWorkList';
import type { WorkMetadata, WorkType } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import { useState } from 'react';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
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
      <div className="bg-text text-background py-3 xl:py-2.5 px-5 xl:px-10 flex flex-row gap-2 xl:gap-6.5 items-center overflow-hidden">
        <span className="hidden xl:inline-block font-title font-bold text-sm tracking-[0.2em] uppercase pt-1.25 pb-1">
          Filter
        </span>

        {[null, ...orderedWorkTypes].map((type) => (
          <button
            aria-pressed={filter === type}
            key={type ?? 'all'}
            type="button"
            onClick={createHandleFilterClick(type)}
            className={clsx(
              'text-[13px] xl:text-sm font-semibold tracking-[0.08em] xl:tracking-widest uppercase py-2.25 xl:py-1.25 px-3.5 xl:px-3.25 cursor-pointer transition-colors duration-200 ease-out',
              filter === type
                ? 'text-text bg-background'
                : 'text-background border xl:border-0 border-solid border-border-darker transition-colors duration-200 ease-out hover:text-text hover:bg-background-dark'
            )}
          >
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
