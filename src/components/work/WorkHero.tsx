import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'section'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const WorkHero: FC<Props> = ({ items, className, ...props }) => {
  const countsByType = items.reduce<Record<string, number>>((accumulator, current) => ({
    ...accumulator,
    [current.type]: (accumulator[current.type] ?? 0) + 1
  }), {});

  return (
    <section className={clsx('px-10 pt-11.5 pb-8.5 border-b border-solid border-border flex flex-row items-end justify-between gap-10', className)} {...props}>
      <div className="flex flex-col gap-4.5">
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
          Portfolio
        </span>
        <h1 className="m-0 font-title font-black text-[118px] leading-[0.82] tracking-[-0.055em] uppercase">
          The Work
        </h1>
        <p className="m-0 text-[19px] font-light leading-[1.55] max-w-[52ch] text-light">
          Multiple projects across three kinds of work: research systems, art projects, and the hobby repositories I keep because building things is the point.
        </p>
      </div>

      <div className="shrink-0 flex flex-row gap-7.5 text-right">
        {Object.entries(countsByType).map(([type, count]) => (
          <div className="flex flex-col gap-0.75" key={type}>
            <span className="font-title font-black text-[52px] leading-none text-accent">
              {count}
            </span>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-muted">
              {type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
