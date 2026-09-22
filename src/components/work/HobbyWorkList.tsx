import { WorkListTitle } from '@components/work/WorkListTitle';
import { DynamicRouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'div'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const HobbyWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('grow pt-6.5 px-10 pb-7.5 flex flex-col gap-4', className)} {...props}>
    <WorkListTitle count={items.length} title="Hobby Work" />
    <div className="grid grid-cols-3 gap-3.5">
      {items.map((item) => (
        <Link className="text-text border border-solid border-border bg-background-light p-4.5 flex flex-col gap-1.75" href={DynamicRouteDefs.workBySlug(item.slug)} key={item.slug}>
          <h3 className="font-title font-black text-[22px] tracking-[-0.02em] uppercase">
            {item.name}
          </h3>
          <p className="text-sm font-light leading-normal text-lighter">
            {item.description}
          </p>
          <p className="text-xs font-medium text-accent mt-0.5 uppercase">
            {item.technologies.join(' · ')}
          </p>
        </Link>
      ))}
    </div>
  </div>
);
