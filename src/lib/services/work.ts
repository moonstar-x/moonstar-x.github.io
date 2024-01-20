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

export const WORK_STATUS_TYPES = ['completed', 'maintained', 'in-development', 'on-hold', 'deprecated', 'abandoned'] as const;
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

export const getAllWorkMetadata = async () => {
  const work = await getAllMetadata<WorkMetadata>(directory);
  return work.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const getAllWorkMetadataForType = async (type: WorkType) => {
  const work = await getAllMetadata<WorkMetadata>(directory);
  return work
    .filter((data) => data.type === type)
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
};

export const getAllWorkMetadataByType = async (): Promise<Record<WorkType, WorkArticle['metadata'][]>> => {
  const work = await getAllWorkMetadata();
  const initialResult = Object.fromEntries(
    WORK_TYPE_TYPES.map((key) => [key, [] as WorkArticle['metadata'][]])
  ) as Record<WorkType, WorkArticle['metadata'][]>;

  return work.reduce((acc, cur) => {
    acc[cur.type].push(cur);
    return acc;
  }, initialResult);
};

export const getWorkBySlug = (slug: string): Promise<WorkArticle> => {
  return getContent<WorkMetadata>(directory, slug);
};
