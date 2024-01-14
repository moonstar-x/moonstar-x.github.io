import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ENABLE_DEV_CONTENT } from '@lib/config';

const getContentFiles = async (directory: string): Promise<string[]> => {
  const files = await fs.promises.readdir(directory);

  return files.filter((file) => {
    const devContentPredicate = ENABLE_DEV_CONTENT ? true : !file.startsWith('_');
    return file.endsWith('.md') && devContentPredicate;
  });
};

const readFileContent = async (filename: string): Promise<string> => {
  return await fs.promises.readFile(filename, 'utf-8');
};

const getSlugFromFilename = (file: string): string => {
  return file.replace(/\.md$/, '');
};

const resolveFilenameFromSlug = (slug: string): string => {
  return `${slug}.md`;
};

export const getAllSlugs = async (directory: string): Promise<string[]> => {
  const files = await getContentFiles(directory);
  return files.map(getSlugFromFilename);
};

type ContentMetadata<T extends object> = T & {
  slug: string
}

export const getAllMetadata = async <T extends object>(directory: string): Promise<ContentMetadata<T>[]> => {
  const files = await getContentFiles(directory);

  return await Promise.all(files.map(async (file) => {
    const slug = getSlugFromFilename(file);
    const filename = path.join(directory, file);
    const data = await readFileContent(filename);

    const matterResult = matter(data);

    return {
      ...matterResult.data as T,
      slug
    };
  }));
};

type Content<T extends object> = {
  metadata: ContentMetadata<T>
  markdown: string
}

export const getContent = async <T extends object>(directory: string, slug: string): Promise<Content<T>> => {
  const file = resolveFilenameFromSlug(slug);
  const filename = path.join(directory, file);
  const data = await readFileContent(filename);

  const matterResult = matter(data);

  const metadata: ContentMetadata<T> = {
    ...matterResult.data as T,
    slug
  };

  return {
    metadata,
    markdown: matterResult.content
  };
};
