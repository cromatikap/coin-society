"use client";

import { AppShell } from "@mantine/core";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
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
  
  // Don't wrap with Layout if we're on the home page
  if (pathname === '/') {
    return <>{children}</>;
  }
  
  return <Layout>{children}</Layout>;
} 