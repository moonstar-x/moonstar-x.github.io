import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement> {
  date: Date | string
  withTime?: boolean
}

export const Time: React.FC<Props> = ({ date, withTime, className, ...props }) => {
  const dateObj: Date = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedTime = withTime ?
    dateObj.toLocaleTimeString('en-US', options) :
    dateObj.toLocaleDateString('en-US', options);

  return (
    <time className={clsx('typography-body1', className)} dateTime={dateObj.toISOString()} {...props}>
      {formattedTime}
    </time>
  );
};
