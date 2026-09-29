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
  <footer className={clsx('bg-text text-background py-5.5 xl:py-6.5 px-5 xl:px-10 flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between', className)} {...props}>
    <div className="-mb-1.5">
      <Link className="font-title font-black text-[34px] xl:text-[40px] tracking-[-0.04em] uppercase border-solid" href={RouteDefs.contact}>
        Let's connect →
      </Link>
    </div>

    <nav className="flex flex-row gap-4.5 xl:gap-5.5 text-xs xl:text-sm font-medium tracking-widest uppercase">
      {links.map(({ url, label }) => (
        <Link href={url} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  </footer>
);
