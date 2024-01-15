import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Avatar } from '@components/ui/avatar';
import { Settings } from '@lib/services/data';

type BrandSettings = Settings['brand'];

interface Props {
  brand: BrandSettings
  href: string
  onClick?: () => void
}

export const NavBrand: React.FC<Props> = ({ brand, href, onClick }) => {
  const hoverClassName = brand.image ? 'hover:opacity-90' : 'hover:opacity-75';

  return (
    <Link href={href} className={clsx('typography-h6 !font-[500] text-primary opacity-100', hoverClassName)} onClick={onClick}>
      {
        brand.image ? (
          <Avatar src={brand.value} size="xs" circle />
        ) : brand.value
      }
    </Link>
  );
};
