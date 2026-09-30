'use client';
import { MotionConfig } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MotionProvider: FC<Props> = ({ children }) => (
  <MotionConfig reducedMotion="user">
    {children}
  </MotionConfig>
);
