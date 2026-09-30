import { revealStyle } from '@components/motion/revealStyle';
import type { WorkMetadata } from '@core/services/data/work';
import type { ContentMetadata } from '@core/services/markdown';
import { clsx } from 'clsx';
import Image from 'next/image';
import type { ComponentProps, FC } from 'react';

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  metadata: ContentMetadata<WorkMetadata>;
}

export const WorkArticleCover: FC<Props> = ({ metadata, className, ...props }) => (
  <div className={clsx('px-5 xl:px-10 pt-7 xl:pt-11.5', className)} {...props}>
    <div className="relative w-full aspect-video xl:aspect-21/9 overflow-hidden border border-solid border-border animate-fade-up" style={revealStyle(0, 32)}>
      <div className="absolute inset-0 animate-settle-in">
        <Image fill preload alt={`${metadata.name} cover`} className="object-cover" sizes="(min-width: 1280px) 1280px, 100vw" src={metadata.cover} />
      </div>
    </div>
  </div>
);
