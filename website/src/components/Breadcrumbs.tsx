"use client";

import { Breadcrumbs, Anchor } from '@mantine/core';
import { usePathname } from 'next/navigation';

export default function BreadcrumbsNav() {
  const pathname = usePathname();
  
  const breadcrumbs = pathname.split('/').filter(Boolean).map((path, index, array) => ({
    title: path.charAt(0).toUpperCase() + path.slice(1),
    href: '/' + array.slice(0, index + 1).join('/')
  }));

  return <>
      <Breadcrumbs separator="→" separatorMargin="md" p="md">
        {breadcrumbs.map((breadcrumb, index) => (
          <Anchor href={breadcrumb.href} key={index}>
            {breadcrumb.title}
          </Anchor>
        ))}
      </Breadcrumbs>
    </>
}