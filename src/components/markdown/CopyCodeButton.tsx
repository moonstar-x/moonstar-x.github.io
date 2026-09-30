'use client';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

interface Props {
  code: string;
}

const RESET_DELAY_MS = 2000;

export const CopyCodeButton: FC<Props> = ({ code }: Props) => {
  const [status, setStatus] = useState<'copied' | 'failed' | 'idle'>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => (): void => clearTimeout(timeoutRef.current), []);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
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
    <button
      className="font-code text-[11px] tracking-widest uppercase text-accent-light cursor-pointer transition-colors duration-200 ease-out hover:text-background"
      type="button"
      onClick={handleClick}
    >
      {status === 'copied' && 'Copied!'}
      {status === 'failed' && 'Copy failed'}
      {status === 'idle' && 'Copy'}
      <output className="sr-only">
        {status === 'copied' ? 'Code copied to clipboard' : ''}
      </output>
    </button>
  );
};
