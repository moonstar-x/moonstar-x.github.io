import React from 'react';

export interface Props extends React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement> {
  date: Date | string
  withTime?: boolean
}

export const Time: React.FC<Props> = ({ date, withTime, ...props }) => {
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
    <time dateTime={dateObj.toISOString()} {...props}>
      {formattedTime}
    </time>
  );
};
