'use client';
import { ErrorDetails } from '@components/error/ErrorDetails';
import { ErrorFooter } from '@components/error/ErrorFooter';
import { ErrorHero } from '@components/error/ErrorHero';
import { useSocials } from '@components/providers/SocialsProvider';
import { Fragment, useEffect } from 'react';
import type { FC } from 'react';

export interface ErrorViewProps {
  error: Error & { digest?: string };
  retry: () => void;
}

export const CompleteErrorView: FC<ErrorViewProps> = ({ error, retry }) => {
  const socials = useSocials();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Fragment>
      <main className="flex-1">
        <ErrorHero className="page-horizontal-align" onRetry={retry} />
        <ErrorDetails className="page-horizontal-align" error={error} />
      </main>
      <ErrorFooter className="mt-4" links={socials} />
    </Fragment>
  );
};
