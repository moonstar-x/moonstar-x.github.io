import React from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import './styles.css';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type Color = 'primary' | 'white';
const colorMap: Record<Color, string> = {
  primary: 'bg-primary text-white',
  white: 'bg-white text-primary'
};

type Size = 'sm' | 'md';
const sizeMap: Record<Size, string> = {
  sm: 'px-[16px] py-[5px]',
  md: 'px-[24px] py-[10px]'
};

type TagUnionProps = (ButtonProps & {
  href: never
}) | (LinkProps & {
  href: string
});

type Props = Omit<TagUnionProps, 'color'> & {
  className?: string
  children?: React.ReactNode
  color?: Color
  size?: Size
  icon?: React.ReactNode
};


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
  const buttonClassName = 'w-auto h-auto inline-flex flex-row justify-start items-center gap-[1rem] typography-button rounded-[4px] border-none default-transition btn-shadow desktop:hover:-translate-y-px';

  if (href) {
    const restOfProps = props as Omit<Exclude<TagUnionProps, { href: never }>, 'href'>;

    return (
      <Link
        href={href}
        className={clsx(buttonClassName, colorClassName, sizeClassName, className)}
        {...restOfProps}
      >
        {icon}

        <span>
          {children}
        </span>
      </Link>
    );
  }

  const restOfProps = props as Extract<TagUnionProps, { href: never }>;

  return (
    <button
      className={clsx(buttonClassName, colorClassName, sizeClassName, className)}
      {...restOfProps}
    >
      {icon}

      <span>
        {children}
      </span>
    </button>
  );
};
