import React from 'react';
import { Markdown } from '@components/utils/markdown';

interface Props {
  content: string
}

export const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <Markdown>
      {content}
    </Markdown>
  );
};
