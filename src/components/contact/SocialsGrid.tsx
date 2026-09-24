import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export interface SocialLink {
  label: string;
  url: string;
}

interface Props extends ComponentProps<'section'> {
  socials: SocialLink[];
}

export const SocialsGrid: FC<Props> = ({ socials, className, ...props }) => (
  <section className={clsx('grow grid grid-cols-3 auto-rows-fr grid-flat-bottom-3', className)} {...props}>
    {socials.map((item) => (
      <Link className="min-h-64 text-text p-7 border-solid border-border border-r border-b flex flex-col justify-between" href={item.url} key={item.label}>
        <h2 className="font-title font-black text-[36px] tracking-[-0.035em] uppercase">
          {item.label}
        </h2>
        <div className="flex flex-row items-end justify-between">
          <span className="text-[15px] font-light text-lighter">
            {simplifyUrl(item.url)}
          </span>
          <span className="text-[26px] text-accent">
            ↗
          </span>
        </div>
      </Link>
    ))}
  </section>
);
