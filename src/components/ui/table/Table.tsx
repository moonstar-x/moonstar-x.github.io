import React from 'react';
import clsx from 'clsx';
import './styles.css';

type TableProps = Omit<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, 'ref'>;
type DivProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

type CommonProps = {
  hoverable?: boolean
  striped?: boolean
  bordered?: boolean
  large?: boolean
};

export type Props = CommonProps & (
  (TableProps & {
    scrollable?: false
  }) | (DivProps & {
    scrollable: true
  })
);

export const Table: React.FC<Props> = ({
  className,
  children,
  hoverable = false,
  striped = false,
  bordered = false,
  large = false,
  scrollable = false,
  ...props
}) => {
  const classNames = clsx(
    'table-component',
    hoverable && 'hoverable',
    striped && 'striped',
    bordered && 'bordered',
    large && 'large',
    className
  );

  if (scrollable) {
    return (
      <div className="overflow-x-scroll" {...props}>
        <table className={classNames}>
          {children}
        </table>
      </div>
    );
  }

  return (
    <table
      className={classNames}
      {...props}
    >
      {children}
    </table>
  );
};
