"use client";

import { AppShell } from "@mantine/core";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppShell>
      <Navigation />
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