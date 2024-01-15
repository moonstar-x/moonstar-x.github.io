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

export const SingleContainer: React.FC<Props> = ({ className, origin, distance, duration, ...props }) => {
  const animationProps = resolveAnimation(origin, distance, duration);

  return (
    <motion.div
      className={clsx('page-container', className)}
      {...animationProps}
      {...props}
    />
  );
};
