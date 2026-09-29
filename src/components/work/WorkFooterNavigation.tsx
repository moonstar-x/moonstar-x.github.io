import { DynamicRouteDefs, RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  nextArticleName?: string | undefined;
  nextArticleSlug?: string | undefined;
}

export const WorkFooterNavigation: FC<Props> = ({ nextArticleName, nextArticleSlug, className, ...props }) => (
  <section className={clsx('border-t border-solid border-border pt-5 pb-3 xl:py-5.5 px-5 xl:px-10 flex flex-col xl:flex-row gap-1 xl:items-center justify-between', className)} {...props}>
    <Link className="hidden xl:inline-block text-[13px] font-medium tracking-widest uppercase text-muted" href={RouteDefs.work}>
      ← All work
    </Link>
    {
      nextArticleName !== undefined && nextArticleSlug !== undefined && (
        <div className="flex flex-col xl:flex-row items-baseline xl:gap-3.5 text-text">
          <span className="text-xs xl:text-[13px] font-medium tracking-widest uppercase text-muted">
            Next Up
          </span>
          <Link className="font-title font-black text-[30px] xl:text-[34px] tracking-[-0.035em] uppercase" href={DynamicRouteDefs.workBySlug(nextArticleSlug)}>
            {nextArticleName}
            {' '}
            →
          </Link>
        </div>
      )
    }
  </section>
);
