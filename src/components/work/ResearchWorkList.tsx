import { DynamicRouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'div'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const ResearchWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('pt-7.5 px-10 pb-6.5 flex flex-col gap-4 border-b border-solid border-border', className)} {...props}>
    <div className="flex flex-row align-baseline gap-3.5">
      <h2 className="font-title font-black text-[15px] tracking-[0.2em] uppercase text-accent">
        Research Work
      </h2>
      <div className="grow border-b border-solid h-3.75 border-border" />
      <span className="text-sm text-muted">
        {items.length === 1 ? '1 project' : `${items.length.toString()} projects`}
      </span>
    </div>
    {
      items.map((item) => (
        <Link className="text-text flex flex-row gap-6.5 items-center pt-8 pb-3.5 border-t border-solid border-border-light" href={DynamicRouteDefs.workBySlug(item.slug)} key={item.slug}>
          <Image alt={item.slug} className="shrink-0" height={128} src={item.cover} width={210} />
          <div className="grow flex flex-col gap-2.25">
            <h3 className="font-title font-black text-[44px] leading-[0.95] tracking-[-0.035em] uppercase">
              {item.name}
            </h3>
            <p className="text-[16px] font-light leading-[1.55] text-lighter max-w-[64ch]">
              {item.description}
            </p>
            <div className="flex flex-row flex-wrap gap-1.5">
              {item.technologies.map((technology) => (
                <span className="text-xs font-medium border border-solid border-border-lighter py-0.75 px-2.25 text-lighter uppercase" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            {
              item.status === 'in-development' && (
                <span className="text-[11px] font-semibold tracking-widest uppercase bg-accent text-background py-1 px-2.5">
                  In Development
                </span>
              )
            }
            <span className="font-title font-black text-[30px] text-accent">
              ↗
            </span>
          </div>
        </Link>
      ))
    }
  </div>
);
