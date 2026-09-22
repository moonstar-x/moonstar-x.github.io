import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'section'> {
  email: string;
}

export const EmailRow: FC<Props> = ({ email, className, ...props }: Props) => (
  <section className={clsx('bg-text text-background py-8.5 px-10 flex flex-row items-center justify-between gap-10', className)} {...props}>
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold tracking-[0.16em] uppercase text-dark">
        Email — the fastest way
      </span>
      <span className="font-title font-black text-[44px] tracking-tighter text-background uppercase">
        {email}
      </span>
    </div>

    <Link className="shrink-0 font-title font-bold text-[17px] tracking-[0.06em] uppercase bg-accent text-background pt-4.5 pb-3.75 px-8" href={`mailto:${email}`}>
      Write to me →
    </Link>
  </section>
);
