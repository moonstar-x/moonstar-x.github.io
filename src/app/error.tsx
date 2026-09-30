'use client';
import { CompleteErrorView } from '@components/error/CompleteErrorView';
import type { ErrorViewProps } from '@components/error/CompleteErrorView';
import type { FC } from 'react';

const RootError: FC<ErrorViewProps> = ({ error, retry }) => (
  <CompleteErrorView error={error} retry={retry} />
);

export default RootError;
