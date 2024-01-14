import React, { SVGProps } from 'react';
import clsx from 'clsx';

export type IconComponent = React.JSXElementConstructor<SVGProps<SVGSVGElement>>;

export type IconSize = 'sm' | 'md' | '1x' | '2x';
const sizeMap: Record<IconSize, number | string> = {
  sm: 20,
  md: 40,
  '1x': '1em',
  '2x': '2em'
};

export type IconColor = 'primary' | 'black' | 'white';
const colorMap: Record<IconColor, string> = {
  primary: 'fill-primary',
  black: 'fill-black',
  white: 'fill-white'
};

interface Props extends SVGProps<SVGSVGElement> {
  icon: IconComponent
  size?: IconSize
  color?: IconColor
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