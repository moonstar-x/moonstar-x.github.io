'use client';
import React, { useState, useEffect } from 'react';
import { parseDatesToFriendlyDuration } from './utils';

export interface Props extends Omit<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'children'> {
  start?: Date | string
  end?: Date | string
}

export const FriendlyDuration: React.FC<Props> = ({ start, end, ...props }) => {
  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    setDuration(parseDatesToFriendlyDuration(start, end) ?? '');
  }, [start, end]);

  return (
    <span {...props}>
      {duration}
    </span>
  );
};
