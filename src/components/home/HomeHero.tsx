import { SlidingText } from '@components/ui/SlidingText';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

const HEADING_OPTIONS: string[] = [
  'that lasts.',
  'that scales.',
  'that rocks.'
];

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  subCta: string;
  subtitle: string;
}

export const HomeHero: FC<Props> = ({ subtitle, subCta, className, ...props }) => (
  <section className={clsx('pt-8.5 px-5 pb-6.5 xl:pt-15.5 xl:px-10 xl:pb-10.5', className)} {...props}>
    <h1 className="m-0 font-title font-black text-[68px] xl:text-[160px] leading-[0.82] xl:leading-[0.78] tracking-tighter xl:tracking-[-0.055em] uppercase">
      I build software
      {' '}
      <SlidingText className="text-accent" options={HEADING_OPTIONS} />
    </h1>

    <div className="mt-5.5 xl:mt-11 flex flex-col xl:flex-row gap-5.5 xl:gap-4 items-start justify-between">
      <p className="m-0 text-[17px] xl:text-[21px] font-light leading-[1.55] max-w-[44ch] text-light">
        {subtitle}
      </p>

      <div className="w-full xl:w-[initial] flex flex-col gap-3 xl:gap-2.5 items-end shrink-0">
        <Link className="w-full xl:w-[initial] text-center xl:text-start font-title font-bold text-[16px] tracking-[0.06em] uppercase bg-text text-background pt-4 pb-2.75 px-6 xl:px-7.5" href={RouteDefs.contact}>
          Let's connect →
        </Link>

        <span className="text-xs xl:text-sm text-muted text-center xl:text-start w-full xl:w-[initial]">
          {subCta}
        </span>
      </div>
    </div>
  </section>
);
