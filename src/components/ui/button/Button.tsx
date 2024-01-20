import React from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import clsx from 'clsx';
import './styles.css';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & NextLinkProps;

export type Color = 'primary' | 'white';
const colorMap: Record<Color, string> = {
  primary: 'bg-primary text-white',
  white: 'bg-white text-primary'
};

export type Size = 'sm' | 'md';
const sizeMap: Record<Size, string> = {
  sm: 'px-[16px] py-[5px]',
  md: 'px-[24px] py-[10px]'
};

type CommonProps = {
  className?: string
  children?: React.ReactNode
  color?: Color
  size?: Size
  icon?: React.ReactNode
};

export type Props = CommonProps & (
  (ButtonProps & {
    href?: never
  }) | (LinkProps & {
    href: string
  })
);

export const Button: React.FC<Props> = ({
  href,
  className,
  color = 'primary',
  size = 'md',
  icon,
  children,
  ...props
}) => {
  const colorClassName = colorMap[color];
  const sizeClassName = sizeMap[size];
  const buttonClassName = 'btn w-auto h-auto inline-flex flex-row justify-start items-center gap-[1rem] typography-button rounded-[4px] border-none default-transition btn-shadow hover:brightness-110';

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(buttonClassName, colorClassName, sizeClassName, className)}
        {...props as Omit<NextLinkProps, 'href'>}
      >
        {icon}

        <span>
          {children}
        </span>
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
