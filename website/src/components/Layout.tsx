import { AppShell } from "@mantine/core";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell>
      <Navigation />
      <AppShell.Main p={{ base: 0, sm: 'xl' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
} 