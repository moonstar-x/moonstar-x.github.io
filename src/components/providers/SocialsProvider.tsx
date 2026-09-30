'use client';
import { createContext, use } from 'react';
import type { FC, ReactNode } from 'react';

export interface Social {
  label: string;
  url: string;
}

const SocialsContext = createContext<Social[]>([]);

interface Props {
  children: ReactNode;
  socials: Social[];
}

// Error boundaries are client components and can't read the config on their own, so the root layout
// hands the socials down through context.
export const SocialsProvider: FC<Props> = ({ socials, children }) => (
  <SocialsContext value={socials}>
    {children}
  </SocialsContext>
);

export const useSocials = (): Social[] => use(SocialsContext);
