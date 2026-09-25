import { padNumber } from '@core/utils/number';
import { clsx } from 'clsx';
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
    <div className="pt-7.5 px-10 pb-2.5 flex flex-row items-baseline gap-4">
      <h2 className="font-title font-black text-[15px] tracking-[0.2em] uppercase text-accent">
        Try one of these
      </h2>
      <hr className="grow h-px border-border" />
    </div>
    <div className="grow flex flex-col">
      {links.map(({ href, label, description }, index) => (
        <Link className="min-h-48.5 grow text-text pt-5 pb-4 px-10 border-b border-solid border-border flex flex-row items-center gap-7.5" href={href} key={href}>
          <span className="font-title font-black text-[20px] text-accent w-15 shrink-0">
            {padNumber(index + 1)}
          </span>
          <div className="grow flex flex-col gap-1.5">
            <h3 className="font-title font-black text-[50px] leading-[0.92] tracking-[-0.04em] uppercase">
              {label}
            </h3>
            <p className="text-[16px] font-light leading-normal text-lighter">
              {description}
            </p>
          </div>
          <span className="shrink-0 font-title font-black text-[34px] text-accent">
            ↗
          </span>
        </Link>
      ))}
    </div>
  </section>
);
