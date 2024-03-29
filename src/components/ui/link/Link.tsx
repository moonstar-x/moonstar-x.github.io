import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import clsx from 'clsx';

export type Color = 'primary' | 'black' | 'white';
const colorMap: Record<Color, string> = {
  primary: 'text-primary',
  black: 'text-black',
  white: 'text-white'
};

export interface Props extends LinkProps {
  color?: Color
  withUnderline?: boolean
  withOpacity?: boolean
  className?: string
  children?: React.ReactNode
  target?: string
  href: string
}

export const Link: React.FC<Props> = ({
  color = 'black',
  withUnderline = false,
  withOpacity = false,
  className,
  children,
  href,
  target,
  ...props
}) => {
  const colorClassName = colorMap[color];

  return (
    <NextLink
      className={clsx(
        withUnderline && 'hover:underline hover:underline-offset-1',
        withOpacity && 'opacity-50 hover:opacity-100',
        colorClassName,
        className
      )}
      href={href}
      target={target ?? href?.startsWith('http') ? '_blank' : '_self'}
      {...props}
    >
      {children}
    </NextLink>
  );
};
