import { clsx } from 'clsx';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

interface BreadcrumbLinkProps {
  className?: string;
  isFirst?: boolean;
  item: BreadcrumbItem;
}

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ className, item, isFirst }) => {
  const sharedClassName = 'text-muted -mb-0.5 xl:mb-0';
  const activeClassName = (item.active === true) && 'text-text hidden xl:inline-block';

  if ((item.active === true) || typeof item.href !== 'string') {
    return (
      <span className={clsx(sharedClassName, activeClassName, className)}>
        {item.label}
      </span>
    );
  }

  return (
    <Link className={clsx('group', sharedClassName, activeClassName, className)} href={item.href}>
      {
        isFirst === true && (
          <span className="inline-block xl:hidden me-1 transition-transform duration-200 ease-out group-hover:-translate-x-1">
            ←
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

interface Props extends Omit<ComponentProps<'section'>, 'children'> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: FC<Props> = ({ items, className, ...props }) => (
  <section className={clsx('py-3.5 xl:py-4 px-5 xl:px-10 border-b border-solid border-border flex flex-row items-center gap-1.5 xl:gap-3 text-[13px] xl:text-sm font-medium text-muted tracking-widest xl:tracking-normal uppercase xl:normal-case', className)} {...props}>
    {items.map((item, index) => (
      <BreadcrumbLink
        isFirst={index === 0}
        item={item}
        key={item.id}
        className={clsx(
          'not-last:after:content-["/"] after:ms-1.5 after:xl:ms-3',
          items[index + 1]?.active === true && 'after:hidden after:xl:inline-block'
        )}
      />
    ))}
  </section>
);
