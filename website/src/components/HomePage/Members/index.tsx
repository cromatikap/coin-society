import { Card, Table } from "@mantine/core";
import { members } from "../../../Members";
import RowMember from "./RowMember";
import { Headline } from "@/components/Utils";
import { IconUsers } from "@tabler/icons-react";

export default function Members() {
  return <Card miw={{xs: 600, sm: 700}}>
    <Headline
      sub="Certified and aspiring community members."
      icon={<IconUsers />}
    >
      Community.
    </Headline>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Address</Table.Th>
          <Table.Th>Occupation</Table.Th>
          <Table.Th visibleFrom="sm">Identity</Table.Th>
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

