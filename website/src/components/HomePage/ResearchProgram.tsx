import { Card, Divider, List, Title, BackgroundImage, Badge } from "@mantine/core";
import { CardPrimary } from "@/components/Utils";
import Picture from "@/public/spacex-OHOU-5UVIYQ-unsplash.jpg"

export default function ResearchProgram() {
  return <CardPrimary>
      <Card.Section>
        <BackgroundImage src={Picture.src} h={{base: 8*20, md: 8*30}} style={{backgroundPositionY: "bottom"}}>
        <Badge size="xl" m="sm" color="green">Coin Labs Research Program.</Badge>
        </BackgroundImage>
      </Card.Section>
      <Title order={4} py="xs" c="dimmed">Researching and developing blockchain technology.</Title>
      <Divider />
      <Title order={5} py="sm" c="dimmed">Topics</Title>
      <Title order={6} py="xs">Accessible micro-payments</Title>
      <List>
        <List.Item>Lightning network</List.Item>
        <List.Item>ERC-20 token on L2 EVM compatible</List.Item>
      </List>
    </CardPrimary>
}