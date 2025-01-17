"use client";

import Members from "./Members";
import Governance from "./Governance";
import { Group } from "@mantine/core";
export default function CommunityPage() {
  return (
    <Group justify="center" gap="xl" align="start">
      <Members />
      <Governance />
    </Group>
  );
}