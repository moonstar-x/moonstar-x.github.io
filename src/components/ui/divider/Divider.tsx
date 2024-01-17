import React from 'react';
import clsx from 'clsx';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'> {

}
export const Divider: React.FC<Props> = ({ className, ...props }) => {
  return (
    <hr className={clsx('text-lightGray my-[2rem]', className)} {...props} />
  );
};
