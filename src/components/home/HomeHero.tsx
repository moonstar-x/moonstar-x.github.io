import { MaskedWords } from '@components/motion/MaskedWords';
import { MotionLink } from '@components/motion/MotionLink';
import { revealStyle, WORD_STAGGER } from '@components/motion/revealStyle';
import { TAP_SCALE } from '@components/motion/variants';
import { SlidingText } from '@components/ui/SlidingText';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

const HEADING_TEXT = 'I build software';
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
      <span className="sr-only">
        {HEADING_TEXT}
        {' '}
        {HEADING_OPTIONS[0]}
      </span>

      <span aria-hidden>
        <MaskedWords text={HEADING_TEXT} />
        {' '}
        <span className="reveal-mask">
          <span className="inline-block animate-mask-reveal" style={revealStyle(HEADING_TEXT.split(' ').length * WORD_STAGGER)}>
            <SlidingText className="text-accent" options={HEADING_OPTIONS} />
          </span>
        </span>
      </span>
    </h1>

    <div className="mt-5.5 xl:mt-11 flex flex-col xl:flex-row gap-5.5 xl:gap-4 items-start justify-between">
      <p className="m-0 text-[17px] xl:text-[21px] font-light leading-[1.55] max-w-[44ch] text-light animate-fade-up" style={revealStyle(0.45)}>
        {subtitle}
      </p>

      <div className="w-full xl:w-[initial] flex flex-col gap-3 xl:gap-2.5 items-end shrink-0 animate-fade-up" style={revealStyle(0.57)}>
        <MotionLink className="group w-full xl:w-[initial] text-center xl:text-start font-title font-bold text-[16px] tracking-[0.06em] uppercase bg-text text-background pt-4 pb-2.75 px-6 xl:px-7.5 transition-colors duration-200 ease-out hover:bg-accent" href={RouteDefs.contact} whileTap={TAP_SCALE}>
          Let's connect
          {' '}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        </MotionLink>

        <span className="text-xs xl:text-sm text-muted text-center xl:text-start w-full xl:w-[initial]">
          {subCta}
        </span>
      </div>
    </div>
  </section>
);
