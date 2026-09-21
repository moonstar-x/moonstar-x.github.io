import path from 'node:path';
import { getAllMetadata, getAllSlugs, getContent } from '@core/services/markdown';
import type { ContentMetadata, Markdown } from '@core/services/markdown';

const directory = path.join(process.cwd(), 'data/work');

export const TECH_TYPES = [
  'nodejs', 'mongo', 'docker', 'javascript', 'react',
  'typescript', 'svelte', 'lua', 'python', 'markdown',
  'nextjs', 'redis', 'neo4j', 'flask', 'nginx',
  'githubActions', 'jenkins', 'tailwind', 'sass', 'opencv',
  'flutter', 'dart', 'vite', 'postgres', 'express',
  'sqlite', 'jest', 'html', 'css', 'level',
  'selenium', 'puppeteer', 'mariadb', 'pytest', 'strapi',
  'fastapi', 'ruby'
] as const;
export type TechType = typeof TECH_TYPES[number];

export const WORK_STATUS_TYPES = ['completed', 'maintained', 'in-development', 'on-hold', 'deprecated', 'abandoned'] as const;
export type WorkStatus = typeof WORK_STATUS_TYPES[number];

export const WORK_TYPE_TYPES = ['art', 'hobby', 'research'] as const;
export type WorkType = typeof WORK_TYPE_TYPES[number];

export const WORK_LINK_TYPES = ['github', 'dockerhub', 'website', 'discord', 'npm', 'steam', 'appstore', 'playstore'] as const;
export type WorkLink = typeof WORK_LINK_TYPES[number];

export type WorkStats = 'dockerhub' | 'github' | 'npm';

export interface WorkMetadata {
  cover: string;
  date: string;
  description: string;
  links?: Partial<Record<WorkLink, string>>;
  name: string;
  stats?: Partial<Record<WorkStats, string>>;
  status: WorkStatus;
  technologies: TechType[];
  type: WorkType;
}

export type WorkArticle = Markdown<WorkMetadata>;

type SortType = 'date' | 'name';
type CompareFunction = (a: ContentMetadata<WorkMetadata>, b: ContentMetadata<WorkMetadata>) => number;
interface GetAllWorkMetadataOptions {
  sort: SortType;
}

const resolveSortFunction = (sort: SortType): CompareFunction => {
  switch (sort) {
    case 'date':
      return (a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);

        return bDate.getTime() - aDate.getTime();
      };
    case 'name':
      return (a, b) => a.name.localeCompare(b.name);
  }
};

export const getAllWorkSlugs = async (): Promise<string[]> => await getAllSlugs(directory);

export const getAllWorkMetadata = async (options: Partial<GetAllWorkMetadataOptions> = {}): Promise<Array<ContentMetadata<WorkMetadata>>> => {
  const mergedOptions: GetAllWorkMetadataOptions = {
    sort: 'name',
    ...options
  };

  const work = await getAllMetadata<WorkMetadata>(directory);
  return work.sort(resolveSortFunction(mergedOptions.sort));
};

export const getAllWorkMetadataForType = async (type: WorkType, options: Partial<GetAllWorkMetadataOptions> = {}): Promise<Array<ContentMetadata<WorkMetadata>>> => {
  const mergedOptions: GetAllWorkMetadataOptions = {
    sort: 'name',
    ...options
  };

  const work = await getAllMetadata<WorkMetadata>(directory);
  return work
    .filter((data) => data.type === type)
    .sort(resolveSortFunction(mergedOptions.sort));
};

export const getAllWorkMetadataByType = async (options: Partial<GetAllWorkMetadataOptions> = {}): Promise<Record<WorkType, Array<WorkArticle['metadata']>>> => {
  const work = await getAllWorkMetadata(options);
  const initialResult = Object.fromEntries(
    WORK_TYPE_TYPES.map((key) => {
      const values: Array<WorkArticle['metadata']> = [];
      return [key, values];
    })
  );

  return work.reduce((accumulator, current) => {
    accumulator[current.type].push(current);
    return accumulator;
  }, initialResult);
};

export const getWorkBySlug = async (slug: string): Promise<WorkArticle> => await getContent<WorkMetadata>(directory, slug);
