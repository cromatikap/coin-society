import { Card, Table, Title } from "@mantine/core";
import { members } from "./data";
import RowMember from "./RowMember";

export default function Members() {
  return <Card>
    <Title order={3}>Members.</Title>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Address</Table.Th>
          <Table.Th>Occupation</Table.Th>
          <Table.Th visibleFrom="sm">Identity</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {members.map((member) => (
          <RowMember
            key={member.address}
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

