import React from 'react';
import clsx from 'clsx';

export type Color = 'primary';
const colorMap: Record<Color, string> = {
  primary: 'bg-primary text-white'
};

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  color?: Color
  pill?: boolean
}

export const Badge: React.FC<Props> = ({
  className,
  color = 'primary',
  pill = false,
  ...props
}) => {
  const colorClassName = colorMap[color];

  return (
    <span
      className={
        clsx(
          'py-[0.35rem] px-[0.65rem] font-[400] text-[0.75em] text-center whitespace-nowrap align-baseline',
          pill ? 'rounded-[50rem]' : 'rounded-[0.375rem]',
          colorClassName, className
        )
      }
      {...props}
    />
  );
};
