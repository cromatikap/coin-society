"use client";

import { AppShell } from "@mantine/core";
import Members from "@/components/HomePage/Members";
import Navigation from "@/components/Navigation";
import Governance from "@/components/HomePage/Governance";

export default function CommunityPage() {
  return (
    <AppShell>
      <Navigation />
      <AppShell.Main p={{ base: 'sm', sm: 'xl' }}>
        <Members />
        <Governance />
      </AppShell.Main>
    </AppShell>
  );
} 