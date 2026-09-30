'use client';
import { XMarkIcon } from '@components/icons/XMarkIcon';
import { Icon } from '@components/ui/Icon';
import { useDisableBodyScroll } from '@hooks/useDisableBodyScroll';
import { useOnEscapePressed } from '@hooks/useOnEscapePressed';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import type { FC, MouseEvent } from 'react';

const ZOOM_SCALE = 2.5;

const clampPercentage = (value: number): number => Math.min(100, Math.max(0, value));

export interface Props extends ImageProps {
  initialOpen?: boolean;
}

export const ExpandableImage: FC<Props> = ({ initialOpen = false, className, ...props }) => {
  const [open, setOpen] = useState<boolean>(() => initialOpen);
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [origin, setOrigin] = useState<string>('50% 50%');
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useDisableBodyScroll(open);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setZoomed(false);
  };

  useOnEscapePressed(handleClose);

  const updateOrigin = (clientX: number, clientY: number): void => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) {
      return;
    }

    // offset* ignores the zoom transform, so the mapping stays stable while zoomed.
    const rect = container.getBoundingClientRect();
    const x = clampPercentage(((clientX - rect.left - image.offsetLeft) / image.offsetWidth) * 100);
    const y = clampPercentage(((clientY - rect.top - image.offsetTop) / image.offsetHeight) * 100);
    setOrigin(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  };

  const handleImageClick = (event: MouseEvent<HTMLImageElement>): void => {
    event.stopPropagation();

    if (!zoomed) {
      updateOrigin(event.clientX, event.clientY);
    }

    setZoomed((current) => !current);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    if (zoomed) {
      updateOrigin(event.clientX, event.clientY);
    }
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

                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- pointer-only pan, zoom stays keyboard-independent */}
                <div className="flex-1 h-0 relative overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove}>
                  <Image
                    ref={imageRef}
                    style={{ transform: zoomed ? `scale(${ZOOM_SCALE.toString()})` : 'scale(1)', transformOrigin: origin }}
                    onClick={handleImageClick}
                    className={clsx(
                      'object-contain h-auto w-auto max-w-full max-h-full m-auto absolute top-0 right-0 bottom-0 left-0 transition-transform duration-200 ease-out',
                      zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                    )}
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
