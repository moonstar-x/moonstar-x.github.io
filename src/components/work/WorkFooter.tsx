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

export const WorkFooter: FC<Props> = ({ links, className, ...props }) => (
  <footer className={clsx('bg-text text-background py-6.5 px-10 flex flex-row items-center justify-between', className)} {...props}>
    <div className="-mb-1.5">
      <Link className="font-title font-black text-[40px] tracking-[-0.04em] uppercase border-solid border-b-2 border-transparent hover:border-accent" href={RouteDefs.contact}>
        Let's connect →
      </Link>
    </div>

    <nav className="flex flex-row gap-5.5 text-sm font-medium tracking-widest uppercase">
      {links.map(({ url, label }) => (
        <Link className="border-solid border-b-2 border-transparent hover:border-accent" href={url} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  </footer>
);
