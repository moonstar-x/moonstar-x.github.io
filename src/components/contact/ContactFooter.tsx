import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '@components/motion/variants';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<typeof motion.footer>, 'children'> {
  blurb: string;
}

export const ContactFooter: FC<Props> = ({ blurb, className, ...props }) => (
  <motion.footer className={clsx('border-t border-solid border-border py-5 xl:py-5.5 px-5 xl:px-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-0 text-[13px] xl:text-sm font-normal text-muted', className)} initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <MotionLink className="group tracking-widest uppercase transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.home} variants={fadeUp(0, 12)}>
      <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1">
        ←
      </span>
      {' '}
      <span className="inline-block accent-underline group-hover:accent-underline-shown group-focus-visible:accent-underline-shown">
        Back home
      </span>
    </MotionLink>
    <motion.p variants={fadeUp(0, 12)}>
      {blurb}
    </motion.p>
  </motion.footer>
);
