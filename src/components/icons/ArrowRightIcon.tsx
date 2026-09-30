import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

export const ArrowRightIcon: FC<ComponentProps<'svg'>> = ({ className, ...props }) => (
  <svg
    aria-hidden="true"
    className={clsx('inline-block align-[-0.1em]', className)}
    fill="none"
    height="0.9em"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    width="0.9em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 12h16M13 5l7 7-7 7" />
  </svg>
);
