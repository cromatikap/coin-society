import { ensOrgUrl } from "@/config";
import { Anchor, Group, Title } from "@mantine/core";

export function LinkExt({ 
  href, 
  url, 
  children
}: {
  href?: string;
  url?: string;
  children: React.ReactNode;
}) {
  const linkUrl = url || href || "#";
  return <Anchor href={linkUrl} target="_blank" rel="noreferrer" display="flex">
    {children}
  </Anchor>
}

export function LinkOrg() {
  return <Anchor href={ensOrgUrl} target="_blank" rel="noreferrer">
    coin-society.eth
  </Anchor>
}

export function Headline({sub, icon, children}: {sub?: React.ReactNode, icon?: React.ReactElement, children: React.ReactNode}) {
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