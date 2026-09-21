import type { FC } from 'react';

interface Props {
  title: string;
}

export const Navbar: FC<Props> = ({ title }) => (
  <nav className="px-10 py-5.5 flex flex-row items-center justify-between border-b border-solid border-border">
    {title}
  </nav>
);
