"use client";

import { Card } from "@/components/Layout";
import { IconBuildingCommunity } from "@tabler/icons-react";
import { Text, Anchor, List, Title } from "@mantine/core";

function Highlight(props: { children: React.ReactNode }) {
  return <Text span c="red">{props.children}</Text>;
}

export default function HowToJoin() {

  return <Card 
    icon={<IconBuildingCommunity />}
    title="How to create a ministry?"
    sub="Create your own governance structure and propose it to the community instantly."
    withBorder
  >
    <Title order={5}>
      1. Define your ministry and its purpose.
    </Title>
    <List>
      <List.Item>Name of the ministry - e.g. <Highlight>Education</Highlight>.</List.Item>
      <List.Item>Wallet address of the treasury - e.g. <Highlight>bc1q...</Highlight>.</List.Item>
      <List.Item>The list of the ministry members (wallet addresses) - e.g. <Highlight>bc1q..., bc1q..., bc1q...</Highlight>.</List.Item>
      <List.Item>Quorum (number of members required to approve a proposal) - e.g. <Highlight>2</Highlight>.</List.Item>
    </List>
    <Title order={5} mt="xs">
      2. Add your ministry to <Anchor target="_blank" href="">
        this file
      </Anchor>.
    </Title>
  </Card>
}