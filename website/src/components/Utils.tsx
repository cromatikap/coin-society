import { ensOrgUrl } from "@/config";
import { Anchor, Card, Group, Title } from "@mantine/core";

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

export function CardSecondary({children}: {children: React.ReactNode}) {
  return <Card shadow="sm" withBorder w="fit-content">
    {children}
  </Card>
}

export function Headline({sub, icon, children}: {sub?: string, icon?: React.ReactElement, children: React.ReactNode}) {
  return <>
    <Title order={2} mb="xs">
      <Group gap="md">
        {icon}
        {children}
      </Group>
    </Title>
    {sub && <Title order={4} c="dimmed" mb="md">
      {sub}
    </Title>}
  </>
}