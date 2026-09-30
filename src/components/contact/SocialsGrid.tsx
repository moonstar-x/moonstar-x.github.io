import { fadeUp, REVEAL_VIEWPORT } from '@components/motion/variants';
import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
import * as motion from 'framer-motion/client';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export interface SocialLink {
  label: string;
  url: string;
}

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  socials: SocialLink[];
}

export const SocialsGrid: FC<Props> = ({ socials, className, ...props }) => (
  <section className={clsx('grow', className)} {...props}>
    <ul className="h-full grid grid-cols-1 xl:grid-cols-3 auto-rows-fr">
      {socials.map(({ label, url }, index) => (
        <motion.li className="flex border-solid border-border border-x border-b xl:border-l-0 xl:nth-[3n+1]:border-l" initial="hidden" key={label} variants={fadeUp(index * 0.1, 32)} viewport={REVEAL_VIEWPORT} whileInView="shown">
          <Link className="group grow xl:min-h-64 text-text p-5 xl:p-7 flex flex-row justify-between gap-3.5 xl:gap-0 transition-colors duration-200 ease-out hover:bg-background-light" href={url}>
            <div className="flex flex-col justify-between">
              <h2 className="font-title font-black text-[28px] xl:text-[36px] tracking-[-0.035em] uppercase transition-colors duration-200 ease-out group-hover:text-accent">
                {label}
              </h2>
              <span className="text-sm xl:text-[15px] font-light text-lighter">
                {simplifyUrl(url)}
              </span>
            </div>
            <span className="text-[24px] xl:text-[26px] text-accent self-center xl:self-end transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  </section>
);
