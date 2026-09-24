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

export const NotFoundFooter: FC<Props> = ({ links, className, ...props }) => (
  <footer className={clsx('py-7 px-10 flex flex-row items-center justify-between border-t border-solid border-border', className)} {...props}>
    <Link className="font-title font-black text-[44px] tracking-[-0.045em] uppercase" href={RouteDefs.home}>
      ← Back home
    </Link>
    <div className="flex gap-5.5 text-[13px] font-medium tracking-widest uppercase">
      {links.map(({ label, url }) => (
        <Link href={url} key={url}>
          {label}
        </Link>
      ))}
    </div>
  </footer>
);
