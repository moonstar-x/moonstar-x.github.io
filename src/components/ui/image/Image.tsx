import React from 'react';
import NextImage, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'alt'> {
  alt?: string
}

// TODO: Add styling to this component. (Border, Background...)
// TODO: Remove hardcoded string from alt prop.
export const Image: React.FC<Props> = ({
  alt = 'Image with no description.',
  width = 2000,
  height = 0,
  ...props
}) => {
  return (
    <NextImage alt={alt} width={width} height={height} {...props} />
  );
};
