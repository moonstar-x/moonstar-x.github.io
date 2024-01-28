import React from 'react';
import clsx from 'clsx';

export type Color = 'primary';
const colorMap: Record<Color, string> = {
  primary: 'bg-primary text-white'
};

export type Size = 'sm' | 'md';
const sizeMap: Record<Size, string> = {
  sm: 'py-[0.20rem] px-[0.40rem] text-[0.5em]',
  md: 'py-[0.35rem] px-[0.65rem] text-[0.75em]'
};

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  color?: Color
  size?: Size
  pill?: boolean
}

export const Badge: React.FC<Props> = ({
  className,
  color = 'primary',
  size = 'md',
  pill = false,
  ...props
}) => {
  const colorClassName = colorMap[color];
  const sizeClassName = sizeMap[size];

  return (
    <span
      className={
        clsx(
          'font-[400] text-center whitespace-nowrap align-baseline',
          pill ? 'rounded-[50rem]' : 'rounded-[0.375rem]',
          colorClassName,
          sizeClassName,
          className
        )
      }
      {...props}
    />
  );
};
