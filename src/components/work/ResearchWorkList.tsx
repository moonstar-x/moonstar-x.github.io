import { WorkListTitle } from '@components/work/WorkListTitle';
import { DynamicRouteDefs } from '@core/routes/routes';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const ResearchWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('pt-7.5 px-10 pb-6.5 flex flex-col gap-4 border-b border-solid border-border', className)} {...props}>
    <WorkListTitle count={items.length} title="Research Work" />
    {
      items.map(({ slug, name, description, technologies, cover, status }) => (
        <Link className="text-text flex flex-row gap-6.5 items-center pt-8 pb-3.5 border-t border-solid border-border-light" href={DynamicRouteDefs.workBySlug(slug)} key={slug}>
          <Image alt={slug} className="shrink-0 object-cover" height={128} src={cover} width={210} />
          <div className="grow flex flex-col gap-2.25">
            <h3 className="font-title font-black text-[44px] leading-[0.95] tracking-[-0.035em] uppercase">
              {name}
            </h3>
            <p className="text-[16px] font-light leading-[1.55] text-lighter max-w-[64ch]">
              {description}
            </p>
            <ul className="flex flex-row flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <li className="text-xs font-medium border border-solid border-border-lighter py-0.75 px-2.25 text-lighter uppercase" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            {
              status === 'in-development' && (
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
