import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  count: number;
  title: string;
}

export const WorkListTitle: FC<Props> = ({ title, count, className, ...props }) => (
  <div className={clsx('flex flex-row align-baseline gap-3.5', className)} {...props}>
    <h2 className="font-title font-black text-[15px] tracking-[0.2em] uppercase text-accent">
      {title}
    </h2>
    <div className="grow border-b border-solid h-3.75 border-border" />
    <span className="text-sm text-muted">
      {count === 1 ? '1 project' : `${count.toString()} projects`}
    </span>
  </div>
);
