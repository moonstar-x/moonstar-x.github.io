import { MaskedWords } from '@components/motion/MaskedWords';
import { fadeUp, staggerChildren } from '@components/motion/variants';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

const CODE_TEXT = '404';
const HEADING_TEXT = "This page doesn't exist.";

type Props = Omit<ComponentProps<typeof motion.section>, 'children'>;

export const NotFoundHero: FC<Props> = ({ className, ...props }) => (
  <motion.section animate="shown" className={clsx('pt-7.5 xl:pt-14.5 px-5 xl:px-10 pb-5 xl:pb-7.5 flex flex-col xl:flex-row gap-3 xl:gap-12 items-start', className)} initial="hidden" variants={staggerChildren(0.3)} {...props}>
    <span className="xl:shrink-0 font-title font-black text-[150px] xl:text-[300px] leading-[0.76] xl:leading-[0.74] tracking-[-0.06em] xl:tracking-[-0.07em] text-accent">
      <span className="sr-only">
        {CODE_TEXT}
      </span>
      <motion.span aria-hidden variants={staggerChildren(0.08)}>
        <MaskedWords separator="" text={CODE_TEXT} />
      </motion.span>
    </span>
    <motion.div className="grow pt-2.5 flex flex-col gap-3 xl:gap-5.5" variants={staggerChildren(0.35)}>
      <h1 className="m-0 font-title font-black text-[54px] xl:text-[84px] leading-[0.85] xl:leading-[0.84] tracking-tighter xl:tracking-tighter uppercase">
        <span className="sr-only">
          {HEADING_TEXT}
        </span>
        <motion.span aria-hidden variants={staggerChildren(0.06)}>
          <MaskedWords text={HEADING_TEXT} />
        </motion.span>
      </h1>
      <motion.p className="m-0 text-[17px] xl:text-[20px] font-light leading-[1.55] xl:max-w-[40ch] text-light" variants={fadeUp()}>
        Either the link is broken, the page moved, or it was never here in the first place. No harm done — here's where everything actually lives.
      </motion.p>
    </motion.div>
  </motion.section>
);
