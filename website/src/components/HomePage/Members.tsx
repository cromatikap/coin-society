import { BitcoinAddress, BitcoinTxid } from "@/types";
import { Anchor, Box, Button, Card, CopyButton, Group, Table, Title, Tooltip } from "@mantine/core";
import { chainExplorer } from "@/config";
import { format } from "@/utils";
import { IconCertificate, IconClipboardCheck, IconCopy, IconFileBitcoin, IconUserBitcoin } from "@tabler/icons-react";

type Member = {
  name: string;
  occupation: string;
  address: BitcoinAddress;
  txRegistration: BitcoinTxid;
  certification: boolean;
  socials?: {
    github?: string;
    x?: string;
  }
}

const members: Member[] = [
  {
    name: 'Casandra Archer',
    occupation: 'Alumni',
    address: 'bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9',
    txRegistration: '98e07795a8ca6452088ba64c2de4802c2c16ee733b6718da5a8a436ed31c84ac',
    certification: true,
  },
  {
    name: 'Agustin Cordova',
    occupation: 'Researcher',
    address: 'bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh',
    txRegistration: '94c5bf1f0373c0cc4924c454719ca0a89728697d160cca05fa79fc12e9442515',
    certification: true,
  },
  {
    name: 'cromatikap',
    occupation: 'Fullstack developer',
    address: 'bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx',
    txRegistration: '317f89c35c330e70c4d50a664c07d46f29dd41aea2dfd5c4a5366696448d1e2e',
    certification: true,
    socials: {
      github: 'https://github.com/cromatikap',
      x: 'https://twitter.com/cromatikap'
    }
  },
  {
    name: 'Lorie Spears',
    occupation: 'Marketing',
    address: 'bc1q3fk8jssft0928tzjktuefkp7k9r98g0q0ljd0m',
    txRegistration: '06c74924a411095ec6072f17005209daf05cf66eb87bce0d8c0c8201fac1b6cf',
    certification: false,
  },
  {
    name: 'Lamar Dean',
    occupation: 'Barista',
    address: 'bc1qd528shvfhls4k79z8ed385l7jz58ur90ufl9a7',
    txRegistration: 'af855f8dcaad737e05365733b89995c7ffd6ab75f46021ff2b4f5b318297153f',
    certification: false,
  }
]

export default function Members() {
  return <Card>
    <Title>Members</Title>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Address</Table.Th>
          <Table.Th>Occupation</Table.Th>
          <Table.Th visibleFrom="sm">Name</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {members.map((member) => (
          <Member
            key={member.name}
            name={member.name}
            occupation={member.occupation}
            address={member.address}
            txRegistration={member.txRegistration}
            certification={member.certification}
          />
        ))}
      </Table.Tbody>
    </Table>
  </Card>
}

function Member(props: Member) {
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

function ChainExplorer(props: { address: BitcoinAddress }) {
  return <Group gap="xs" justify="flex-end">
    <Anchor href={chainExplorer.address + props.address} target="_blank" rel="noreferrer">
      <Box hiddenFrom="xs">
        <IconUserBitcoin />
      </Box>
      <Box visibleFrom="xs" ff="monospace">
        {format(props.address)}
      </Box>
    </Anchor>
      <CopyButton value={props.address}>
        {({ copied, copy }) => (
          <Tooltip label="copy address">
            <Button size="xs" variant="transparent" color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? <IconClipboardCheck /> : <IconCopy />}
            </Button>
          </Tooltip>
        )}
      </CopyButton>
  </Group>
}