import { simplifyUrl } from '@core/utils/string';
import { clsx } from 'clsx';
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
  <section className={clsx('grow grid grid-cols-1 xl:grid-cols-3 auto-rows-fr', className)} {...props}>
    {socials.map(({ label, url }) => (
      <Link className="xl:min-h-64 text-text p-5 xl:p-7 border-solid border-border xl:border-r border-b flex flex-row justify-between gap-3.5 xl:gap-0" href={url} key={label}>
        <div className="flex flex-col justify-between">
          <h2 className="font-title font-black text-[28px] xl:text-[36px] tracking-[-0.035em] uppercase">
            {label}
          </h2>
          <span className="text-sm xl:text-[15px] font-light text-lighter">
            {simplifyUrl(url)}
          </span>
        </div>
        <span className="text-[24px] xl:text-[26px] text-accent self-center xl:self-end">
          ↗
        </span>
      </Link>
    ))}
  </section>
);
