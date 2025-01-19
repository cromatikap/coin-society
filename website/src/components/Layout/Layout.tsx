"use client";

import { ReactNode } from "react";
import { AppShell } from "@mantine/core";
import Navigation from "@/components/Navigation";
import { usePathname } from 'next/navigation';
import BreadcrumbsNav from "@/components/Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppShell>
      <Navigation />
      <BreadcrumbsNav />
      <AppShell.Main p={{ base: 0, sm: 'xl' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return <>{children}</>;
  }
  
  return <Layout>{children}</Layout>;
} 