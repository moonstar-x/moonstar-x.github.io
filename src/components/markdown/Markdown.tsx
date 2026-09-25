import {
  MarkdownA, MarkdownBlockquote,
  MarkdownCode,
  MarkdownDel,
  MarkdownEm,
  MarkdownH1,
  MarkdownH2,
  MarkdownH3,
  MarkdownH4, MarkdownInput, MarkdownKbd, MarkdownLi, MarkdownOl,
  MarkdownP, MarkdownPre,
  MarkdownStrong, MarkdownSup, MarkdownTable, MarkdownTBody, MarkdownTd, MarkdownTh, MarkdownTHead, MarkdownTr, MarkdownUl
} from '@components/markdown/MarkdownStyledComponents';
import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';
import { onlyText } from 'react-children-utilities';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeVideo from 'rehype-video';
import remarkGfm from 'remark-gfm';

export interface Props extends Omit<ComponentProps<'article'>, 'children'> {
  children?: string;
}

export const Markdown: FC<Props> = ({ children, className, ...props }) => (
  <article className={clsx(className)} {...props}>
    <ReactMarkdown
      rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeFigure, [rehypeVideo, { details: false }], rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownH1 {...innerProps}>
            {innerChildren}
          </MarkdownH1>
        ),
        h2: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownH2 {...innerProps}>
            {innerChildren}
          </MarkdownH2>
        ),
        h3: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownH3 {...innerProps}>
            {innerChildren}
          </MarkdownH3>
        ),
        h4: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownH4 {...innerProps}>
            {innerChildren}
          </MarkdownH4>
        ),
        p: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownP {...innerProps}>
            {innerChildren}
          </MarkdownP>
        ),
        strong: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownStrong {...innerProps}>
            {innerChildren}
          </MarkdownStrong>
        ),
        em: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownEm {...innerProps}>
            {innerChildren}
          </MarkdownEm>
        ),
        del: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownDel {...innerProps}>
            {innerChildren}
          </MarkdownDel>
        ),
        code: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownCode {...innerProps}>
            {innerChildren}
          </MarkdownCode>
        ),
        a: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownA {...innerProps}>
            {innerChildren}
          </MarkdownA>
        ),
        kbd: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownKbd {...innerProps}>
            {innerChildren}
          </MarkdownKbd>
        ),
        sup: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownSup {...innerProps}>
            {innerChildren}
          </MarkdownSup>
        ),
        ul: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownUl {...innerProps}>
            {innerChildren}
          </MarkdownUl>
        ),
        ol: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownOl {...innerProps}>
            {innerChildren}
          </MarkdownOl>
        ),
        li: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownLi {...innerProps}>
            {innerChildren}
          </MarkdownLi>
        ),
        input: ({ node: _node, ...innerProps }) => (
          <MarkdownInput {...innerProps} />
        ),
        blockquote: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownBlockquote {...innerProps}>
            {innerChildren}
          </MarkdownBlockquote>
        ),
        pre: ({ children: innerChildren, node }) => {
          const codeChild = node?.children.find((child) => child.type === 'element' && child.tagName === 'code');
          const codeClassName = codeChild?.type === 'element' ? codeChild.properties.className : undefined;

          return (
            <MarkdownPre className={clsx(codeClassName)}>
              {onlyText(innerChildren).replace(/\n$/u, '')}
            </MarkdownPre>
          );
        },
        table: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTable {...innerProps}>
            {innerChildren}
          </MarkdownTable>
        ),
        thead: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTHead {...innerProps}>
            {innerChildren}
          </MarkdownTHead>
        ),
        th: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTh {...innerProps}>
            {innerChildren}
          </MarkdownTh>
        ),
        tbody: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTBody {...innerProps}>
            {innerChildren}
          </MarkdownTBody>
        ),
        tr: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTr {...innerProps}>
            {innerChildren}
          </MarkdownTr>
        ),
        td: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownTd {...innerProps}>
            {innerChildren}
          </MarkdownTd>
        )
      }}
      //   hr: ({ className, node, ref, ...props }) => (
      //     <Divider className={clsx('mb-0', className)} {...props} />
      //   ),
      //   img: ({ src, width, height, node, ref, ...props }) => {
      //     if (!src) {
      //       return null;
      //     }
      //
      //     return (
      //       <ExpandableImage src={src} {...props} />
      //     );
      //   },
      //   table: ({ children, className, node, ref, ...props }) => (
      //     <Table bordered large scrollable striped className={className} {...props}>
      //       {children}
      //     </Table>
      //   ),
      //   video: ({ src, width, height, node, ref, ...props }) => {
      //     if (!src) {
      //       return null;
      //     }
      //
      //     return (
      //       <Video src={src} {...props} />
      //     );
      //   }
      // }}
    >
      {children}
    </ReactMarkdown>
  </article>
);
