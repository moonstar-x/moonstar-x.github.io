import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, maskReveal, staggerChildren, TAP_SCALE } from '@components/motion/variants';
import { SlidingText } from '@components/ui/SlidingText';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import { Fragment } from 'react';
import type { ComponentProps, FC } from 'react';

const HEADING_WORDS: string[] = ['I', 'build', 'software'];
const HEADING_OPTIONS: string[] = [
  'that lasts.',
  'that scales.',
  'that rocks.'
];

interface Props extends Omit<ComponentProps<typeof motion.section>, 'children'> {
  subCta: string;
  subtitle: string;
}

export const HomeHero: FC<Props> = ({ subtitle, subCta, className, ...props }) => (
  <motion.section animate="shown" className={clsx('pt-8.5 px-5 pb-6.5 xl:pt-15.5 xl:px-10 xl:pb-10.5', className)} initial="hidden" variants={staggerChildren(0.45)} {...props}>
    <h1 className="m-0 font-title font-black text-[68px] xl:text-[160px] leading-[0.82] xl:leading-[0.78] tracking-tighter xl:tracking-[-0.055em] uppercase">
      <span className="sr-only">
        I build software
        {' '}
        {HEADING_OPTIONS[0]}
      </span>

      <motion.span aria-hidden variants={staggerChildren(0.07)}>
        {HEADING_WORDS.map((word) => (
          <Fragment key={word}>
            <span className="reveal-mask">
              <motion.span className="inline-block" variants={maskReveal}>
                {word}
              </motion.span>
            </span>
            {' '}
          </Fragment>
        ))}
        <span className="reveal-mask">
          <motion.span className="inline-block" variants={maskReveal}>
            <SlidingText className="text-accent" options={HEADING_OPTIONS} />
          </motion.span>
        </span>
      </motion.span>
    </h1>

    <motion.div className="mt-5.5 xl:mt-11 flex flex-col xl:flex-row gap-5.5 xl:gap-4 items-start justify-between" variants={staggerChildren(0.12)}>
      <motion.p className="m-0 text-[17px] xl:text-[21px] font-light leading-[1.55] max-w-[44ch] text-light" variants={fadeUp()}>
        {subtitle}
      </motion.p>

      <motion.div className="w-full xl:w-[initial] flex flex-col gap-3 xl:gap-2.5 items-end shrink-0" variants={fadeUp()}>
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
      </motion.div>
    </motion.div>
  </motion.section>
);
