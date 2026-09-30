import {
  HEADING_ANCHOR_CLASS_NAME,
  MarkdownA, MarkdownBlockquote,
  MarkdownCode,
  MarkdownDel,
  MarkdownEm, MarkdownFigCaption,
  MarkdownH1,
  MarkdownH2,
  MarkdownH3,
  MarkdownH4, MarkdownHr, MarkdownImg, MarkdownInput, MarkdownKbd, MarkdownLi, MarkdownOl,
  MarkdownP, MarkdownPre, MarkdownSection,
  MarkdownStrong, MarkdownSup, MarkdownTable, MarkdownTBody, MarkdownTd, MarkdownTh, MarkdownTHead, MarkdownTr, MarkdownUl, MarkdownVideo
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
  noInternalMargins?: boolean | undefined;
}

const articleSpacing = clsx(
  '[&>*]:mt-4',
  '[&>h1]:mt-10',
  '[&>h2]:mt-9',
  '[&>h3]:mt-6',
  '[&>h4]:mt-5',
  '[&>p]:mt-3.5',
  '[&>ul]:mt-3.5',
  '[&>ol]:mt-3.5',
  '[&>blockquote]:mt-5',
  '[&>div]:mt-5',
  '[&>figure]:mt-5',
  '[&>video]:mt-5',
  '[&>hr]:mt-2',
  '[&>section]:mt-7'
);

export const Markdown: FC<Props> = ({ children, className, noInternalMargins = false, ...props }) => (
  <article className={clsx('max-w-3xl mx-auto', articleSpacing, className)} {...props}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownH1 className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownH1>
        ),
        h2: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownH2 className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownH2>
        ),
        h3: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownH3 className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownH3>
        ),
        h4: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownH4 className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownH4>
        ),
        p: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownP className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
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
        ul: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownUl className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownUl>
        ),
        ol: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownOl className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
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
        blockquote: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownBlockquote className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownBlockquote>
        ),
        pre: ({ children: innerChildren, className: innerClassName, node }) => {
          const codeChild = node?.children.find((child) => child.type === 'element' && child.tagName === 'code');
          const codeClassName = codeChild?.type === 'element' ? codeChild.properties.className : undefined;

          return (
            <MarkdownPre className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName, codeClassName)}>
              {onlyText(innerChildren).replace(/\n$/u, '')}
            </MarkdownPre>
          );
        },
        table: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownTable className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
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
        ),
        img: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownImg {...innerProps}>
            {innerChildren}
          </MarkdownImg>
        ),
        figcaption: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownFigCaption className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownFigCaption>
        ),
        video: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownVideo {...innerProps}>
            {innerChildren}
          </MarkdownVideo>
        ),
        hr: ({ children: innerChildren, className: innerClassName, node: _node, ...innerProps }) => (
          <MarkdownHr className={clsx(!noInternalMargins && 'mx-5 xl:mx-0', innerClassName)} {...innerProps}>
            {innerChildren}
          </MarkdownHr>
        ),
        section: ({ children: innerChildren, node: _node, ...innerProps }) => (
          <MarkdownSection {...innerProps}>
            {innerChildren}
          </MarkdownSection>
        )
      }}
      rehypePlugins={[
        rehypeRaw,
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: 'prepend',
          properties: { className: HEADING_ANCHOR_CLASS_NAME, ariaLabel: 'Link to this section' },
          content: { type: 'text', value: '#' }
        }],
        rehypeFigure,
        [rehypeVideo, { details: false }]
      ]}
    >
      {children}
    </ReactMarkdown>
  </article>
);
