import { RouteDefs } from '@core/routes/routes';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'footer'>, 'children'> {
  blurb: string;
}

export const ContactFooter: FC<Props> = ({ blurb, className, ...props }) => (
  <footer className={clsx('border-t border-solid border-border py-5 xl:py-5.5 px-5 xl:px-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 xl:gap-0 text-[13px] xl:text-sm font-normal text-muted', className)} {...props}>
    <p>
      {blurb}
    </p>

    <Link className="tracking-widest uppercase border-transparent" href={RouteDefs.home}>
      ← Back home
    </Link>
  </footer>
);
