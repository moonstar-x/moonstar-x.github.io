import { ArrowLeftIcon } from '@components/icons/ArrowLeftIcon';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface BreadcrumbLinkProps {
  isFirst?: boolean;
  item: BreadcrumbItem;
}

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ item, isFirst }) => {
  if ((item.active === true) || typeof item.href !== 'string') {
    return (
      <span aria-current={item.active === true ? 'page' : undefined} className={clsx(item.active === true && 'text-text')}>
        {item.label}
      </span>
    );
  }

  return (
    <Link className="group" href={item.href}>
      {
        isFirst === true && (
          <span aria-hidden="true" className="inline-block xl:hidden me-1 transition-transform duration-200 ease-out group-hover:-translate-x-1">
            <ArrowLeftIcon />
          </span>
        )
      }
      <span className="inline-block accent-underline transition-colors duration-200 ease-out group-hover:text-accent group-hover:accent-underline-shown group-focus-visible:accent-underline-shown">
        {item.label}
      </span>
    </Link>
  );
};

export interface BreadcrumbItem {
  active?: boolean;
  href?: string;
  id: string;
  label: string;
}

interface Props extends Omit<ComponentProps<'nav'>, 'children'> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: FC<Props> = ({ items, className, ...props }) => (
  <nav aria-label="Breadcrumb" className={clsx('py-3.5 xl:py-4 px-5 xl:px-10 border-b border-solid border-border text-[13px] xl:text-sm font-medium text-muted tracking-widest xl:tracking-normal uppercase xl:normal-case', className)} {...props}>
    <ol className="flex flex-row items-center gap-1.5 xl:gap-3">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={clsx(
            'text-muted -mb-0.5 xl:mb-0',
            'not-last:after:content-["/"] after:ms-1.5 after:xl:ms-3',
            item.active === true && 'hidden xl:block',
            items[index + 1]?.active === true && 'after:hidden after:xl:inline-block'
          )}
        >
          <BreadcrumbLink isFirst={index === 0} item={item} />
        </li>
      ))}
    </ol>
  </nav>
);
