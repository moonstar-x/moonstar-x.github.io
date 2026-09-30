import { MaskedWords } from '@components/motion/MaskedWords';
import { fadeUp, staggerChildren } from '@components/motion/variants';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

const HEADING_TEXT = "Let's Connect";

type Props = Omit<ComponentProps<typeof motion.section>, 'children'>;

export const ContactHero: FC<Props> = ({ className, ...props }) => (
  <motion.section animate="shown" className={clsx('pt-8.5 xl:pt-14 px-5 xl:px-10 pb-6.5 xl:pb-10 flex flex-col gap-3.5 xl:gap-6', className)} initial="hidden" variants={staggerChildren(0.2)} {...props}>
    <motion.span className="text-xs xl:text-sm font-medium tracking-[0.2em] uppercase text-accent" variants={fadeUp(0, 12)}>
      Nice to meet you
    </motion.span>
    <h1 className="m-0 font-title font-black text-[68px] xl:text-[150px] leading-[0.82] xl:leading-[0.8] tracking-[-0.055em] xl:tracking-[-0.06em] uppercase">
      <span className="sr-only">
        {HEADING_TEXT}
      </span>
      <motion.span aria-hidden variants={staggerChildren(0.07)}>
        <MaskedWords text={HEADING_TEXT} />
      </motion.span>
    </h1>
    <motion.p className="m-0 text-[17px] xl:text-[21px] font-light leading-[1.55] xl:max-w-[52ch] text-light" variants={fadeUp()}>
      I'm most interested in backend and full-stack work where the data model is the hard part — graphs, pipelines, anything with a schema worth arguing about.
      I read everything and reply within a couple of days.
    </motion.p>
  </motion.section>
);
