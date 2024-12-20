import { Title, Text, Card } from "@mantine/core";
import FAQ from "./FAQ";
import {Headline, LinkOrg} from "../Utils";

export default function Description() {
  return <Card>
    <Headline 
      sub="Demistifying and democratizing blockchain technology."
    >
      What is it about?
    </Headline>
    <Text fw={500} mb="md">
      <LinkOrg /> is a non-profit foundation of researchers to experiment decentralized circular economy, governance consensus using environmentally sustainable solutions.
    </Text>
    <Title order={3}>FAQ.</Title>
    <FAQ />
  </Card>
}