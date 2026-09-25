import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const MarkdownH1: FC<ComponentProps<'h1'>> = ({ className, children, ...props }) => (
  <h1 className={clsx('font-title font-black text-[64px] leading-[0.9] tracking-[-0.045em] uppercase', className)} {...props}>
    {children}
  </h1>
);

export const MarkdownH2: FC<ComponentProps<'h2'>> = ({ className, children, ...props }) => (
  <h2 className={clsx('font-title font-black text-[42px] leading-[0.95] tracking-[-0.035em] uppercase pt-2.5 border-t-[3px] border-solid border-text', className)} {...props}>
    {children}
  </h2>
);

export const MarkdownH3: FC<ComponentProps<'h3'>> = ({ className, children, ...props }) => (
  <h3 className={clsx('font-title font-black text-[28px] leading-none tracking-tight', className)} {...props}>
    {children}
  </h3>
);

export const MarkdownH4: FC<ComponentProps<'h4'>> = ({ className, children, ...props }) => (
  <h4 className={clsx('text-[15px] font-semibold tracking-[0.16em] uppercase text-accent', className)} {...props}>
    {children}
  </h4>
);

export const MarkdownP: FC<ComponentProps<'p'>> = ({ className, children, ...props }) => (
  <p className={clsx('m-0 text-[17px] font-light leading-[1.75] text-article', className)} {...props}>
    {children}
  </p>
);

export const MarkdownStrong: FC<ComponentProps<'strong'>> = ({ className, children, ...props }) => (
  <strong className={clsx('m-0 text-[17px] font-semibold leading-[1.75] text-article', className)} {...props}>
    {children}
  </strong>
);

export const MarkdownEm: FC<ComponentProps<'em'>> = ({ className, children, ...props }) => (
  <em className={clsx('m-0 text-[17px] font-light leading-[1.75] text-article', className)} {...props}>
    {children}
  </em>
);

export const MarkdownDel: FC<ComponentProps<'del'>> = ({ className, children, ...props }) => (
  <del className={clsx('m-0 text-[17px] font-light leading-[1.75] text-dark', className)} {...props}>
    {children}
  </del>
);

export const MarkdownCode: FC<ComponentProps<'code'>> = ({ className, children, ...props }) => (
  <code className={clsx('m-0 font-code text-[15px] font-light leading-[1.75] text-article bg-background-dark border border-solid border-border py-px px-0.75', className)} {...props}>
    {children}
  </code>
);

export const MarkdownA: FC<ComponentProps<'a'>> = ({ className, children, ...props }) => (
  <a className={clsx('m-0 text-[17px] font-light leading-[1.75] text-accent border-b-2 border-solid border-accent', className)} {...props}>
    {children}
  </a>
);

export const MarkdownKbd: FC<ComponentProps<'kbd'>> = ({ className, children, ...props }) => (
  <kbd className={clsx('m-0 font-code text-[13px] font-medium leading-[1.75] text-article bg-background-light border border-solid border-border-dark border-b-[3px] py-0.5 px-1.75', className)} {...props}>
    {children}
  </kbd>
);

export const MarkdownSup: FC<ComponentProps<'sup'>> = ({ className, children, ...props }) => (
  <sup className={clsx('m-0 font-semibold leading-[1.75] text-accent [&_a]:border-none [&_a]:text-[11px]', className)} {...props}>
    {children}
  </sup>
);

export const MarkdownUl: FC<ComponentProps<'ul'>> = ({ className, children, ...props }) => (
  <ul className={clsx('m-0 ps-5 text-[17px] font-light leading-[1.85] text-article list-disc [&_ul]:list-[circle] [&_ul_ul]:list-[square]', className)} {...props}>
    {children}
  </ul>
);

export const MarkdownOl: FC<ComponentProps<'ol'>> = ({ className, children, ...props }) => (
  <ol className={clsx('m-0 ps-5.5 text-[17px] font-light leading-[1.85] text-article list-decimal', className)} {...props}>
    {children}
  </ol>
);

export const MarkdownLi: FC<ComponentProps<'li'>> = ({ className, children, ...props }) => (
  <li className={clsx('m-0 text-[17px] font-light leading-[1.85] text-article [&.task-list-item]:flex [&.task-list-item]:gap-2.5 [&.task-list-item]:items-start', className)} {...props}>
    {children}
  </li>
);

export const MarkdownInput: FC<ComponentProps<'input'>> = ({ className, checked, ...props }) => (
  <input readOnly checked={checked} className={clsx('appearance-none size-4.5 shrink-0 border-2 border-solid mt-1.5', checked === true ? 'border-accent bg-accent markdown-checkbox-check' : 'border-text', className)} {...props} />
);

export const MarkdownBlockquote: FC<ComponentProps<'blockquote'>> = ({ className, children, ...props }) => (
  <blockquote className={clsx('m-0 border-s-4 border-solid border-accent px-1 pb-5.5 flex flex-col gap-2.5 text-article [&_p]:ms-6.5 [&_p]:text-[20px] [&_p]:font-light [&_p]:leading-[1.6]', className)} {...props}>
    {children}
  </blockquote>
);

export const MarkdownPre: FC<ComponentProps<typeof SyntaxHighlighter> & { className?: string | undefined }> = ({ className, children, ...props }) => {
  const language = /language-(?<lang>\w+)/u.exec(className ?? '')?.groups?.['lang'];

  return (
    <div className={clsx('bg-text flex flex-col', className)}>
      <div className="py-2.5 px-4.5 border-b border-solid border-code flex items-center justify-end">
        <span className="font-code text-[11px] tracking-widest uppercase text-accent-light">
          {language}
        </span>
      </div>
      <div className="m-0 font-code text-sm leading-[1.75] text-code overflow-hidden **:bg-text!">
        <SyntaxHighlighter language={language} PreTag="pre" {...props} style={oneDark}>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const MarkdownTable: FC<ComponentProps<'table'>> = ({ className, children, ...props }) => (
  <table className={clsx('w-full border-collapse text-[16px]', className)} {...props}>
    {children}
  </table>
);

export const MarkdownTHead: FC<ComponentProps<'thead'>> = ({ className, children, ...props }) => (
  <thead className={clsx('bg-text text-background', className)} {...props}>
    {children}
  </thead>
);

export const MarkdownTh: FC<ComponentProps<'th'>> = ({ className, children, ...props }) => (
  <th className={clsx('text-left font-title font-black text-[13px] tracking-[0.14em] uppercase py-2.75 px-4', className)} {...props}>
    {children}
  </th>
);

export const MarkdownTBody: FC<ComponentProps<'tbody'>> = ({ className, children, ...props }) => (
  <tbody className={clsx('font-light text-article [&_tr]:border-b [&_tr]:nth-[2n]:bg-background-table-alt', className)} {...props}>
    {children}
  </tbody>
);

export const MarkdownTr: FC<ComponentProps<'tr'>> = ({ className, children, ...props }) => (
  <tr className={clsx('border-solid border-border', className)} {...props}>
    {children}
  </tr>
);

export const MarkdownTd: FC<ComponentProps<'td'>> = ({ className, children, ...props }) => (
  <td className={clsx('py-2.75 px-4', className)} {...props}>
    {children}
  </td>
);

export const MarkdownImg: FC<ComponentProps<'img'>> = ({ className, alt, ...props }) => (
  <img alt={alt ?? 'image'} className={clsx('w-full h-auto object-cover', className)} {...props} />
);

export const MarkdownFigCaption: FC<ComponentProps<'figcaption'>> = ({ className, children, ...props }) => (
  <figcaption className={clsx('text-sm font-light leading-[1.55] text-muted', className)} {...props}>
    {children}
  </figcaption>
);

export const MarkdownVideo: FC<ComponentProps<'video'>> = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video className={clsx('w-full h-auto aspect-video object-contain bg-text', className)} {...props} />
);

export const MarkdownHr: FC<ComponentProps<'hr'>> = ({ className, children, ...props }) => (
  <hr className={clsx('h-0 pt-3 pb-7 font-code border-none flex items-center justify-center after:content-["..."] after:text-[32px] after:leading-none after:text-accent', className)} {...props} />
);

