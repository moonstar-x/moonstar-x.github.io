import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> {

}

// TODO: Implement component.
export const Blockquote: React.FC<Props> = ({ className, ...props }) => {
  return (
    <blockquote className={clsx(className)} {...props} />
  );
};
