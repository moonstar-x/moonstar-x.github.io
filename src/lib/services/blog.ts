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

export const getAllPostsMetadata = async () => {
  const posts = await getAllMetadata<BlogPostMetadata>(directory);
  return posts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return bDate.getTime() - aDate.getTime();
  });
};

export const getPostBySlug = (slug: string): Promise<BlogPost> => {
  return getContent<BlogPostMetadata>(directory, slug);
};
