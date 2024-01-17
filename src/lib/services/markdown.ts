import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeInferDescriptionMeta from 'rehype-infer-description-meta';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { str } from '@lib/services/strings';
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

export type ContentMetadata<T extends object> = T & {
  slug: string
  description: string
  readingTime: number
}

export type Markdown<T extends object> = {
  metadata: ContentMetadata<T>
  markdown: string
}

const resolveReadingTime = (readingTime?: number | [number] | [number, number] | null): number => {
  if (!readingTime) {
    return -1;
  }

  if (Array.isArray(readingTime)) {
    if (readingTime.length === 1) {
      return Math.ceil(readingTime.at(0)!);
    }

    return Math.ceil(readingTime.at(-1)!);
  }

  return Math.ceil(readingTime);
};

const parseMarkdownData = async <T extends object>(data: string, slug: string): Promise<Markdown<ContentMetadata<T>>> => {
  const matterResult = matter(data);
  const unifiedResult = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeRaw)
    .use(rehypeInferReadingTimeMeta)
    .use(rehypeInferDescriptionMeta)
    .use(rehypeStringify)
    .process(matterResult.content);

  return {
    markdown: matterResult.content,
    metadata: {
      ...matterResult.data as T,
      slug,
      description: unifiedResult.data.meta?.description ?? matterResult.data.description ?? str('services.markdown.fallback_description'),
      readingTime: resolveReadingTime(unifiedResult.data.meta?.readingTime)
    }
  };
};

export const getAllSlugs = async (directory: string): Promise<string[]> => {
  const files = await getContentFiles(directory);
  return files.map(getSlugFromFilename);
};

export const getAllMetadata = async <T extends object>(directory: string): Promise<ContentMetadata<T>[]> => {
  const files = await getContentFiles(directory);

  return await Promise.all(files.map(async (file) => {
    const slug = getSlugFromFilename(file);
    const filename = path.join(directory, file);
    const data = await readFileContent(filename);

    return (await parseMarkdownData<T>(data, slug)).metadata;
  }));
};

export const getContent = async <T extends object>(directory: string, slug: string): Promise<Markdown<T>> => {
  const file = resolveFilenameFromSlug(slug);
  const filename = path.join(directory, file);
  const data = await readFileContent(filename);

  return await parseMarkdownData(data, slug);
};
