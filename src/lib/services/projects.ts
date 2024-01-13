import path from 'path';
import { getAllSlugs, getAllMetadata, getContent } from '@lib/services/markdown/content';

const directory = path.join(process.cwd(), 'src/data/_projects');

export interface ProjectMetadata {
  name: string
}

export const getAllProjectsSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllProjectsMetadata = () => {
  return getAllMetadata<ProjectMetadata>(directory);
};

export const getProjectBySlug = (slug: string) => {
  return getContent<ProjectMetadata>(directory, slug);
};
