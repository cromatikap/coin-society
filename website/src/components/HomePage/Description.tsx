import { Card, Title, Text, Anchor, Blockquote, Group } from "@mantine/core";
import FAQ from "./FAQ";
import { ensProfileUrl } from "@/config";
import { IconHeartBitcoin, IconMoodBitcoin, IconPhotoBitcoin } from "@tabler/icons-react";

export default function Description() {
  return <Card shadow="sm" withBorder>
    <Title>About</Title>
    <Title order={4} py="xs">Demistifying and democratizing blockchain technology.</Title>
    <Text fw={500} mb="md">
      <Anchor href={ensProfileUrl} target="_blank">coin-society.eth</Anchor> is a non-profit foundation of researchers to experiment decentralized circular economy, governance consensus using environmentally sustainable solutions.
    </Text>
    <Title order={4} py="xs">Inclusive for all, regardless of skill set or professional experience.</Title>
    <Group gap="xl" my="xl" align="stretch">
      <Blockquote flex={1} miw={8*40} color="green" cite="– Agustin" icon={<IconMoodBitcoin />}>
        &laquo; Now, that&apos;s the kind of government transparency that I&apos;m here for &raquo;
      </Blockquote>
      <Blockquote flex={1} miw={8*30} color="grape" cite="– Casandra" icon={<IconHeartBitcoin />}>
        &laquo; Love the concept!! &raquo;
      </Blockquote>
      <Blockquote flex={1} miw={8*30} color="violet" cite="– Eve" icon={<IconPhotoBitcoin />}>
        &laquo; That&apos;s like a video game &raquo;
      </Blockquote>
    </Group>

    <Title>FAQ</Title>
    <FAQ />
  </Card>
}