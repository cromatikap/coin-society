import { Title, Text } from "@mantine/core";
import FAQ from "./FAQ";
import { LinkOrg } from "../Utils";
import { Card } from "@/components/Layout";
import { IconComet } from "@tabler/icons-react";

export default function Description() {
  return <Card
    icon={<IconComet />}
    title="What is it about?"
    sub="Demistifying and democratizing blockchain technology."
  >
    <Text fw={500} mb="md">
      <LinkOrg /> is a non-profit foundation of researchers to experiment decentralized circular economy, governance consensus using environmentally sustainable solutions.
    </Text>
    <Title order={3}>FAQ.</Title>
    <FAQ />
  </Card>
}