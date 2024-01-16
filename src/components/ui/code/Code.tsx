import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from 'clsx';
import './styles.css';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'> {
  children?: React.ReactNode
  multiLine?: boolean
  language?: string
  codeClassName?: string
}

export const Code: React.FC<Props> = ({
  className,
  children,
  multiLine = false,
  language,
  codeClassName,
  ...props
}) => {
  const sharedClassName = '!bg-codeGray ![&_*]:bg-codeGray !rounded-[4px]';
  const multiLineClassName = '!hyphens-none !leading-normal !overflow-x-scroll !py-[1.6rem] !px-[2.4rem] !whitespace-pre !m-0';

  const codeComponent = (
    <code className={clsx(sharedClassName, 'px-[0.4rem]', codeClassName)}>
      {children}
    </code>
  );

  if (language) {
    return (
      <SyntaxHighlighter
        className={clsx(sharedClassName, multiLineClassName, 'highlighted', className)}
        PreTag="div"
        language={language}
        {...props}
        style={oneLight}
      >
        {String(children).replace(/n$/, '')}
      </SyntaxHighlighter>
    );
  }

  if (multiLine) {
    return (
      <pre className={clsx(sharedClassName, multiLineClassName, className)}>
        {codeComponent}
      </pre>
    );
  }

  return codeComponent;
};
