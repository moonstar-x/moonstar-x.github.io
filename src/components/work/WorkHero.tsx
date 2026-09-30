import { MaskedWords } from '@components/motion/MaskedWords';
import { revealStyle } from '@components/motion/revealStyle';
import { RouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import { getWorkTypeLabel } from '@core/services/data/work-type';
import type { WorkType } from '@core/services/data/work-type';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

const HEADING_TEXT = 'The Work';

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
        <span className="text-xs xl:text-sm font-medium tracking-[0.2em] uppercase text-accent animate-fade-up" style={revealStyle(0, 12)}>
          Portfolio
        </span>
        <h1 className="m-0 font-title font-black text-[64px] xl:text-[118px] leading-[0.85] xl:leading-[0.82] tracking-tighter xl:tracking-[-0.055em] uppercase">
          <span className="sr-only">
            {HEADING_TEXT}
          </span>
          <span aria-hidden>
            <MaskedWords delay={0.2} text={HEADING_TEXT} />
          </span>
        </h1>
        <p className="m-0 text-[16px] xl:text-[19px] font-light leading-[1.55] max-w-[52ch] text-light animate-fade-up" style={revealStyle(0.4)}>
          Multiple projects across three kinds of work: research systems, art projects, and the hobby repositories I keep because building things is the point.
        </p>
      </div>

      <div className="mt-1 xl:mt-0 shrink-0 flex flex-row gap-6.5 xl:gap-7.5 xl:text-right">
        {orderedWorkTypes.map((type, index) => (
          <div className="animate-fade-up" key={type} style={revealStyle(0.5 + (index * 0.08), 16)}>
            <Link
              className="group flex flex-col xl:gap-0.75"
              href={`${RouteDefs.work}?type=${type}`}
              scroll={false}
            >
              <span className="font-title font-black text-[36px] xl:text-[52px] leading-none text-accent">
                {countsByType[type]}
              </span>
              <span className="text-[11px] xl:text-xs font-medium tracking-[0.12em] uppercase text-muted transition-colors duration-200 ease-out group-hover:text-text group-focus-visible:text-text">
                {getWorkTypeLabel(type)}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
