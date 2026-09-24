import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

type Props = Omit<ComponentProps<'section'>, 'children'>;

export const NotFoundHero: FC<Props> = ({ className, ...props }) => (
  <section className={clsx('pt-14.5 px-10 pb-7.5 flex flex-row gap-12 items-start', className)} {...props}>
    <span className="shrink-0 font-title font-black text-[300px] leading-[0.74] tracking-[-0.07em] text-accent">
      404
    </span>
    <div className="grow pt-2.5 flex flex-col gap-5.5">
      <h1 className="m-0 font-title font-black text-[84px] leading-[0.84] tracking-tighter uppercase">
        This page doesn't exist.
      </h1>
      <p className="m-0 text-[20px] font-light leading-[1.55] max-w-[40ch] text-light">
        Either the link is broken, the page moved, or it was never here in the first place. No harm done — here's where everything actually lives.
      </p>
    </div>
  </section>
);
