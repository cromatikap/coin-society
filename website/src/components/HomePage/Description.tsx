import { Title, Text } from "@mantine/core";
import FAQ from "./FAQ";
import {Headline, CardPrimary, LinkOrg} from "../Utils";

export default function Description() {
  return <CardPrimary>
    <Headline sub="Demistifying and democratizing blockchain technology.">
      About.
    </Headline>
    <Text fw={500} mb="md">
      <LinkOrg /> is a non-profit foundation of researchers to experiment decentralized circular economy, governance consensus using environmentally sustainable solutions.
    </Text>
    <Title order={3}>FAQ.</Title>
    <FAQ />
  </CardPrimary>
}