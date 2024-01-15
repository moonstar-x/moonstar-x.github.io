import React from 'react';
import Link from 'next/link';

interface Props {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

export const NavBrand: React.FC<Props> = ({ href, children, onClick }) => {
  return (
    <Link href={href} className="typography-h6 !font-[500] text-primary opacity-100 hover:opacity-75" onClick={onClick}>
      {children}
    </Link>
  );
};
