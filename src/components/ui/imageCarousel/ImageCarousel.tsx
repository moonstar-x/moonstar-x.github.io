'use client';
import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';
import { Image } from '@components/ui/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  images: string[]
  draggable?: boolean
  autoplay?: boolean
  autoplaySpeed?: number
  pauseOnHover?: boolean
  dots?: boolean
  aspectRatio?: string
  firstImagePriority?: boolean
}

export const ImageCarousel: React.FC<Props> = ({
  className,
  images,
  draggable = true,
  autoplay = true,
  autoplaySpeed = 3000,
  pauseOnHover = false,
  dots = false,
  aspectRatio = 'aspect-video',
  firstImagePriority = false,
  ...props
}) => {
  return (
    <section className={clsx('[&_*]:transition-none', className)} {...props}>
      <Slider
        draggable={draggable}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        pauseOnHover={pauseOnHover}
        dots={dots}
        lazyLoad="progressive"
        centerMode
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide
        accessibility
      >
        {
          images.map((src, idx) => (
            <div key={idx} className={clsx('px-[5px]', aspectRatio)}>
              <Image
                src={src}
                className="w-full h-full"
                priority={firstImagePriority && idx === 0}
                loading={firstImagePriority && idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))
        }
      </Slider>
    </section>
  );
};
