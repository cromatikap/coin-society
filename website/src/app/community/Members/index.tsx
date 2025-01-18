import { Table } from "@mantine/core";
import { members } from "@/data";
import RowMember from "./RowMember";
import { IconUsersGroup } from "@tabler/icons-react";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";

export default function Members(props: LayoutCardOptProps) {
  return <Card 
    {...props}
    icon={<IconUsersGroup />}
    title="Community."
    sub="Certified and aspiring community members."
  >
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th w={300}>Address book</Table.Th>
          <Table.Th w={300}></Table.Th>
          <Table.Th w={300} visibleFrom="sm"></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {members.map((member, i) => (
          <RowMember
            key={i}
            index={i}
            occupation={member.occupation}
            address={member.address}
            txRegistration={member.txRegistration}
            certification={member.certification}
            identity={member.identity}
          />
        ))}
      </Table.Tbody>
    </Table>
  </Card>
}

