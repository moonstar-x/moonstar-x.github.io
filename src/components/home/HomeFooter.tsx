import { ArrowRightIcon } from '@components/icons/ArrowRightIcon';
import { MotionLink } from '@components/motion/MotionLink';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren, TAP_SCALE } from '@components/motion/variants';
import { umamiEvent, UmamiEvents } from '@core/analytics/events';
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

export const HomeFooter: FC<Props> = ({ links, className, ...props }) => (
  <motion.footer className={clsx('py-7.5 xl:py-8.5 px-5 xl:px-10 flex flex-col xl:flex-row gap-4 xl:items-center justify-center xl:justify-between border-t border-solid border-border', className)} initial="hidden" variants={staggerChildren(0.2)} viewport={REVEAL_VIEWPORT} whileInView="shown" {...props}>
    <motion.div className="flex flex-col gap-3 xl:gap-2 -mb-2" variants={staggerChildren(0.08)}>
      <motion.span className="text-xs xl:text-sm font-medium tracking-[0.16em] uppercase text-muted" variants={fadeUp(0, 12)}>
        Nice to meet you
      </motion.span>
      <MotionLink className="group self-start whitespace-nowrap font-title font-black text-[min(9vw,52px)] xl:text-[56px] leading-[0.88] xl:leading-normal tracking-[-0.045em] uppercase transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.contact} variants={fadeUp()} whileTap={TAP_SCALE} {...umamiEvent(UmamiEvents.contactCta, { location: 'home-footer' })}>
        Let's connect
        {' '}
        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
          <ArrowRightIcon />
        </span>
      </MotionLink>
    </motion.div>

    <motion.nav className="flex flex-row flex-wrap xl:flex-nowrap gap-2 xl:gap-5.5 text-sm font-medium tracking-widest uppercase" variants={staggerChildren(0.06)}>
      {links.map(({ url, label }) => (
        <MotionLink className="text-sm font-medium tracking-[0.08em] xl:tracking-widest uppercase border xl:border-0 border-solid border-text py-2.75 xl:py-0 px-4 xl:px-0 transition-colors duration-200 ease-out hover:text-accent hover:border-accent xl:accent-underline xl:hover:accent-underline-shown xl:focus-visible:accent-underline-shown" href={url} key={label} rel="me noopener noreferrer" target="_blank" variants={fadeUp(0, 12)} {...umamiEvent(UmamiEvents.socialLink, { platform: label, location: 'home-footer' })}>
          {label}
        </MotionLink>
      ))}
    </motion.nav>
  </motion.footer>
);
