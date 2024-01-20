'use client';
import React, { Fragment, useState } from 'react';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { NavBrand } from './NavBrand';
import { MobileNavLink } from './MobileNavLink';
import { Footer } from '@components/ui/footer';
import { useDisableBodyScroll } from '@components/hooks/useDisableBodyScroll';
import { Settings, Socials } from '@lib/services/data';

type BrandSettings = Settings['brand'];

interface Props {
  className?: string
  brand: BrandSettings
  brandHref: string
  links: Record<string, string>
  socials: Socials
  owner: string
}

export const MobileHeader: React.FC<Props> = ({ className, brand, brandHref, links, socials, owner }) => {
  const [open, setOpen] = useState<boolean>(false);
  useDisableBodyScroll(open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <nav className={clsx('fixed w-full h-[50px] border-b border-solid border-transparent-4 z-20 bg-white', className)}>
        <div className="page-container h-full flex flex-row items-center">
          <div className="flex-1 h-full flex flex-row items-center">
            <NavBrand brand={brand} href={brandHref} onClick={handleClose} />
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

      <AnimatePresence>
        {
          open && (
            <motion.div
              className={clsx('fixed w-full h-full transition-none')}
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
            >
              <div className="w-full h-full pt-[50px] bg-white flex flex-col">
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="flex flex-col gap-[1.5rem]">
                    {
                      Object.entries(links).map(([href, text], idx) => (
                        <li key={idx}>
                          <MobileNavLink href={href} text={text} onClick={handleClose} />
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <Footer socials={socials} owner={owner} color="light" onSignatureClick={handleClose} compact />
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </Fragment>
  );
};
