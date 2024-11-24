import { Title, Text } from "@mantine/core";
import FAQ from "./FAQ";
import {CardPrimary, LinkOrg} from "../Utils";

export default function Description() {
  return <CardPrimary>
    <Title order={2}>About.</Title>
    <Title order={4} py="xs" c="dimmed">Demistifying and democratizing blockchain technology.</Title>
    <Text fw={500} mb="md">
      <LinkOrg /> is a non-profit foundation of researchers to experiment decentralized circular economy, governance consensus using environmentally sustainable solutions.
    </Text>
    <Title order={3}>FAQ.</Title>
    <FAQ />
  </CardPrimary>
}