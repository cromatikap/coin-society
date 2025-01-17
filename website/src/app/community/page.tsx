"use client";

import { AppShell } from "@mantine/core";
import Members from "./Members";
import Governance from "./Governance";
import Navigation from "@/components/Navigation";

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