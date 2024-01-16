import React from 'react';
import clsx from 'clsx';

export interface Props extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {

}

// TODO: Implement component.
export const Table: React.FC<Props> = ({ className, ...props }) => {
  return (
    <table className={clsx(className)} {...props} />
  );
};
