import fs from 'node:fs';
import path from 'node:path';
import { SHOULD_SHOW_DRAFT_CONTENT } from '@core/config/app';
import type { ZodShape } from '@core/utils/zod';
import matter from 'gray-matter';
import rehypeInferDescriptionMeta from 'rehype-infer-description-meta';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { z } from 'zod';

const getContentFiles = async (directory: string): Promise<string[]> => {
  const files = await fs.promises.readdir(directory);

  return files.filter((file) => {
    const isDevelopmentContentPredicate = SHOULD_SHOW_DRAFT_CONTENT ? true : !file.startsWith('_');
    return file.endsWith('.md') && isDevelopmentContentPredicate;
  });
};

const readFileContent = async (filename: string): Promise<string> => await fs.promises.readFile(filename, 'utf8');

const getSlugFromFilename = (file: string): string => file.replace(/\.md$/u, '');

const resolveFilenameFromSlug = (slug: string): string => `${slug}.md`;

interface ContentMetadataBase {
  description: string;
  readingTime: number;
  slug: string;
}

export type ContentMetadata<T extends object> = ContentMetadataBase & T;

export const ContentMetadataSchema: z.ZodObject<ZodShape<ContentMetadataBase>> = z.object({
  description: z.string(),
  readingTime: z.number(),
  slug: z.string()
});

export interface Markdown<T extends object> {
  markdown: string;
  metadata: ContentMetadata<T>;
}

const resolveReadingTime = (readingTime?: [number, number] | [number] | null | number): number => {
  if (readingTime === null || readingTime === undefined) {
    return -1;
  }

  if (Array.isArray(readingTime)) {
    const readingTimeValue = readingTime.length === 1
      ? readingTime[0]
      : readingTime.at(-1) ?? -1;

    return Math.ceil(readingTimeValue);
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

  const metadataDescriptionFromMatterResult = typeof matterResult.data['description'] === 'string' ? matterResult.data['description'] : undefined;
  const metadataDescriptionFromUnifiedResult = typeof unifiedResult.data.meta?.description === 'string' ? unifiedResult.data.meta.description : undefined;

  return {
    markdown: matterResult.content,
    metadata: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      ...matterResult.data as T,
      slug,
      description: metadataDescriptionFromMatterResult ?? metadataDescriptionFromUnifiedResult ?? 'No description available.',
      readingTime: resolveReadingTime(unifiedResult.data.meta?.readingTime)
    }
  };
};

export const getAllSlugs = async (directory: string): Promise<string[]> => {
  const files = await getContentFiles(directory);
  return files.map((file) => getSlugFromFilename(file));
};

export const getAllMetadata = async <T extends object>(directory: string): Promise<Array<ContentMetadata<T>>> => {
  const files = await getContentFiles(directory);

  return await Promise.all(files.map(async (file) => {
    const slug = getSlugFromFilename(file);
    const filename = path.join(directory, file);
    const data = await readFileContent(filename);

    const parsed = await parseMarkdownData<T>(data, slug);
    return parsed.metadata;
  }));
};

export const getContent = async <T extends object>(directory: string, slug: string): Promise<Markdown<T>> => {
  const file = resolveFilenameFromSlug(slug);
  const filename = path.join(directory, file);
  const data = await readFileContent(filename);

  return await parseMarkdownData(data, slug);
};
