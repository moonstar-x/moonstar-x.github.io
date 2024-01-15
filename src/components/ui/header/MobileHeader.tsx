'use client';
import React, { Fragment, useState } from 'react';
import Hamburger from 'hamburger-react';
import clsx from 'clsx';
import { NavBrand } from './NavBrand';
import { MobileNavLink } from './MobileNavLink';
import { Footer } from '@components/ui/footer';
import { useDisableBodyScroll } from '@components/hooks/useDisableBodyScroll';
import { Socials } from '@lib/services/data';

interface Props {
  className?: string
  brand: string
  brandHref: string
  links: Record<string, string>
  socials: Socials
  owner: string
}

export const MobileHeader: React.FC<Props> = ({ className, brand, brandHref, links, socials, owner }) => {
  const [open, setOpen] = useState<boolean>(false);
  useDisableBodyScroll(open);

  return (
    <Fragment>
      <nav className={clsx('fixed w-full h-[50px] border-b border-solid border-transparent-4 z-20 bg-white', className)}>
        <div className="page-container h-full flex flex-row items-center">
          <div className="flex-1 h-full flex flex-row items-center">
            <NavBrand href={brandHref}>
              {brand}
            </NavBrand>
          </div>

          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={20}
            duration={0.3}
            direction="left"
          />
        </div>
      </nav>

      {
        open && (
          <div className={clsx('fixed w-full h-full z-18', open ? 'opacity-100' : 'opacity-0')}>
            <div className="w-full h-full pt-[50px] bg-white flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <ul className="flex flex-col gap-[1.5rem]">
                  {
                    Object.entries(links).map(([href, text], idx) => (
                      <li key={idx}>
                        <MobileNavLink href={href} text={text} />
                      </li>
                    ))
                  }
                </ul>
              </div>

              <Footer socials={socials} owner={owner} color="light" />
            </div>
          </div>
        )
      }
    </Fragment>
  );
};
