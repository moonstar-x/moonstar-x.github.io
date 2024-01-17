import path from 'path';
import { getAllSlugs, getAllMetadata, getContent } from '@lib/services/markdown';

const directory = path.join(process.cwd(), 'src/data/_work');

export interface ProjectMetadata {
  name: string
}

export const getAllWorkSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllWorkMetadata = () => {
  return getAllMetadata<ProjectMetadata>(directory);
};

export const getWorkBySlug = (slug: string) => {
  return getContent<ProjectMetadata>(directory, slug);
};
