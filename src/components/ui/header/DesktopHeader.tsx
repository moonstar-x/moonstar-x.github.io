import React from 'react';
import clsx from 'clsx';
import { NavBrand } from './NavBrand';
import { DesktopNavLink } from './DesktopNavLink';
import { Settings } from '@lib/services/data';

type BrandSettings = Settings['brand'];

interface Props {
  className?: string
  brand: BrandSettings
  brandHref: string
  links: Record<string, string>
}

export const DesktopHeader: React.FC<Props> = ({ className, brand, brandHref, links }) => {
  return (
    <nav className={clsx('fixed w-full h-[50px] border-b border-solid border-transparent-4 z-20 bg-white', className)}>
      <div className="page-container h-full flex flex-row items-center">
        <div className="w-[20%] h-full flex items-center">
          <NavBrand brand={brand} href={brandHref} />
        </div>

        <div className="w-[60%] h-full flex items-center">
          <ul className="w-full flex flex-row gap-[1rem] justify-evenly">
            {
              Object.entries(links).map(([href, text], idx) => (
                <li key={idx}>
                  <DesktopNavLink href={href} text={text} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
