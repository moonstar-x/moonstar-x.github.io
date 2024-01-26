import React from 'react';
import { Metadata } from 'next';
import { PageNotFoundError } from '@components/ui/pageNotFoundError';
import { str } from '@lib/services/strings';
import { resolveMetadataObject } from '@lib/utils/metadata';

export const generateMetadata = (): Metadata => {
  return resolveMetadataObject({
    title: str('pages.titles.not_found')
  });
};

const NotFoundPage = () => {
  return (
    <PageNotFoundError className="my-[4rem]" />
  );
};

export default NotFoundPage;
