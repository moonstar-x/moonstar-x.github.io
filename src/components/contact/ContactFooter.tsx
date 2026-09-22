import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'footer'> {
  blurb: string;
}

export const ContactFooter: FC<Props> = ({ blurb, className, ...props }) => (
  <footer className={clsx('border-t border-solid border-border py-5.5 px-10 flex items-center justify-between text-sm font-normal text-muted', className)} {...props}>
    <p>
      {blurb}
    </p>

    <Link className="tracking-widest uppercase border-transparent border-solid border-b hover:border-muted" href={RouteDefs.home}>
      ← Back home
    </Link>
  </footer>
);
