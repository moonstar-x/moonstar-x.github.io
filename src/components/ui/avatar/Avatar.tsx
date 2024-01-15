import React from 'react';
import clsx from 'clsx';
import { Image, ImageProps } from '@components/ui/image';

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const sizeMap: Record<Size, number> = {
  xxs: 20,
  xs: 30,
  sm: 40,
  md: 50,
  lg: 75,
  xl: 100
};

export interface Props extends ImageProps {
  size?: Size
  circle?: boolean
}

export const Avatar: React.FC<Props> = ({
  className,
  size = 'sm',
  circle = false,
  ...props
}) => {
  const dimensions = sizeMap[size];

  return (
    <Image
      className={clsx(circle && 'rounded-[50%]', className)}
      width={dimensions}
      height={dimensions}
      {...props}
    />
  );
};
