import { ensOrgUrl } from "@/config";
import { Anchor, Card } from "@mantine/core";

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