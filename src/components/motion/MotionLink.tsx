'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ComponentProps } from 'react';

type MotionLinkComponent = ReturnType<typeof motion.create<ComponentProps<typeof Link>, string>>;

export const MotionLink: MotionLinkComponent = motion.create(Link);
