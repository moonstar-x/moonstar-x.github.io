'use client';
import { MaskedWords } from '@components/motion/MaskedWords';
import { revealStyle } from '@components/motion/revealStyle';
import { TAP_SCALE } from '@components/motion/variants';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import type { ComponentProps, FC } from 'react';

const CODE_TEXT = 'ERR';
const HEADING_TEXT = 'Something broke.';

const BUTTON_CLASS_NAME = 'shrink-0 font-title font-bold text-[16px] xl:text-[17px] tracking-[0.06em] uppercase border-2 border-text pt-4.25 xl:pt-4.5 pb-3.25 xl:pb-3.75 px-6 xl:px-8 text-center cursor-pointer transition-colors duration-200 ease-out';

const handleReload = (): void => {
  location.reload();
};

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  onRetry: () => void;
}

export const ErrorHero: FC<Props> = ({ onRetry, className, ...props }) => (
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
      <p className="m-0 text-[17px] xl:text-[20px] font-light leading-[1.55] xl:max-w-[40ch] text-light animate-fade-up" style={revealStyle(0.55)}>
        An unexpected error stopped this page from rendering. Give it another go, or reload the page — the details are below if you're curious.
      </p>
      <div className="pt-2 flex flex-row flex-wrap gap-3 animate-fade-up" style={revealStyle(0.7)}>
        <motion.button className={clsx(BUTTON_CLASS_NAME, 'bg-text text-background hover:bg-accent hover:border-accent')} type="button" whileTap={TAP_SCALE} onClick={onRetry}>
          Try again
        </motion.button>
        <motion.button className={clsx(BUTTON_CLASS_NAME, 'text-text hover:bg-text hover:text-background')} type="button" whileTap={TAP_SCALE} onClick={handleReload}>
          Reload page
        </motion.button>
      </div>
    </div>
  </section>
);
