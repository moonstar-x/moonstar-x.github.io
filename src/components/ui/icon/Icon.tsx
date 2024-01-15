import React, { SVGProps } from 'react';
import clsx from 'clsx';

export type IconComponent = React.JSXElementConstructor<SVGProps<SVGSVGElement>>;

export type Size = 'sm' | 'md' | '1x' | '2x';
const sizeMap: Record<Size, number | string> = {
  sm: 20,
  md: 40,
  '1x': '1em',
  '2x': '2em'
};

export type Color = 'primary' | 'black' | 'white';
const colorMap: Record<Color, string> = {
  primary: 'fill-primary',
  black: 'fill-black',
  white: 'fill-white'
};

export interface Props extends SVGProps<SVGSVGElement> {
  icon: IconComponent
  size?: Size
  color?: Color
}

export const Icon: React.FC<Props> = ({
  icon,
  className,
  size = 'sm',
  color = 'black',
  ...props
}) => {
  const IconComponent = icon;
  const dimensions = sizeMap[size];
  const colorClassName = colorMap[color];

  return (
    <IconComponent
      className={clsx(colorClassName, className)}
      width={dimensions}
      height={dimensions}
      {...props}
    />
  );
};
