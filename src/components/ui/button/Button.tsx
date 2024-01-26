import React from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import clsx from 'clsx';
import './styles.css';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & NextLinkProps;

export type Color = 'primary' | 'white' | 'clear';
const colorMap: Record<Color, string> = {
  primary: 'bg-primary text-white',
  white: 'bg-white text-primary',
  clear: 'bg-transparent text-primary hover:bg-gray-300'
};

export type Size = 'sm' | 'md';
const sizeMap: Record<Size, string> = {
  sm: 'px-[16px] py-[5px]',
  md: 'px-[24px] py-[10px]'
};

export type IconPosition = 'left' | 'right';

type CommonProps = {
  className?: string
  children?: React.ReactNode
  color?: Color
  size?: Size
  icon?: React.ReactNode
  iconPosition?: IconPosition
};

export type Props = CommonProps & (
  (ButtonProps & {
    href?: never
    target?: never
  }) | (LinkProps & {
    href: string
    target?: string
  })
);

export const Button: React.FC<Props> = ({
  href,
  target,
  className,
  color = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  ...props
}) => {
  const colorClassName = colorMap[color];
  const sizeClassName = sizeMap[size];
  const buttonClassName = 'btn w-auto h-auto inline-flex flex-row justify-start items-center gap-[0.5rem] typography-button rounded-[4px] border-none default-transition btn-shadow hover:brightness-110';

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(buttonClassName, colorClassName, sizeClassName, className)}
        target={target ?? href.startsWith('http') ? '_blank' : '_self'}
        {...props as Omit<NextLinkProps, 'href'>}
      >
        {
          iconPosition === 'left' && icon
        }

        <span>
          {children}
        </span>

        {
          iconPosition === 'right' && icon
        }
      </Link>
    );
  }

  return (
    <button
      className={clsx(buttonClassName, colorClassName, sizeClassName, className)}
      {...props as ButtonProps}
    >
      {icon}

      <span>
        {children}
      </span>
    </button>
  );
};
