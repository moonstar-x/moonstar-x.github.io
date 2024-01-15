import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { resolveAnimation, Origin } from '@components/ui/hero/animations';

type DivProps = Parameters<typeof motion.div>[0];

interface Props extends DivProps {
  origin?: Origin
  distance?: number
  duration?: number
}

export const DoubleContainerSide: React.FC<Props> = ({ className, children, origin, distance, duration, ...props }) => {
  const animationProps = resolveAnimation(origin, distance, duration);

  return (
    <motion.div
      className={clsx('basis-1/2', !children && 'hidden desktop:block', className)}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};
