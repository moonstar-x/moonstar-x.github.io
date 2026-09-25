import { clsx } from 'clsx';
import type { ComponentProps, FC, JSXElementConstructor } from 'react';

export type IconComponent = JSXElementConstructor<ComponentProps<'svg'>>;

export type Size = '1.5x' | '1x' | '2x' | '3x' | 'lg' | 'md' | 'sm';
const sizeMap: Record<Size, number | string> = {
  sm: 20,
  md: 40,
  lg: 60,
  '1x': '1em',
  '1.5x': '1.5em',
  '2x': '2em',
  '3x': '3em'
};

export type Color = 'accent' | 'black' | 'white';
const colorMap: Record<Color, string> = {
  accent: 'fill-accent',
  black: 'fill-black',
  white: 'fill-white'
};

export interface Props extends ComponentProps<'svg'> {
  color?: Color;
  icon: IconComponent;
  size?: Size;
}

export const Icon: FC<Props> = ({ icon, className, size = 'sm', color = 'black', ...props }) => {
  const Component = icon;
  const dimensions = sizeMap[size];
  const colorClassName = colorMap[color];

  return (
    <Component
      className={clsx(colorClassName, className)}
      height={dimensions}
      width={dimensions}
      {...props}
    />
  );
};
