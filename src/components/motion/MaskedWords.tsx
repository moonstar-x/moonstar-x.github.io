import { maskReveal } from '@components/motion/variants';
import * as motion from 'framer-motion/client';
import { Fragment } from 'react';
import type { FC } from 'react';

interface Props {
  separator?: string;
  text: string;
}

export const MaskedWords: FC<Props> = ({ text, separator = ' ' }) => {
  const segments = text.split(separator);

  return segments.map((segment, index) => (
    // eslint-disable-next-line @eslint-react/no-array-index-key -- segments come from static text and never reorder.
    <Fragment key={index}>
      <span className="reveal-mask">
        <motion.span className="inline-block" variants={maskReveal}>
          {segment}
        </motion.span>
      </span>
      {index < segments.length - 1 && separator}
    </Fragment>
  ));
};
