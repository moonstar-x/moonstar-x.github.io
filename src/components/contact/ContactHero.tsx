import { MaskedWords } from '@components/motion/MaskedWords';
import { revealStyle } from '@components/motion/revealStyle';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

const HEADING_TEXT = "Let's Connect";

type Props = Omit<ComponentProps<'section'>, 'children'>;

export const ContactHero: FC<Props> = ({ className, ...props }) => (
  <section className={clsx('pt-8.5 xl:pt-14 px-5 xl:px-10 pb-6.5 xl:pb-10 flex flex-col gap-3.5 xl:gap-6', className)} {...props}>
    <span className="text-xs xl:text-sm font-medium tracking-[0.2em] uppercase text-accent animate-fade-up" style={revealStyle(0, 12)}>
      Nice to meet you
    </span>
    <h1 className="m-0 font-title font-black text-[68px] xl:text-[150px] leading-[0.82] xl:leading-[0.8] tracking-[-0.055em] xl:tracking-[-0.06em] uppercase">
      <span className="sr-only">
        {HEADING_TEXT}
      </span>
      <span aria-hidden>
        <MaskedWords delay={0.2} text={HEADING_TEXT} />
      </span>
    </h1>
    <p className="m-0 text-[17px] xl:text-[21px] font-light leading-[1.55] xl:max-w-[52ch] text-light animate-fade-up" style={revealStyle(0.4)}>
      I'm most interested in backend and full-stack work where the data model is the hard part — graphs, pipelines, anything with a schema worth arguing about.
      I read everything and reply within a couple of days.
    </p>
  </section>
);
