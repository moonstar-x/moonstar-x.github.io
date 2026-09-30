import { MaskedWords } from '@components/motion/MaskedWords';
import { revealStyle } from '@components/motion/revealStyle';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

const CODE_TEXT = '404';
const HEADING_TEXT = "This page doesn't exist.";

type Props = Omit<ComponentProps<'section'>, 'children'>;

export const NotFoundHero: FC<Props> = ({ className, ...props }) => (
  <section className={clsx('pt-7.5 xl:pt-14.5 px-5 xl:px-10 pb-5 xl:pb-7.5 flex flex-col xl:flex-row gap-3 xl:gap-12 items-start', className)} {...props}>
    <span className="xl:shrink-0 font-title font-black text-[150px] xl:text-[300px] leading-[0.76] xl:leading-[0.74] tracking-[-0.06em] xl:tracking-[-0.07em] text-accent">
      <span className="sr-only">
        {CODE_TEXT}
      </span>
      <span aria-hidden>
        <MaskedWords separator="" text={CODE_TEXT} />
      </span>
    </span>
    <div className="grow pt-2.5 flex flex-col gap-3 xl:gap-5.5">
      <h1 className="m-0 font-title font-black text-[54px] xl:text-[84px] leading-[0.85] xl:leading-[0.84] tracking-tighter xl:tracking-tighter uppercase">
        <span className="sr-only">
          {HEADING_TEXT}
        </span>
        <span aria-hidden>
          <MaskedWords delay={0.3} text={HEADING_TEXT} />
        </span>
      </h1>
      <p className="m-0 text-[17px] xl:text-[20px] font-light leading-[1.55] xl:max-w-[40ch] text-light animate-fade-up" style={revealStyle(0.65)}>
        Either the link is broken, the page moved, or it was never here in the first place. No harm done — here's where everything actually lives.
      </p>
    </div>
  </section>
);
