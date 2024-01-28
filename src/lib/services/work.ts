import path from 'path';
import { getAllSlugs, getAllMetadata, getContent, Markdown, ContentMetadata } from '@lib/services/markdown';

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

export const WORK_TYPE_TYPES = ['art', 'hobby', 'research'] as const;
export type WorkType = typeof WORK_TYPE_TYPES[number];

export const WORK_LINK_TYPES = ['github', 'dockerhub', 'website', 'discord', 'npm', 'steam'] as const;
export type WorkLink = typeof WORK_LINK_TYPES[number];

export type WorkStats = 'github' | 'dockerhub' | 'npm';

export interface WorkMetadata {
  name: string
  description: string
  cover: string
  date: string
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

type SortType = 'name' | 'date';
type CompareFunction = (a: ContentMetadata<WorkMetadata>, b: ContentMetadata<WorkMetadata>) => number;
type GetAllWorkMetadataOptions = {
  sort: SortType
}

const resolveSortFunction = (sort: SortType): CompareFunction => {
  switch (sort) {
    case 'name':
      return (a, b) => {
        return a.name.localeCompare(b.name);
      };
    case 'date':
      return (a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);

        return bDate.getTime() - aDate.getTime();
      };
    default:
      return () => 0;
  }
};

export const getAllWorkSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllWorkMetadata = async (options: Partial<GetAllWorkMetadataOptions> = {}) => {
  const mergedOptions: GetAllWorkMetadataOptions = {
    sort: 'name',
    ...options
  };

  const work = await getAllMetadata<WorkMetadata>(directory);
  return work.sort(resolveSortFunction(mergedOptions.sort));
};

export const getAllWorkMetadataForType = async (type: WorkType, options: Partial<GetAllWorkMetadataOptions> = {}) => {
  const mergedOptions: GetAllWorkMetadataOptions = {
    sort: 'name',
    ...options
  };

  const work = await getAllMetadata<WorkMetadata>(directory);
  return work
    .filter((data) => data.type === type)
    .sort(resolveSortFunction(mergedOptions.sort));
};

export const getAllWorkMetadataByType = async (options: Partial<GetAllWorkMetadataOptions> = {}): Promise<Record<WorkType, WorkArticle['metadata'][]>> => {
  const work = await getAllWorkMetadata(options);
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
