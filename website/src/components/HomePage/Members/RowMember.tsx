import { Anchor, Group, Table, Tooltip } from "@mantine/core";
import type { Member } from "./data";
import { IconCertificate, IconFileBitcoin } from "@tabler/icons-react";
import { chainExplorer } from "@/config";
import ChainExplorer from "@/components/ChainExplorer";

export default function RowMember(props: Member) {
  return <Table.Tr>
    <Table.Td>
      <ChainExplorer address={props.address} />
    </Table.Td>
    <Table.Td>
      <Group justify="space-between">
        {props.occupation}
        <Group visibleFrom="xs">
          {props.txRegistration && 
            <Tooltip label="registration">
              <Anchor href={chainExplorer.txid + props.txRegistration} target="_blank" rel="noreferrer">
                <IconFileBitcoin />
              </Anchor>
            </Tooltip>
          }
          {props.certification && <IconCertificate />}
        </Group>
      </Group>
    </Table.Td>
    <Table.Td visibleFrom="sm">
      {props.name}
    </Table.Td>
  </Table.Tr>
}