'use client';
import { EASE_OUT_EXPO } from '@components/motion/variants';
import { TypedWorkList } from '@components/work/TypedWorkList';
import type { WorkMetadata, WorkType } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { useStateFromParams } from '@hooks/useStateFromParams';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: Record<WorkType, Array<ContentMetadata<WorkMetadata>>>;
  orderedWorkTypes: WorkType[];
}

export const FilteringWorkList: FC<Props> = ({ items, orderedWorkTypes, className, ...props }) => {
  const [filter, setFilter] = useStateFromParams<WorkType>(
    'type',
    null,
    (raw) => orderedWorkTypes.find((type) => type === raw) ?? null
  );
  const [announcement, setAnnouncement] = useState<string>('');

  const createHandleFilterClick = (type: null | WorkType) => (): void => {
    const count = type === null
      ? orderedWorkTypes.reduce((total, workType) => total + items[workType].length, 0)
      : items[type].length;
    const noun = count === 1 ? 'project' : 'projects';

    setFilter(type);
    setAnnouncement(type === null ? `Showing all ${count.toString()} ${noun}.` : `Showing ${count.toString()} ${type} ${noun}.`);
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
              'relative text-[13px] xl:text-sm font-semibold tracking-[0.08em] xl:tracking-widest uppercase py-2.25 xl:py-1.25 px-3.5 xl:px-3.25 cursor-pointer transition-colors duration-200 ease-out',
              filter === type
                ? 'text-text'
                : 'text-background border xl:border-0 border-solid border-border-darker transition-colors duration-200 ease-out hover:text-text hover:bg-background-dark'
            )}
          >
            {
              filter === type && (
                <motion.span className="absolute inset-0 bg-background" layoutId="work-filter-active" transition={{ duration: 0.4, ease: EASE_OUT_EXPO }} />
              )
            }
            <span className="relative">
              {type ?? 'all'}
            </span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          key={filter ?? 'all'}
        >
          {
            filter === null
              ? orderedWorkTypes.map((type) => (
                  <TypedWorkList items={items[type]} key={type} type={type} />
                ))
              : (
                  <TypedWorkList items={items[filter]} type={filter} />
                )
          }
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
