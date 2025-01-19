import { Table, Stack } from "@mantine/core";
import { members, candidates } from "@/data";
import RowMember from "./RowMember";
import { IconUsersGroup } from "@tabler/icons-react";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";
import RowCandidate from "./RowCandidate";

export default function Members(props: LayoutCardOptProps) {
  return <Card 
    {...props}
    icon={<IconUsersGroup />}
    title="Community."
    sub="Certified and aspiring community members."
  >
    <Stack gap="xl">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={300}>Members</Table.Th>
            <Table.Th w={300}></Table.Th>
            <Table.Th w={300} visibleFrom="sm"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {members.map((member, i) => (
            <RowMember
              key={i}
              occupation={member.occupation}
              address={member.address}
              txRegistration={member.txRegistration}
              certification={member.certification}
              identity={member.identity}
            />
          ))}
        </Table.Tbody>
      </Table>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={300}>Candidates</Table.Th>
            <Table.Th w={300}></Table.Th>
            <Table.Th w={300} visibleFrom="sm"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {candidates.map((member, i) => (
            <RowCandidate
              key={i}
              id={i}
              occupation={member.occupation}
              address={member.address}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  </Card>
}

