import React from 'react';

export interface Props {
  date: Date | string
  withTime?: boolean
}

export const Time: React.FC<Props> = ({ date, withTime }) => {
  const dateObj: Date = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if (withTime) {
    return dateObj.toLocaleTimeString('en-US', options);
  }

  return dateObj.toLocaleDateString('en-US', options);
};
