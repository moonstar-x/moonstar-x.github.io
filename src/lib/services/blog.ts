import path from 'path';
import { getAllSlugs, getAllMetadata, getContent, Markdown } from '@lib/services/markdown';

const directory = path.join(process.cwd(), 'src/data/_blog');

interface BlogPostMetadata {
  title: string
  description?: string
  cover: string
  date: string
}

export type BlogPost = Markdown<BlogPostMetadata>

export const getAllPostSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllPostsMetadata = () => {
  return getAllMetadata<BlogPostMetadata>(directory);
};

export const getPostBySlug = (slug: string): Promise<BlogPost> => {
  return getContent<BlogPostMetadata>(directory, slug);
};
