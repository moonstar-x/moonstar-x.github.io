import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren, TAP_SCALE } from '@components/motion/variants';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import type { ComponentProps, FC } from 'react';

export interface FooterLink {
  label: string;
  url: string;
}

interface Props extends Omit<ComponentProps<typeof motion.footer>, 'children'> {
  links: FooterLink[];
}

export const WorkFooter: FC<Props> = ({ links, className, ...props }) => (
  <motion.footer className={clsx('bg-text text-background py-5.5 xl:py-6.5 px-5 xl:px-10 flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between', className)} initial="hidden" variants={staggerChildren(0.2)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <motion.div className="xl:-mb-1.5" variants={fadeUp()}>
      <MotionLink className="group inline-block font-title font-black text-[34px] xl:text-[40px] tracking-[-0.04em] uppercase transition-colors duration-200 ease-out hover:text-accent-light" href={RouteDefs.contact} whileTap={TAP_SCALE}>
        Let's connect
        {' '}
        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
          →
        </span>
      </MotionLink>
    </motion.div>

    <motion.nav className="flex flex-row gap-4.5 xl:gap-5.5 text-xs xl:text-sm font-medium tracking-widest uppercase" variants={staggerChildren(0.06)}>
      {links.map(({ url, label }) => (
        <MotionLink className="accent-underline accent-underline-light transition-colors duration-200 ease-out hover:text-accent-light hover:accent-underline-shown focus-visible:accent-underline-shown" href={url} key={label} rel="me" variants={fadeUp(0, 12)}>
          {label}
        </MotionLink>
      ))}
    </motion.nav>
  </motion.footer>
);
