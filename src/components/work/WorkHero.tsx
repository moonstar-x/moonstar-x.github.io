import type { WorkMetadata, WorkType } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: Record<WorkType, Array<ContentMetadata<WorkMetadata>>>;
  orderedWorkTypes: WorkType[];
}

export const WorkHero: FC<Props> = ({ items, orderedWorkTypes, className, ...props }) => {
  const countsByType = Object.fromEntries(
    Object.entries(items).map(([type, innerItems]) => [type, innerItems.length])
  );

  return (
    <section className={clsx('px-5 xl:px-10 pt-7.5 xl:pt-11.5 pb-5.5 xl:pb-8.5 border-b border-solid border-border flex flex-col xl:flex-row xl:items-end xl:justify-between gap-3.5 xl:gap-10', className)} {...props}>
      <div className="flex flex-col gap-3.5 xl:gap-4.5">
        <span className="text-xs xl:text-sm font-medium tracking-[0.2em] uppercase text-accent">
          Portfolio
        </span>
        <h1 className="m-0 font-title font-black text-[64px] xl:text-[118px] leading-[0.85] xl:leading-[0.82] tracking-tighter xl:tracking-[-0.055em] uppercase">
          The Work
        </h1>
        <p className="m-0 text-[16px] xl:text-[19px] font-light leading-[1.55] max-w-[52ch] text-light">
          Multiple projects across three kinds of work: research systems, art projects, and the hobby repositories I keep because building things is the point.
        </p>
      </div>

      <div className="mt-1 xl:mt-0 shrink-0 flex flex-row gap-6.5 xl:gap-7.5 xl:text-right">
        {orderedWorkTypes.map((type) => (
          <div className="flex flex-col xl:gap-0.75" key={type}>
            <span className="font-title font-black text-[36px] xl:text-[52px] leading-none text-accent">
              {countsByType[type]}
            </span>
            <span className="text-[11px] xl:text-xs font-medium tracking-[0.12em] uppercase text-muted">
              {type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
