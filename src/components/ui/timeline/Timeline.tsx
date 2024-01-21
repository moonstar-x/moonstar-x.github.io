import React from 'react';
import clsx from 'clsx';
import { TimelineItem } from './TimelineItem';
import { TimelineOrigin } from './TimelineOrigin';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

type Component = React.FC<Props> & {
  Item: typeof TimelineItem
  Origin: typeof TimelineOrigin
}

export const Timeline: Component = ({ className, ...props }) => {
  return (
    <section
      className={clsx('border-l-[2px] border-gray-500 border-dashed', className)}
      {...props}
    />
  );
};

Timeline.Item = TimelineItem;
Timeline.Origin = TimelineOrigin;
