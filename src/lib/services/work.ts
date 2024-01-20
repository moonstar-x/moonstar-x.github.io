import path from 'path';
import { getAllSlugs, getAllMetadata, getContent, Markdown } from '@lib/services/markdown';

const directory = path.join(process.cwd(), 'src/data/_work');

export const TECH_TYPES = [
  'nodejs', 'mongo', 'docker', 'javascript', 'react',
  'typescript', 'svelte', 'lua', 'python', 'markdown',
  'nextjs', 'redis', 'neo4j', 'flask', 'nginx',
  'githubActions', 'jenkins', 'tailwind', 'sass', 'opencv',
  'flutter', 'dart', 'vite', 'postgres', 'express',
  'sqlite', 'jest', 'html', 'css', 'level',
  'selenium', 'puppeteer', 'mariadb'
] as const;
export type TechType = typeof TECH_TYPES[number];

export const WORK_STATUS_TYPES = ['completed', 'maintained', 'in-development', 'deprecated', 'abandoned'] as const;
export type WorkStatus = typeof WORK_STATUS_TYPES[number];

export const WORK_TYPE_TYPES = ['hobby', 'art', 'research'] as const;
export type WorkType = typeof WORK_TYPE_TYPES[number];

export const WORK_LINK_TYPES = ['github', 'dockerhub', 'website', 'discord', 'npm', 'steam'] as const;
export type WorkLink = typeof WORK_LINK_TYPES[number];

export type WorkStats = 'github' | 'dockerhub' | 'npm';

export interface WorkMetadata {
  name: string
  description: string
  cover: string
  technologies: TechType[]
  status: WorkStatus
  type: WorkType
  links?: {
    [k in WorkLink]?: string
  }
  stats?: {
    [k in WorkStats]?: string
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
