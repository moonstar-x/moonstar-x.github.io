import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'div'> {
  items: Array<ContentMetadata<WorkMetadata>>;
}

export const ResearchWorkList: FC<Props> = ({ items, className, ...props }) => (
  <div className={clsx(className)} {...props}>Research</div>
);
