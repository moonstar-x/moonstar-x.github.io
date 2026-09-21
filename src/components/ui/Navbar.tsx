import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

export interface NavbarLink {
  accented?: boolean;
  href: string;
  label: string;
}

interface Props {
  links: NavbarLink[];
  title: string;
}

export const Navbar: FC<Props> = ({ title, links }) => (
  <header className="px-10 py-5.5 flex flex-row gap-4 items-center justify-between border-b border-solid border-border">
    <Link className="font-black font-title text-lg" href={RouteDefs.home}>
      {title}
    </Link>

    <nav className="flex flex-row gap-7.5">
      {links.map(({ href, label, accented }) => (
        <Link className={clsx('text-sm font-medium tracking-widest uppercase', Boolean(accented) && 'text-accent')} href={href} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  </header>
);
