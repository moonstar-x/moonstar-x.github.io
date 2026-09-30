import { revealStyle, WORD_STAGGER } from '@components/motion/revealStyle';
import { Fragment } from 'react';
import type { FC } from 'react';

interface Props {
  delay?: number;
  separator?: string;
  text: string;
}

export const MaskedWords: FC<Props> = ({ text, separator = ' ', delay = 0 }) => {
  const segments = text.split(separator);

  return segments.map((segment, index) => (
    // eslint-disable-next-line @eslint-react/no-array-index-key -- segments come from static text and never reorder.
    <Fragment key={index}>
      <span className="reveal-mask">
        <span className="inline-block animate-mask-reveal" style={revealStyle(delay + (index * WORD_STAGGER))}>
          {segment}
        </span>
      </span>
      {index < segments.length - 1 && separator}
    </Fragment>
  ));
};
