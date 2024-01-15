import React from 'react';
import Link from 'next/link';

interface Props {
  href: string
  text: string
}

export const DesktopNavLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className="typography-body2 text-black opacity-100 hover:opacity-50 default-transition">
      {text}
    </Link>
  );
};
