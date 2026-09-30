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

export const ArtWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx('py-4 xl:py-6.5 px-5 xl:px-10 flex flex-col gap-4 not-last:border-b border-solid border-border', className)} {...props}>
    <WorkListTitle count={items.length} title="Art Work" />
    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-5">
      {items.map(({ slug, cover, name, description }) => (
        <li className="flex border-t xl:border-t-[3px] border-solid border-border xl:border-text py-4 last:pb-0 xl:pt-3.5 xl:pb-0 transition-colors duration-200 ease-out xl:has-[a:hover]:border-accent" key={slug}>
          <Link className="group grow text-text flex flex-row xl:flex-col gap-3.5 xl:gap-2.75" href={DynamicRouteDefs.workBySlug(slug)}>
            <div className="w-25 xl:w-full h-19 xl:h-35 relative shrink-0 overflow-hidden">
              <Image fill alt={slug} className="object-cover transition-transform duration-300 ease-out group-hover:scale-105" src={cover} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-title font-black text-[22px] xl:text-[28px] leading-none xl:leading-[0.98] tracking-[-0.03em] uppercase transition-colors duration-200 ease-out group-hover:text-accent">
                {name}
              </h3>
              <p className="xl:mt-1 text-[14px] xl:text-[15px] font-light leading-normal xl:leading-[1.55] text-lighter">
                {description}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
