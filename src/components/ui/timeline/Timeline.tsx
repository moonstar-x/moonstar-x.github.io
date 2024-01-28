import React from 'react';
import { TimelineItem } from './TimelineItem';
import { TimelineOrigin } from './TimelineOrigin';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

type Component = React.FC<Props> & {
  Item: typeof TimelineItem
  Origin: typeof TimelineOrigin
}

export const Timeline: Component = ({ children, ...props }) => {
  return (
    <section {...props}>
      <div className="border-l-[2px] border-gray-500 border-dashed ml-[10px]">
        {children}
      </div>
    </section>
  );
};

Timeline.Item = TimelineItem;
Timeline.Origin = TimelineOrigin;
