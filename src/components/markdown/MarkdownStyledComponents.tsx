import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

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
  <a className={clsx('m-0 [&:not(sup_&)]:text-[17px] font-light leading-[1.75] text-accent [&:not(sup_&)]:border-b-2 border-solid border-accent', className)} {...props}>
    {children}
  </a>
);

export const MarkdownKbd: FC<ComponentProps<'kbd'>> = ({ className, children, ...props }) => (
  <kbd className={clsx('m-0 font-code text-[13px] font-medium leading-[1.75] text-article bg-background-light border border-solid border-border-dark border-b-[3px] py-0.5 px-1.75', className)} {...props}>
    {children}
  </kbd>
);

export const MarkdownSup: FC<ComponentProps<'sup'>> = ({ className, children, ...props }) => (
  <sup className={clsx('m-0 text-[11px] font-semibold leading-[1.75] text-accent', className)} {...props}>
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
  <li className={clsx('m-0 text-[17px] font-light leading-[1.85] text-article [&.task-list-item]:gap-2.5 [&.task-list-item]:items-start', className)} {...props}>
    {children}
  </li>
);

export const MarkdownInput: FC<ComponentProps<'input'>> = ({ className, checked, ...props }) => (
  <input checked={checked} className={clsx('size-4.5 shrink-0 border-2 border-solid mt-0.75 flex items-center justify-center text-xs font-bold', checked === true ? 'border-accent bg-accent text-background' : 'border-text', className)} {...props} />
);
