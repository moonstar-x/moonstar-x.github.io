import { RouteDefs, RouteHashDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'section'> {
  subCta: string;
  subtitle: string;
}

export const HomeHero: FC<Props> = ({ subtitle, subCta, className, ...props }) => (
  <section className={clsx('pt-15.5 px-10 pb-10.5', className)} {...props}>
    <h1 className="m-0 font-title font-black text-[172px] leading-[0.78] tracking-[-0.055em] uppercase">
      I build software
      {' '}
      <span className="text-accent">that lasts.</span>
    </h1>

    <div className="mt-11 flex flex-row gap-4 items-start justify-between">
      <h2 className="m-0 text-[21px] font-light leading-[1.55] max-w-[44ch] text-light">
        {subtitle}
      </h2>

      <div className="flex flex-col gap-2.5 items-end shrink-0">
        <Link className="font-title font-bold text-[16px] tracking-[0.06em] uppercase bg-text text-background pt-4 pb-2.75 px-7.5" href={`${RouteDefs.home}${RouteHashDefs.contact}`}>
          Let's connect →
        </Link>

        <span className="text-sm text-muted">
          {subCta}
        </span>
      </div>
    </div>
  </section>
);
