import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';

export interface BreadcrumbItem {
  /** Visible text for the crumb. */
  label: string;
  /** If provided, the crumb renders as a link. The last item (or any item without an href) renders as the current page. */
  href?: string;
}

export interface BreadcrumbsProps {
  /** Ordered list of crumbs from root to current page. */
  items: BreadcrumbItem[];
  /** Separator between crumbs. Defaults to '/'. */
  separator?: React.ReactNode;
  /** Collapse the trail after this many items with an ellipsis. */
  maxItems?: number;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { items, separator = '/', maxItems } = props;

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator={separator} maxItems={maxItems}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isCurrent = isLast || !item.href;

        if (isCurrent) {
          return (
            <Typography key={index} color="text.primary" aria-current="page">
              {item.label}
            </Typography>
          );
        }

        return (
          <Link key={index} href={item.href} underline="hover" color="inherit">
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
