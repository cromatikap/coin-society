"use client";

import { Card, Title, Subtitle } from "@/components/Layout";
import { Anchor, Text, List, Tabs, Tooltip } from "@mantine/core";
import { IconPuzzle } from "@tabler/icons-react";
import { useState } from "react";

export default function HowToJoin() {
  const [activeTab, setActiveTab] = useState<string | null>('first-time');

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  }
  
  return <Card
    icon={<IconPuzzle />}
    title="How to Join?"
    sub="All you need is an empty Bitcoin wallet address."
    withBorder
  >
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first-time">It&apos;s my first time</Tabs.Tab>
        <Tabs.Tab value="have-address">I already have an address</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first-time">
        <Title>Welcome! Let&apos;s get you started:</Title>
        <Subtitle>1. Download and install <Anchor href="https://bluewallet.io/" target="_blank" rel="noopener noreferrer">Blue Wallet</Anchor>.</Subtitle>
        <Subtitle>2. Generate a new wallet:</Subtitle>
        <List>
          <List.Item>Write down the <Tooltip label="12 random secret words"><Text span>seed phrase</Text></Tooltip> on a paper with a pen (not on electronic device).</List.Item>
          <List.Item>Click on the &quot;Receive&quot; button in the Blue Wallet app.</List.Item>
          <List.Item>Click on your address (bc1q...) to copy it in your clipboard.</List.Item>
        </List>
        <Subtitle>3. Now that you have your address, go to <Anchor href="#" onClick={() => changeTab('have-address')}>next steps</Anchor>.</Subtitle>
      </Tabs.Panel>

      <Tabs.Panel value="have-address">
        <Title>Great! Happy to have you!</Title>
        <Text>
          Send your Bitcoin wallet address to the person that referred you to the coin society or find a developer in the <Anchor href="/community">community</Anchor>.
        </Text>

        <Title>If you are a developer:</Title>
        <Text>
          Add yourself to <Anchor target="_blank" href="https://github.com/cromatikap/coin-society/blob/main/website/src/Members.ts">this file</Anchor>.
        </Text>
        <Text>
          Upon reception of your Pull Request, we will review the candidature.<br />
          When the Pull Request is merged, you will be considered as a member of the Coin Society.
        </Text>
      </Tabs.Panel>
    </Tabs>
  </Card>
} 