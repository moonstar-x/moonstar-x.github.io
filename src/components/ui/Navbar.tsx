'use client';
import { BarsIcon } from '@components/icons/BarsIcon';
import { XMarkIcon } from '@components/icons/XMarkIcon';
import { Icon } from '@components/ui/Icon';
import { RouteDefs, RouteHashDefs } from '@core/routes/routes';
import { useDisableBodyScroll } from '@hooks/useDisableBodyScroll';
import { useOnEscapePressed } from '@hooks/useOnEscapePressed';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import type { ComponentProps, FC } from 'react';

const DESKTOP_MEDIA_QUERY = '(min-width: 80rem)';

const LINK_CLASS_NAME = 'accent-underline pb-0.5 text-sm font-medium tracking-widest uppercase transition-colors duration-200 ease-out hover:text-accent';

interface NavbarLink {
  accented?: boolean;
  href: string;
  label: string;
}

const links: NavbarLink[] = [
  {
    label: 'Work',
    href: RouteDefs.work
  },
  {
    label: 'Experience',
    href: `${RouteDefs.home}#${RouteHashDefs.experience}`
  },
  {
    label: "Let's Connect",
    href: RouteDefs.contact,
    accented: true
  }
];

interface Props extends Omit<ComponentProps<'header'>, 'children'> {
  title: string;
}

export const Navbar: FC<Props> = ({ title, className, ...props }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useDisableBodyScroll(open);
  useOnEscapePressed(() => setOpen(false));

  // The drawer is mobile-only, so it must not stay open (and keep the body scroll locked) when the
  // viewport grows past the breakpoint that hides it.
  useEffect(() => {
    const query = matchMedia(DESKTOP_MEDIA_QUERY);

    const handler = (event: MediaQueryListEvent): void => {
      if (event.matches) {
        setOpen(false);
      }
    };

    query.addEventListener('change', handler);

    return (): void => {
      query.removeEventListener('change', handler);
    };
  }, []);

  const isActive = (href: string): boolean => {
    const [path = href] = href.split('#', 1);

    return path === RouteDefs.home ? pathname === RouteDefs.home : pathname.startsWith(path);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <header className={clsx('px-5 xl:px-10 pt-3.5 pb-2.5 xl:pt-5.5 xl:pb-5 flex flex-row gap-4 items-center justify-between border-b border-solid border-border', className)} {...props}>
      <Link className="font-black font-title text-[15px] xl:text-lg transition-colors duration-200 ease-out hover:text-accent" href={RouteDefs.home}>
        {title}
      </Link>

      <nav className="hidden xl:flex flex-row gap-7.5">
        {links.map(({ href, label, accented }) => (
          <Link
            aria-current={isActive(href) ? 'page' : undefined}
            href={href}
            key={label}
            className={clsx(
              LINK_CLASS_NAME,
              Boolean(accented) && 'text-accent',
              isActive(href) ? 'accent-underline-shown' : 'hover:accent-underline-shown focus-visible:accent-underline-shown'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      <button aria-expanded={open} aria-label="Open menu" className="group xl:hidden cursor-pointer" type="button" onClick={handleOpen}>
        <Icon className="fill-text transition-colors duration-200 ease-out group-hover:fill-accent" icon={BarsIcon} size="1.5x" />
      </button>

      <AnimatePresence>
        {
          open && (
            <Fragment>
              <motion.div
                animate={{ opacity: 1 }}
                className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-10 xl:hidden"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.2 }}
                onClick={handleClose}
              />

              <motion.nav
                animate={{ x: 0 }}
                className="fixed top-0 right-0 bottom-0 z-20 w-64 max-w-3/4 px-5 pt-3.5 pb-5 flex flex-col gap-8 bg-background-light border-l border-solid border-border xl:hidden"
                exit={{ x: '100%' }}
                initial={{ x: '100%' }}
                transition={{ ease: 'easeInOut', duration: 0.3 }}
              >
                <button aria-label="Close menu" className="group self-end cursor-pointer" type="button" onClick={handleClose}>
                  <Icon className="fill-text transition duration-200 ease-out group-hover:fill-accent group-hover:rotate-90" icon={XMarkIcon} size="1.5x" />
                </button>

                <div className="flex flex-col items-start gap-6">
                  {links.map(({ href, label, accented }) => (
                    <Link
                      aria-current={isActive(href) ? 'page' : undefined}
                      href={href}
                      key={label}
                      onClick={handleClose}
                      className={clsx(
                        LINK_CLASS_NAME,
                        Boolean(accented) && 'text-accent',
                        isActive(href) ? 'accent-underline-shown' : 'hover:accent-underline-shown focus-visible:accent-underline-shown'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            </Fragment>
          )
        }
      </AnimatePresence>
    </header>
  );
};
