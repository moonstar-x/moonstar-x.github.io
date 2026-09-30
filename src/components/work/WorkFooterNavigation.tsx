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
    <Link className="group hidden xl:inline-block text-[13px] font-medium tracking-widest uppercase text-muted transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.work}>
      <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1">
        ←
      </span>
      {' '}
      <span className="inline-block accent-underline group-hover:accent-underline-shown group-focus-visible:accent-underline-shown">
        All work
      </span>
    </Link>
    {
      nextArticleName !== undefined && nextArticleSlug !== undefined && (
        <div className="flex flex-col xl:flex-row items-baseline xl:gap-3.5 text-text">
          <span className="text-xs xl:text-[13px] font-medium tracking-widest uppercase text-muted">
            Next Up
          </span>
          <Link className="group font-title font-black text-[30px] xl:text-[34px] tracking-[-0.035em] uppercase transition-colors duration-200 ease-out hover:text-accent" href={DynamicRouteDefs.workBySlug(nextArticleSlug)}>
            {nextArticleName}
            {' '}
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      )
    }
  </section>
);
