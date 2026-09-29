import { WorkListTitle } from '@components/work/WorkListTitle';
import { DynamicRouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const HobbyWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('grow py-4 xl:pt-6.5 px-5 xl:px-10 xl:pb-7.5 flex flex-col gap-4 not-last:border-b border-solid border-border', className)} {...props}>
    <WorkListTitle count={items.length} title="Hobby Work" />
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-3.5">
      {items.map(({ name, description, technologies, slug }) => (
        <Link className="text-text border border-solid border-border bg-background-light p-3.75 xl:p-4.5 flex flex-col gap-1.25 xl:gap-1.75" href={DynamicRouteDefs.workBySlug(slug)} key={slug}>
          <h3 className="font-title font-black text-[20px] xl:text-[22px] tracking-[-0.02em] uppercase">
            {name}
          </h3>
          <p className="text-sm font-light leading-normal text-lighter">
            {description}
          </p>
          <p className="text-xs font-medium text-accent mt-0.5 uppercase">
            {technologies.join(' · ')}
          </p>
        </Link>
      ))}
    </div>
  </div>
);
