import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface BreadcrumbLinkProps {
  className?: string;
  item: BreadcrumbItem;
}

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ className, item }) => {
  const sharedClassName = 'text-muted';
  const activeClassName = (item.active === true) && 'text-text';

  if ((item.active === true) || typeof item.href !== 'string') {
    return (
      <span className={clsx(sharedClassName, activeClassName, className)}>
        {item.label}
      </span>
    );
  }

  return (
    <Link className={clsx(sharedClassName, activeClassName, className)} href={item.href}>
      {item.label}
    </Link>
  );
};

export interface BreadcrumbItem {
  active?: boolean;
  href?: string;
  id: string;
  label: string;
}

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: BreadcrumbItem[];
}

export const Breadcrumb: FC<Props> = ({ items, className, ...props }) => (
  <section className={clsx('py-4 px-10 border-b border-solid border-border flex flex-row items-center gap-3 text-sm font-medium text-muted', className)} {...props}>
    {items.map((item) => (
      <BreadcrumbLink className="not-last:after:content-['/'] after:ms-3" item={item} key={item.id} />
    ))}
  </section>
);
