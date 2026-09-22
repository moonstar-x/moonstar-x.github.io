'use client';
import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

export interface NavbarLink {
  accented?: boolean;
  href: string;
  label: string;
}

interface Props extends ComponentProps<'header'> {
  links: NavbarLink[];
  title: string;
}

export const Navbar: FC<Props> = ({ title, links, className, ...props }) => {
  const pathname = usePathname();

  return (
    <header className={clsx('px-10 pt-5.5 pb-5 flex flex-row gap-4 items-center justify-between border-b border-solid border-border', className)} {...props}>
      <Link className="font-black font-title text-lg" href={RouteDefs.home}>
        {title}
      </Link>

      <nav className="flex flex-row gap-7.5">
        {links.map(({ href, label, accented }) => (
          <Link className={clsx('pb-0.5 text-sm font-medium tracking-widest uppercase hover:text-accent', Boolean(accented) && 'text-accent', href !== RouteDefs.home && pathname.startsWith(href) && 'border-b-2 border-solid border-accent')} href={href} key={label}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
