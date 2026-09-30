import { clsx } from 'clsx';
import type { FC } from 'react';

interface Props {
  className?: string;
  label?: string;
}

export const Spinner: FC<Props> = ({ className, label = 'Loading' }) => (
  <output
    aria-label={label}
    className={clsx(
      'block size-10 rounded-full border-4 border-solid border-accent-light border-t-accent animate-spin motion-reduce:animate-pulse',
      className
    )}
  />
);
