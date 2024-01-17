import path from 'path';
import { getAllSlugs, getAllMetadata, getContent } from '@lib/services/markdown';

const directory = path.join(process.cwd(), 'src/data/_blog');

export interface BlogPostMetadata {
  title: string
}

export const getAllPostSlugs = () => {
  return getAllSlugs(directory);
};

export const getAllPostsMetadata = () => {
  return getAllMetadata<BlogPostMetadata>(directory);
};

export const getPostBySlug = (slug: string) => {
  return getContent<BlogPostMetadata>(directory, slug);
};
