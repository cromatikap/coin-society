import { ensOrgUrl } from "@/config";
import { Anchor, Card, Title } from "@mantine/core";

export function LinkExt({href, children}: {href: string, children: React.ReactNode}) {
  return <Anchor href={href} target="_blank" rel="noreferrer" display="flex">
    {children}
  </Anchor>
}

export function LinkOrg() {
  return <Anchor href={ensOrgUrl} target="_blank" rel="noreferrer">
    coin-society.eth
  </Anchor>
}

export function CardPrimary({children}: {children: React.ReactNode}) {
  return <Card shadow="sm" withBorder>
    {children}
  </Card>
}

export function Headline({sub, children}: {sub?: string, children: React.ReactNode}) {
  return <>
    <Title order={2} mb="xs">
      {children}
    </Title>
    {sub && <Title order={4} c="dimmed" mb="md">
      {sub}
    </Title>}
  </>
}