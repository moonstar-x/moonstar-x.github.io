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
  <footer className={clsx('py-8.5 px-10 flex flex-row items-center justify-between', className)} {...props}>
    <div className="flex flex-col gap-2 -mb-2">
      <span className="text-sm font-medium tracking-[0.16em] uppercase text-muted">
        Nice to meet you
      </span>
      <Link className="font-title font-black text-[56px] tracking-[-0.045em] uppercase hover:text-accent" href={RouteDefs.contact}>
        Let's connect →
      </Link>
    </div>

    <nav className="flex flex-row gap-5.5 text-sm font-medium tracking-widest uppercase">
      {links.map(({ url, label }) => (
        <Link className="text-sm font-medium tracking-widest uppercase hover:text-accent" href={url} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  </footer>
);
