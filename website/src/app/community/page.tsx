"use client";

import Members from "./members";
import Governance from "./governance";
import { Group } from "@mantine/core";

export default function CommunityPage() {
  return (
    <Group justify="stretch" gap="xl" align="start">
      <Members
        miw={{xs: "100%", lg: "0"}}
        maw={{xs: "100%", lg: "48%"}}
        withBorder
      />
      <Governance
        miw={{xs: "100%", lg: "0"}}
        maw={{xs: "100%", lg: "48%"}}
      />
    </Group>
  );
}