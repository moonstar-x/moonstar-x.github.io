import { WorkListTitle } from '@components/work/WorkListTitle';
import { DynamicRouteDefs } from '@core/routes/routes';
import type { WorkMetadata, WorkStatus } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface InDevelopmentBadgeProps extends Omit<ComponentProps<'span'>, 'children'> {
  status: WorkStatus;
}

const InDevelopmentBadge: FC<InDevelopmentBadgeProps> = ({ status, className, ...props }) => {
  if (status !== 'in-development') {
    return null;
  }

  return (
    <span className={clsx('text-[11px] font-semibold tracking-[0.08em] xl:tracking-widest uppercase bg-accent text-background py-1 px-2.5', className)} {...props}>
      In Development
    </span>
  );
};

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const ResearchWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('pt-5.5 xl:pt-7.5 px-5 xl:px-10 pb-4.5 xl:pb-6.5 flex flex-col gap-4 not-last:border-b border-solid border-border', className)} {...props}>
    <WorkListTitle count={items.length} title="Research Work" />
    {
      items.map(({ slug, name, description, technologies, cover, status }) => (
        <Link className="text-text flex flex-col xl:flex-row gap-2.75 xl:gap-6.5 xl:items-center pt-4 xl:pt-8 xl:pb-3.5 border-t border-solid border-border-light" href={DynamicRouteDefs.workBySlug(slug)} key={slug}>
          <div className="w-full xl:w-52.5 h-35 xl:h-32 relative">
            <Image fill alt={slug} className="shrink-0 object-cover" src={cover} />
          </div>
          <div className="grow flex flex-col gap-2.25 mt-1 xl:mt-0">
            <h3 className="font-title font-black text-[32px] xl:text-[44px] leading-[0.95] tracking-[-0.035em] uppercase">
              {name}
            </h3>
            <p className="text-[15px] xl:text-[16px] font-light leading-[1.55] text-lighter max-w-[64ch]">
              {description}
            </p>
            <ul className="flex flex-row flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <li className="text-xs font-medium border border-solid border-border-lighter py-1 xl:py-0.75 px-2.25 text-lighter uppercase" key={technology}>
                  {technology}
                </li>
              ))}
              <InDevelopmentBadge className="inline-block xl:hidden" status={status} />
            </ul>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            <InDevelopmentBadge className="hidden xl:inline-block" status={status} />
            <span className="hidden xl:inline-block font-title font-black text-[30px] text-accent">
              ↗
            </span>
          </div>
        </Link>
      ))
    }
  </div>
);
