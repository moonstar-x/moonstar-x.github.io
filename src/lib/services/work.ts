import path from 'path';
import { getAllSlugs, getAllMetadata, getContent, Markdown } from '@lib/services/markdown';

const directory = path.join(process.cwd(), 'src/data/_work');

export type WorkStatus = 'completed' | 'maintained' | 'in-development' | 'deprecated' | 'abandoned';
export type WorkType = 'hobby' | 'art' | 'research';

export type WorkLinkType = 'github' | 'dockerhub' | 'website' | 'discord' | 'npm' | 'steam';
export type WorkStatsType = 'github' | 'dockerhub' | 'npm';

export interface WorkMetadata {
  name: string
  description: string
  cover: string
  data: string
  technologies: string[]
  status: WorkStatus
  type: WorkType
  links?: {
    [k in WorkLinkType]?: string
  }
  stats?: {
    [k in WorkStatsType]?: string
  }
}

export type WorkArticle = Markdown<WorkMetadata>

export const getAllWorkSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllWorkMetadata = () => {
  return getAllMetadata<WorkMetadata>(directory);
};

export const getWorkBySlug = (slug: string): Promise<WorkArticle> => {
  return getContent<WorkMetadata>(directory, slug);
};
