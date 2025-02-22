import { IconArrowsJoin, IconArrowsRight, IconArrowsShuffle2, IconBuildingBank, IconCrown, IconSpy, IconUsersGroup } from "@tabler/icons-react";
import Department from "./Department";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";
import { Anchor, Flex, Group, Stack, Title, Text, Card as MantineCard, ThemeIcon, Divider } from "@mantine/core";
import { departments } from "@/data";

export default function Governance(props: LayoutCardOptProps ) {

  return <Card
    {...props}
    icon={<IconBuildingBank />}
    title="Governance."
    sub={<>Departments. <Anchor href="/how-to-join" target="_blank" rel="noreferrer">Create your own here!</Anchor></>}
  >
    <Flex wrap="wrap" gap="xs" align="stretch">
      <Legend />
      {departments.map((department) => 
        <Department
          key={department.name}
          {...department}
          Icon={department.Icon}
        />
      )}
    </Flex>
  </Card>
}

function Legend() {
  return (
    <MantineCard withBorder>
      <Stack gap="xs">
        <Title order={4}>Legend</Title>
        <Divider variant="dashed" label="democratic" />
        <Group gap="xs">
          <ThemeIcon color="green" size={28} radius="xl">
            <IconUsersGroup size={20} />
          </ThemeIcon>
          <Text>Shared Governance</Text>
        </Group>
        <Group gap="xs">
          <IconArrowsJoin color="green" />
          <Text>Multi-sig</Text>
        </Group>
        <Divider variant="dashed" label="anarchist" />
        <Group gap="xs">
          <ThemeIcon color="orange" size={28} radius="xl">
            <IconSpy size={20} />
          </ThemeIcon>
          <Text>Private Group</Text>
        </Group>
        <Group gap="xs">
          <IconArrowsShuffle2 color="orange" />
          <Text>Coinjoin</Text>
        </Group>
        <Divider variant="dashed" label="totalitarian" />
        <Group gap="xs">
          <ThemeIcon color="red" size={28} radius="xl">
            <IconCrown size={20} />
          </ThemeIcon>
          <Text>Sole Authority</Text>
        </Group>
        <Group gap="xs">
          <IconArrowsRight color="red" />
          <Text>Single-sig</Text>
        </Group>
      </Stack>
    </MantineCard>
  );
}