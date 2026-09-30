'use client';
import { fadeUp, TAP_SCALE } from '@components/motion/variants';
import { umamiEvent, UmamiEvents } from '@core/analytics/events';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

interface Props {
  email: string;
}

const RESET_DELAY_MS = 2000;

export const CopyEmailButton: FC<Props> = ({ email }: Props) => {
  const [status, setStatus] = useState<'copied' | 'failed' | 'idle'>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => (): void => clearTimeout(timeoutRef.current), []);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus('idle'), RESET_DELAY_MS);
  };

  const handleClick = (): void => {
    void copy();
  };

  return (
    <motion.button
      className="shrink-0 font-title font-bold text-[16px] xl:text-[17px] tracking-[0.06em] uppercase border-2 border-background text-background pt-4.25 xl:pt-4.5 pb-3.25 xl:pb-3.75 px-6 xl:px-8 text-center cursor-pointer transition-colors duration-200 ease-out hover:bg-background hover:text-text"
      type="button"
      variants={fadeUp()}
      {...umamiEvent(UmamiEvents.copyEmail)}
      whileTap={TAP_SCALE}
      onClick={handleClick}
    >
      {status === 'copied' && 'Copied!'}
      {status === 'failed' && 'Copy failed'}
      {status === 'idle' && 'Copy email'}
      <output className="sr-only">
        {status === 'copied' ? 'Email copied to clipboard' : ''}
      </output>
    </motion.button>
  );
};
