import React from 'react';
import clsx from 'clsx';
import { SingleContainer } from './containers/SingleContainer';
import { DoubleContainer } from './containers/DoubleContainer';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

type Component = React.FC<Props> & {
  Single: typeof SingleContainer
  Double: typeof DoubleContainer
};

export const Hero: Component = ({ className, ...props }) => {
  return (
    <section
      className={clsx('page-container py-[50px] tablet:py-[100px] desktop:py-[150px] [&_*]:transition-none', className)}
      {...props}
    />
  );
};

Hero.Single = SingleContainer;
Hero.Double = DoubleContainer;
