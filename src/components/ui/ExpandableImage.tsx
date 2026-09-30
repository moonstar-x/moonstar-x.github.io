'use client';
import { XMarkIcon } from '@components/icons/XMarkIcon';
import { Icon } from '@components/ui/Icon';
import { useDisableBodyScroll } from '@hooks/useDisableBodyScroll';
import { useOnEscapePressed } from '@hooks/useOnEscapePressed';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import type { FC, MouseEvent } from 'react';

const stopPropagation = (event: MouseEvent): void => {
  event.stopPropagation();
};

export interface Props extends ImageProps {
  initialOpen?: boolean;
}

export const ExpandableImage: FC<Props> = ({ initialOpen = false, className, ...props }) => {
  const [open, setOpen] = useState<boolean>(() => initialOpen);
  useDisableBodyScroll(open);
  useOnEscapePressed(() => setOpen(false));

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Image
        className={clsx('cursor-zoom-in', className)}
        onClick={handleOpen}
        {...props}
      />

      <AnimatePresence>
        {
          open && (
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed top-0 right-0 bottom-0 left-0 bg-black/80 z-10 transition-none"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.2 }}
              onClick={handleClose}
            >
              <div className="w-full h-full flex flex-col gap-4 px-4 py-8">
                <div className="flex flex-row justify-end px-2">
                  <button aria-label="Close image" className="cursor-pointer group" type="button" onClick={handleClose}>
                    <Icon
                      className="self-end justify-self-center fill-white opacity-50 transition-opacity duration-200 ease-out group-hover:opacity-100"
                      icon={XMarkIcon}
                      size="2x"
                    />
                  </button>
                </div>

                <div className="flex-1 h-0 relative">
                  <Image
                    className={clsx('h-auto w-auto max-w-full max-h-full m-auto absolute top-0 right-0 bottom-0 left-0 cursor-default', className)}
                    onClick={stopPropagation}
                    {...props}
                  />
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </Fragment>
  );
};
