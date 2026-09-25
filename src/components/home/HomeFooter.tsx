import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export interface FooterLink {
  label: string;
  url: string;
}

interface Props extends Omit<ComponentProps<'footer'>, 'children'> {
  links: FooterLink[];
}

export const HomeFooter: FC<Props> = ({ links, className, ...props }) => (
  <footer className={clsx('py-7.5 xl:py-8.5 px-5 xl:px-10 flex flex-col xl:flex-row gap-4 items-center justify-center xl:justify-between', className)} {...props}>
    <div className="flex flex-col gap-3 xl:gap-2 -mb-2">
      <span className="text-xs xl:text-sm font-medium tracking-[0.16em] uppercase text-muted">
        Nice to meet you
      </span>
      <Link className="font-title font-black text-[52px] xl:text-[56px] leading-[0.88] xl:leading-normal tracking-[-0.045em] uppercase" href={RouteDefs.contact}>
        Let's connect →
      </Link>
    </div>

    <nav className="flex flex-row flex-wrap xl:flex-nowrap gap-2 xl:gap-5.5 text-sm font-medium tracking-widest uppercase">
      {links.map(({ url, label }) => (
        <Link className="text-sm font-medium tracking-[0.08em] xl:tracking-widest uppercase border xl:border-0 border-solid border-text py-2.75 xl:py-0 px-4 xl:px-0" href={url} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  </footer>
);
