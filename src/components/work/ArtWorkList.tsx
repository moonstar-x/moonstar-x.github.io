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
  <div className={clsx('py-6.5 px-10 flex flex-col gap-4 border-b border-solid border-border', className)} {...props}>
    <WorkListTitle count={items.length} title="Art Work" />
    <div className="grid grid-cols-3 gap-5">
      {items.map((item) => (
        <Link className="text-text flex flex-col gap-2.75 border-t-[3px] border-solid border-text pt-3.5" href={DynamicRouteDefs.workBySlug(item.slug)} key={item.slug}>
          <div className="w-full h-35 relative">
            <Image fill alt={item.slug} className="object-cover" src={item.cover} />
          </div>
          <h3 className="font-title font-black text-[28px] leading-[0.98] tracking-[-0.03em] uppercase">
            {item.name}
          </h3>
          <p className="text-[15px] font-light leading-[1.55] text-lighter">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  </div>
);
