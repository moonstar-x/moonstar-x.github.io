import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  count: number;
  title: string;
}

export const WorkListTitle: FC<Props> = ({ title, count, className, ...props }) => (
  <div className={clsx('flex flex-row align-baseline gap-3.5', className)} {...props}>
    <h2 className="font-title font-black text-sm xl:text-[15px] tracking-[0.2em] uppercase text-accent">
      {title}
      <span className="xl:hidden">
        {' '}
        ·
        {' '}
        {count}
      </span>
    </h2>
    <div className="hidden xl:block grow border-b border-solid h-3.75 border-border" />
    <span className="hidden xl:inline-block text-sm text-muted">
      {count === 1 ? '1 project' : `${count.toString()} projects`}
    </span>
  </div>
);
