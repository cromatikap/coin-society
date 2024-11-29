import { Card, Divider, List, Title, BackgroundImage, Badge } from "@mantine/core";
import Picture from "@/public/banner-research.jpg"

export default function ResearchProgram() {
  return <Card radius="md">
      <Card.Section>
        <BackgroundImage src={Picture.src} h={{base: 8*20, md: 8*30}} style={{backgroundPositionY: "top"}}>
        <Badge size="xl" m="sm" color="green">Research Program.</Badge>
        </BackgroundImage>
      </Card.Section>
      <Title order={4} py="xs" c="dimmed">Bridging experimental research and learning for blockchain excellence.</Title>
      <Divider />
      <Title order={5} py="sm" c="dimmed">Topics</Title>
      <Title order={6} py="xs">Accessible micro-payments</Title>
      <List>
        <List.Item>Lightning network</List.Item>
        <List.Item>ERC-20 token on L2 EVM compatible</List.Item>
      </List>
    </Card>
}