import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
  maxShown?: number;
  maxTechnologiesInStatus?: number;
}

export const HomeWorkSection: FC<Props> = ({ items, className, maxShown = 3, maxTechnologiesInStatus = 2, ...props }) => {
  const slicedItems = items.slice(0, maxShown);

  return (
    <section className={clsx(className)} {...props}>
      <div className="px-10 pt-8.5 pb-2.5 flex flex-row items-baseline gap-4">
        <h2 className="font-title font-black text-[30px] tracking-[-0.03em] uppercase">
          Some of my work
        </h2>
        <hr className="grow h-px border-border" />
        <Link className="text-sm font-medium tracking-widest uppercase text-accent" href={RouteDefs.work}>
          See all
          {' '}
          {items.length}
          {' '}
          →
        </Link>
      </div>

      <div className="flex flex-col">
        {slicedItems.map((item, index) => {
          const status = item.status === 'in-development'
            ? 'In Development'
            : item.technologies.slice(0, maxTechnologiesInStatus).join('·');
          const completeStatus = status.length > 0 ? `${item.type} · ${status}` : item.type;

          return (
            <Link className="min-h-54.75 grow flex flex-row items-center gap-7.5 px-10 pt-6 pb-4 border-b border-solid border-border" href={DynamicRouteDefs.workBySlug(item.slug)} key={item.slug}>
              <span className="font-title font-black text-[20px] text-accent w-15 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col grow gap-2">
                <span className="font-title font-black text-[54px] leading-[0.92] tracking-[-0.04em] uppercase">
                  {item.name}
                </span>
                <p className="text-[16px] font-light leading-normal text-lighter max-w-[70ch]">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 text-right flex flex-col gap-1.5">
                <span className="text-[12px] font-medium tracking-widest uppercase text-muted">
                  {completeStatus}
                </span>
                <span className="font-title font-black text-[34px] text-accent">
                  ↗
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
