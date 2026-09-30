import fs from 'node:fs/promises';
import path from 'node:path';
import type { Element, Root } from 'hast';
import { imageSize } from 'image-size';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

interface Dimensions {
  height: number;
  width: number;
}

const PUBLIC_DIRECTORY = path.join(process.cwd(), 'public');
const FETCH_TIMEOUT_MS = 15_000;

const cache = new Map<string, Promise<Dimensions | null>>();

const readBuffer = async (source: string): Promise<Uint8Array> => {
  if (/^https?:\/\//u.test(source)) {
    const response = await fetch(source, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });

    if (!response.ok) {
      throw new Error(`Request failed with status ${String(response.status)}.`);
    }

    return new Uint8Array(await response.arrayBuffer());
  }

  const filePath = path.join(PUBLIC_DIRECTORY, decodeURIComponent(source.split(/[#?]/u, 1)[0] ?? ''));

  if (!filePath.startsWith(PUBLIC_DIRECTORY)) {
    throw new Error('Image path is outside of the public directory.');
  }

  return await fs.readFile(filePath);
};

const resolveDimensions = async (source: string): Promise<Dimensions | null> => {
  try {
    const { width, height } = imageSize(await readBuffer(source));
    return { width, height };
  } catch (error) {
    console.warn(`Could not read image dimensions for "${source}":`, error instanceof Error ? error.message : error);
    return null;
  }
};

const getDimensions = async (source: string): Promise<Dimensions | null> => {
  const cached = cache.get(source);

  if (cached) {
    return await cached;
  }

  const pending = resolveDimensions(source);
  cache.set(source, pending);
  return await pending;
};

const isResolvableSource = (source: string): boolean => /^https?:\/\//u.test(source) || source.startsWith('/');

const hasDimensions = (image: Element): boolean => image.properties.width !== undefined && image.properties.height !== undefined;

const resolveImageDimensions = async (image: Element): Promise<Dimensions | null> => {
  const { src } = image.properties;

  if (typeof src !== 'string' || !isResolvableSource(src) || hasDimensions(image)) {
    return null;
  }

  return await getDimensions(src);
};

const applyImageDimensions = async (tree: Root): Promise<void> => {
  const images: Element[] = [];

  visit(tree, 'element', (node) => {
    if (node.tagName === 'img') {
      images.push(node);
    }
  });

  const results = await Promise.all(images.map(async (image) => await resolveImageDimensions(image)));

  for (const [index, dimensions] of results.entries()) {
    const properties = images[index]?.properties;

    if (dimensions && properties) {
      properties.width = dimensions.width;
      properties.height = dimensions.height;
    }
  }
};

export const rehypeImageDimensions: Plugin<[], Root> = () => applyImageDimensions;
