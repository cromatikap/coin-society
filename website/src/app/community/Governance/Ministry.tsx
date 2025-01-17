import ButtonCopy from "@/components/ButtonCopy";
import MemberIdentity from "@/components/MemberIdentity";
import { CardSecondary, LinkExt } from "@/components/Utils";
import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { Box, Button, Group, Stack, Title, Tooltip } from "@mantine/core";
import { IconDropletHeart, IconUser, IconUserCheck } from "@tabler/icons-react";

interface MinistryProps {
  name: string;
  address: BitcoinAddress;
  multisig: BitcoinAddress[];
  quorum: number;
}

export default function Ministry(props: MinistryProps) {
  return <CardSecondary>
    <Group align="start" justify="center">
      <Stack align="center">
        <Wallet name={props.name} address={props.address} />
        <IconDropletHeart size={8*13} />
      </Stack>
      <Stack gap="xs" align="end">
        <Tooltip label={`multisig ${props.quorum}-to-${props.multisig.length}`}>
          <Button variant="transparent" p="0">
            <Group gap="xs">
            {Array.from({ length: props.multisig.length }, (_, i) => (
              i < props.quorum 
                ? <IconUserCheck key={i} color="teal" />
                : <IconUser key={i} color="pink" />
            ))}
          </Group>
          </Button>
        </Tooltip>
        {props.multisig.map((address) => (
          <MemberIdentity key={address} address={address} />
        ))}
      </Stack>
    </Group>
  </CardSecondary>
}

function Wallet(props: {name: string, address: BitcoinAddress}) {
  return <Group gap="xs" wrap="nowrap">
    <Box visibleFrom="sm">
      <ButtonCopy address={props.address} />
    </Box>
    <LinkExt href={chainExplorer.btc.address + props.address}>
      <Title order={3}>{props.name}</Title>
    </LinkExt> 
  </Group>
}