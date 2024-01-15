import React from 'react';
import Link from 'next/link';

interface Props {
  href: string
  children?: React.ReactNode
}

export const NavBrand: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} className="typography-h6 !font-[500] text-primary opacity-100 hover:opacity-75 default-transition">
      {children}
    </Link>
  );
};
