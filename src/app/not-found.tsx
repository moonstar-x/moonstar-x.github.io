import { NotFoundHero } from '@components/404/NotFoundHero';
import { NotFoundMarquee } from '@components/404/NotFoundMarquee';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
  <main className="flex-1">
    <NotFoundHero />
    <NotFoundMarquee />
  </main>
);

export default NotFoundPage;
