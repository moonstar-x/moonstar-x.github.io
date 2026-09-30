import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'footer'>, 'children'> {
  blurb: string;
}

export const ContactFooter: FC<Props> = ({ blurb, className, ...props }) => (
  <footer className={clsx('border-t border-solid border-border py-5 xl:py-5.5 px-5 xl:px-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-0 text-[13px] xl:text-sm font-normal text-muted', className)} {...props}>
    <Link className="group tracking-widest uppercase transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.home}>
      <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1">
        ←
      </span>
      {' '}
      <span className="inline-block accent-underline group-hover:accent-underline-shown group-focus-visible:accent-underline-shown'">
        Back home
      </span>
    </Link>
    <p>
      {blurb}
    </p>
  </footer>
);
