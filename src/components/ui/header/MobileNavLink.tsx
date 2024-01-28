import React from 'react';
import Link from 'next/link';

interface Props {
  href: string
  text: string
  onClick?: () => void
}

export const MobileNavLink: React.FC<Props> = ({ href, text, onClick }) => {
  return (
    <Link href={href} className="w-100 block px-[1rem] typography-h4 !font-[500] text-black" onClick={onClick}>
      {text}
    </Link>
  );
};
