import React from 'react';
import Link from 'next/link';

interface Props {
  href: string
  text: string
}

export const MobileNavLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className="w-100 block px-[1rem] typography-h4 !font-[500] text-black">
      {text}
    </Link>
  );
};
