import { NotFoundHero } from '@components/404/NotFoundHero';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
  <main className="flex-1">
    <NotFoundHero />
  </main>
);

export default NotFoundPage;
