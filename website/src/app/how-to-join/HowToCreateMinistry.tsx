"use client";

import { Card, Subtitle } from "@/components/Layout";
import { IconBuildingCommunity } from "@tabler/icons-react";
import { Text, Anchor, List } from "@mantine/core";
import type { LayoutCardOptProps } from "@/components/Layout";

function Highlight(props: { children: React.ReactNode }) {
  return <Text span c="pink" ff={"monospace"}>{props.children}</Text>;
}

export default function HowToCreateMinistry(props: LayoutCardOptProps) {

  return <Card
    {...props }
    icon={<IconBuildingCommunity />}
    title="How to create a ministry?"
    sub="Create your own governance structure and propose it to the community instantly."
  >
    <Subtitle>
      1. Define your ministry and its purpose.
    </Subtitle>
    <List>
      <List.Item>1. <Highlight>Name</Highlight> of the ministry - e.g. Education.</List.Item>
      <List.Item>2. <Highlight>Treasury</Highlight> address - e.g. bc1q...</List.Item>
      <List.Item>3. <Highlight>Members</Highlight> addresses list - e.g. bc1q..., bc1q..., bc1q...</List.Item>
      <List.Item>4. <Highlight>Quorum</Highlight> (number of members required to sign a spending proposal) - e.g. 2.</List.Item>
    </List>
    <Subtitle>
      2. Add your ministry to <Anchor target="_blank" href="https://github.com/cromatikap/coin-society/blob/1b5e3b0c82299d3ff7651e5332d62943661abed7/website/src/data/Ministries.ts#L18-L40">
        this file
      </Anchor>.
    </Subtitle>
  </Card>
}