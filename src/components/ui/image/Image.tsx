import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import clsx from 'clsx';
import { str } from '@lib/services/strings';

export interface Props extends Omit<ImageProps, 'alt'> {
  alt?: string
}

export const Image: React.FC<Props> = ({
  alt = str('ui.image.default_alt'),
  width = 2000,
  height = 2000 * (9 / 16),
  loading = 'lazy',
  className,
  ...props
}) => {
  return (
    <NextImage
      className={clsx('rounded-[6px] bg-gray-300 object-cover', className)}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      {...props}
    />
  );
};
