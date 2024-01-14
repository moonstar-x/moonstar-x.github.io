import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import rehypeVideo from 'rehype-video';
import { Image } from '@components/ui/image';
import { Link } from '@components/ui/link';
import './styles.css';

interface Props {
  children?: string
}

export const Markdown: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm, remarkMdx]}
      rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeFigure, [rehypeVideo, { details: false }]]}
      components={{
        code: ({ children, className, node, ref, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter
              {...props}
              PreTag="div"
              language={match[1]}
              style={oneLight}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: ({ src, width, height, node, ref, ...props }) => {
          if (!src) {
            return null;
          }

          return (
            <Image src={src} {...props} />
          );
        },
        a: ({ color, href, node, ref, ...props }) => {
          if (!href) {
            return null;
          }

          return (
            <Link color="primary" withUnderline href={href} {...props} />
          );
        }
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
