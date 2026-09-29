import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  metadata: ContentMetadata<WorkMetadata>;
}

export const WorkArticleHero: FC<Props> = ({ metadata, className, ...props }) => (
  <section className={clsx('px-5 xl:px-10 pt-7 xl:pt-11.5 pb-6 xl:pb-9', className)} {...props}>
    <div className="flex flex-row items-center gap-2 xl:gap-3 pb-6 xl:pb-5">
      <span className="text-[11px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.14em] uppercase bg-text text-background py-1.5 px-3">
        {metadata.type}
      </span>
      <span className="text-[11px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.14em] uppercase bg-accent text-background py-1.5 px-3">
        {metadata.status}
      </span>
    </div>
    <h1 className="m-0 font-title font-black text-[62px] xl:text-[148px] leading-[0.83] xl:leading-[0.8] tracking-[-0.055em] xl:tracking-[-0.06em] uppercase">
      {metadata.name}
    </h1>
    <p className="mt-3.5 xl:mt-6.5 text-[19px] xl:text-[26px] font-light leading-[1.45] xl:max-w-[46ch] text-light">
      {metadata.description}
    </p>
  </section>
);
