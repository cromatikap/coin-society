"use client";

import { AppShell, Text } from "@mantine/core";
import Navigation from "@/components/Navigation";

export default function LearningPage() {
  return (
    <AppShell>
      <Navigation />
      <AppShell.Main p={{ base: 'sm', sm: 'xl' }}>
        <Text>Learning resources</Text>
      </AppShell.Main>
    </AppShell>
  );
} 