/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import React, { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Image, Props as ImageProps } from './Image';
import { Icon } from '@components/ui/icon';
import { XMarkIcon } from '@components/ui/icon/library/ui/XMarkIcon';
import { useDisableBodyScroll } from '@components/hooks/useDisableBodyScroll';
import { useOnEscapePressed } from '@components/hooks/useOnEscapePressed';

export interface Props extends ImageProps {
  initialOpen?: boolean
}

export const ExpandableImage: React.FC<Props> = ({
  className,
  initialOpen = false,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(() => initialOpen);
  useDisableBodyScroll(open);
  useOnEscapePressed(() => setOpen(false));

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Image
        className={clsx('cursor-pointer', className)}
        onClick={handleOpen}
        {...props}
      />

      <AnimatePresence>
        {
          open && (
            <motion.div
              className="fixed top-0 right-0 bottom-0 left-0 bg-transparent-80 z-10 transition-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.2 }}
              onClick={handleClose}
            >
              <div className="w-full h-full flex flex-col gap-[1rem] px-[1rem] py-[2rem]">
                <Icon
                  icon={XMarkIcon}
                  size="2x"
                  role="button"
                  className="self-end justify-self-center fill-white opacity-50 hover:opacity-100"
                  onClick={handleClose}
                />

                <div className="flex-1 h-0 relative">
                  <Image
                    className={clsx('!rounded-none h-auto w-auto max-w-full max-h-full m-auto absolute top-0 right-0 bottom-0 left-0', className)}
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
