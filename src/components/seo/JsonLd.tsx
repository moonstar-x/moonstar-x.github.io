import type { JsonLdNode } from '@core/utils/json-ld';
import type { FC } from 'react';

interface Props {
  data: JsonLdNode;
}

// eslint-disable-next-line unicorn/prefer-string-raw
const serialize = (data: JsonLdNode): string => JSON.stringify(data).replaceAll('<', '\\u003c');

export const JsonLd: FC<Props> = ({ data }) => (
  // Content is built from local data and `<` is escaped, so it cannot close the script tag.
  // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
  <script dangerouslySetInnerHTML={{ __html: serialize(data) }} type="application/ld+json" />
);
