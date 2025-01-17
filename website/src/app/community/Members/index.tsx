import { Table } from "@mantine/core";
import { members } from "@/Members";
import RowMember from "./RowMember";
import { IconUsersGroup } from "@tabler/icons-react";
import { Card } from "@/components/Layout";

export default function Members() {
  return <Card 
    icon={<IconUsersGroup />}
    title="Community."
    sub="Certified and aspiring community members."
  >
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th w={300}>Address</Table.Th>
          <Table.Th w={300}>Occupation</Table.Th>
          <Table.Th w={300} visibleFrom="sm">Identity</Table.Th>
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

