import { ArrowRightIcon } from '@components/icons/ArrowRightIcon';
import { drawLine, fadeUp, REVEAL_VIEWPORT, staggerChildren } from '@components/motion/variants';
import { umamiEvent, UmamiEvents } from '@core/analytics/events';
import { padNumber } from '@core/utils/number';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export interface EscapeLink {
  description: string;
  href: string;
  label: string;
}

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  links: EscapeLink[];
}

export const NotFoundEscapeLinks: FC<Props> = ({ links, className, ...props }) => (
  <section className={clsx('flex flex-col', className)} {...props}>
    <motion.div className="pt-5.5 xl:pt-7.5 px-5 xl:px-10 pb-5 xl:pb-2.5 flex flex-row items-baseline gap-4" initial="hidden" variants={staggerChildren(0.1)} viewport={REVEAL_VIEWPORT} whileInView="shown">
      <motion.h2 className="font-title font-black text-sm xl:text-[15px] tracking-[0.2em] uppercase text-accent" variants={fadeUp(0, 12)}>
        Try one of these
      </motion.h2>
      <motion.hr className="hidden xl:block grow h-px border-border origin-left" variants={drawLine} />
    </motion.div>
    <ul className="grow flex flex-col">
      {links.map(({ href, label, description }, index) => (
        <motion.li className="flex grow border-t xl:border-t-0 not-last:xl:border-b border-solid border-border" initial="hidden" key={href} variants={fadeUp(index * 0.1, 32)} viewport={REVEAL_VIEWPORT} whileInView="shown">
          <Link className="group min-h-41.75 xl:min-h-48.5 grow text-text pt-4 xl:pt-5 pb-4 px-5 xl:px-10 flex flex-row items-center gap-4 xl:gap-7.5 transition-colors duration-200 ease-out hover:bg-background-light" href={href} {...umamiEvent(UmamiEvents.notFoundLink, { destination: href })}>
            <span className="font-title font-black text-[15px] xl:text-[20px] text-accent w-7.5 xl:w-15 shrink-0">
              {padNumber(index + 1)}
            </span>
            <div className="grow flex flex-col gap-1.25 xl:gap-1.5">
              <h3 className="font-title font-black text-[32px] xl:text-[50px] leading-[0.95] xl:leading-[0.92] tracking-[-0.035em] xl:tracking-[-0.04em] uppercase transition-colors duration-200 ease-out group-hover:text-accent">
                {label}
              </h3>
              <p className="text-sm xl:text-[16px] font-light leading-normal text-lighter">
                {description}
              </p>
            </div>
            <span aria-hidden="true" className="shrink-0 font-title font-black text-[26px] xl:text-[34px] text-accent transition-transform duration-200 ease-out group-hover:translate-x-1">
              <ArrowRightIcon />
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  </section>
);
