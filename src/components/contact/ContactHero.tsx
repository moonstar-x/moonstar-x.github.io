import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

type Props = ComponentProps<'section'>;

export const ContactHero: FC<Props> = ({ className, ...props }) => (
  <section className={clsx('pt-14 px-10 pb-10 flex flex-col gap-6', className)} {...props}>
    <span className="text-sm font-medium tracking-[0.02em] uppercase text-accent">
      Nice to meet you
    </span>
    <h1 className="m-0 font-title font-black text-[150px] leading-[0.8] tracking-[-0.06em] uppercase">
      Let's Connect
    </h1>
    <p className="m-0 text-[21px] font-light leading-[1.55] max-w-[52ch] text-light">
      I'm most interested in backend and full-stack work where the data model is the hard part — graphs, pipelines, anything with a schema worth arguing about.
      I read everything and reply within a couple of days.
    </p>
  </section>
);
