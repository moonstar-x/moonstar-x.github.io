import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import rehypeVideo from 'rehype-video';
import rehypeRaw from 'rehype-raw';
import clsx from 'clsx';
import { Blockquote } from '@components/ui/blockquote';
import { Code } from '@components/ui/code';
import { Divider } from '@components/ui/divider';
import { ExpandableImage } from '@components/ui/image';
import { Link } from '@components/ui/link';
import { Table } from '@components/ui/table';
import { Video } from '@components/ui/video';
import './styles.css';

export interface Props {
  children?: string
  className?: string
}

export const Markdown: React.FC<Props> = ({ children, className }) => {
  return (
    <ReactMarkdown
      className={clsx('markdown', className)}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeFigure, [rehypeVideo, { details: false }], rehypeRaw]}
      components={{
        a: ({ color, href, node, ref, ...props }) => {
          if (!href) {
            return null;
          }

          return (
            <Link color="primary" withUnderline href={href} {...props} />
          );
        },
        blockquote: ({ children, className, node, ref, ...props }) => {
          return (
            <Blockquote className={className} {...props}>
              {children}
            </Blockquote>
          );
        },
        code: ({ children, className, node, ref, ...props }) => {
          const language = /language-(\w+)/.exec(className || '')?.[1];

          return (
            <Code language={language} className={className} {...props}>
              {children}
            </Code>
          );
        },
        hr: ({ className, node, ref, ...props }) => {
          return (
            <Divider className={clsx('mb-0', className)} {...props} />
          );
        },
        img: ({ src, width, height, node, ref, ...props }) => {
          if (!src) {
            return null;
          }

          return (
            <ExpandableImage src={src} {...props} />
          );
        },
        table: ({ children, className, node, ref, ...props }) => {
          return (
            <Table className={className} striped bordered large scrollable {...props}>
              {children}
            </Table>
          );
        },
        video: ({ src, width, height, node, ref, ...props }) => {
          if (!src) {
            return null;
          }

          return (
            <Video src={src} {...props} />
          );
        }
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
