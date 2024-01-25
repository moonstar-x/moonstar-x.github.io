import React from 'react';
import clsx from 'clsx';
import { DoubleContainerSide } from './DoubleContainerSide';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

type Component = React.FC<Props> & {
  Side: typeof DoubleContainerSide
};

export const DoubleContainer: Component = ({ className, ...props }) => {
  return (
    <div
      className={clsx('page-container w-full h-full flex flex-col tablet:flex-row gap-[2rem]', className)}
      {...props}
    />
  );
};

DoubleContainer.Side = DoubleContainerSide;
