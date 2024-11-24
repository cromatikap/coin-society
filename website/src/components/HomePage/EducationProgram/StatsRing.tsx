/* originally copied from https://ui.mantine.dev/category/stats/ */

import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, Text } from '@mantine/core';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const stat = {
  label: 'Eligible candidates.',
  stats: '6',
  progress: 65,
  color: 'teal',
  icon: 'up'
} as const;


export function StatsRing() {
  const Icon = icons[stat.icon];
  return (
    <Paper withBorder radius="md" p="xs" key={stat.label}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: stat.progress, color: stat.color }]}
          label={
            <Center>
              <Icon size={20} stroke={1.5} />
            </Center>
          }
        />

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {stat.label}
          </Text>
          <Text fw={700} size="xl">
            {stat.stats}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}