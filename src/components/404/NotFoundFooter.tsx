import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

const LINK_CLASS_NAME = 'accent-underline transition-colors duration-200 ease-out hover:text-accent hover:accent-underline-shown focus-visible:accent-underline-shown';

export interface FooterLink {
  label: string;
  url: string;
}

interface Props extends Omit<ComponentProps<'footer'>, 'children'> {
  links: FooterLink[];
}

export const NotFoundFooter: FC<Props> = ({ links, className, ...props }) => (
  <footer className={clsx('py-5.5 xl:py-7 px-5 xl:px-10 flex flex-col xl:flex-row gap-3.5 xl:gap-0 items-start xl:items-center justify-between border-t border-solid border-border', className)} {...props}>
    <Link className="xl:-mb-2 group font-title font-black text-[36px] xl:text-[44px] tracking-[-0.045em] uppercase transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.home}>
      <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1">
        ←
      </span>
      {' '}
      Back home
    </Link>
    <div className="flex gap-4 xl:gap-5.5 text-xs xl:text-[13px] font-medium tracking-widest uppercase">
      {links.map(({ label, url }) => (
        <Link className={LINK_CLASS_NAME} href={url} key={url}>
          {label}
        </Link>
      ))}
    </div>
  </footer>
);
