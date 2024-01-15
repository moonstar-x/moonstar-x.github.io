import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  forceVideoAspect?: boolean
}

export const Video: React.FC<Props> = ({
  forceVideoAspect = true,
  className,
  controls = true,
  ...props
}) => {
  return (
    <video
      className={clsx('rounded-[6px] bg-lightGray object-cover', forceVideoAspect && 'aspect-video', className)}
      controls={controls}
      {...props}
    />
  );
};
