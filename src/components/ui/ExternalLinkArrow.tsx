import { clsx } from 'clsx';
import { Fragment } from 'react';
import type { ComponentProps, FC } from 'react';

type Props = Omit<ComponentProps<'span'>, 'aria-hidden' | 'children'>;

export const ExternalLinkArrow: FC<Props> = ({ className, ...props }) => (
  <Fragment>
    <span aria-hidden="true" className={clsx('inline-block', className)} {...props}>
      ↗
    </span>
    <span className="sr-only">
      {' '}
      (external link)
    </span>
  </Fragment>
);
