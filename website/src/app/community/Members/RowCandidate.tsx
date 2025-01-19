import { Table, Text, Group, Stack } from "@mantine/core";
import type { Candidate } from "@/data";
import { ELIGIBLE_CANDIDATE } from "@/config";
import { IconCheck, IconClock } from "@tabler/icons-react";
import MemberIdentity from "@/components/MemberIdentity";

type Props = Candidate & {
  id: number;
}

export default function RowCandidate({ occupation, address, id }: Props) {
  const isEligible = address === ELIGIBLE_CANDIDATE;
  
  return (
    <Table.Tr>
      <Table.Td align="right">
        <MemberIdentity key={id} id={id+1} />
      </Table.Td>
      <Table.Td>
        <Group gap="sm">
          <Stack gap={0}>
            <Text size="sm" fw={500}>
              {occupation}
            </Text>
            <Text size="xs" c="dimmed">
              {isEligible ? "Eligible candidate" : "Waiting for their wallet address"}
            </Text>
          </Stack>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          {isEligible ? (
            <IconCheck size={16} style={{ color: 'var(--mantine-color-green-6)' }} />
          ) : (
            <IconClock size={16} style={{ color: 'var(--mantine-color-yellow-6)' }} />
          )}
        </Group>
      </Table.Td>
      
    </Table.Tr>
  );
} 