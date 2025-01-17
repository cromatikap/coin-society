"use client";

import Navigation from "@/components/Navigation";
import { AppShell } from "@mantine/core";
import HowToJoin from "@/components/HowToJoin";

export default function HowToJoinPage() {
  return (
    <AppShell>
      <Navigation />
      <AppShell.Main p={{ base: 0, sm: 'xl' }}>
        <HowToJoin />
      </AppShell.Main>
    </AppShell>
  );
} 