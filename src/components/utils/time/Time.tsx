import React from 'react';
import { CONTENT_LANG } from '@lib/config';

export interface Props extends React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement> {
  date: Date | string
  withTime?: boolean
  format?: Intl.DateTimeFormatOptions
}

export const Time: React.FC<Props> = ({ date, withTime, format, ...props }) => {
  const dateObj: Date = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = format ?? {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedTime = withTime ?
    dateObj.toLocaleTimeString(CONTENT_LANG, options) :
    dateObj.toLocaleDateString(CONTENT_LANG, options);

  return (
    <time dateTime={dateObj.toISOString()} {...props}>
      {formattedTime}
    </time>
  );
};
