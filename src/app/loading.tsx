import { Spinner } from '@components/ui/Spinner';
import type { FC } from 'react';

const RootLoading: FC = () => (
  <main className="flex-1 flex items-center justify-center">
    <Spinner />
  </main>
);

export default RootLoading;
