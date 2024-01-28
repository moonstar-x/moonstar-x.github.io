import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> {

}

export const Blockquote: React.FC<Props> = ({ className, ...props }) => {
  return (
    <blockquote className={clsx('bg-gray-200 rounded-[4px] px-[1rem] py-[0.25rem] border-l-[0.25rem] border-solid border-primary text-gray-600', className)} {...props} />
  );
};
