import React from 'react';
import clsx from 'clsx';

interface Props {
  className?: string
}

export const MobileHeader: React.FC<Props> = ({ className }) => {
  return (
    <nav className={clsx(className)}>
      MobileHeader
    </nav>
  );
};
