import React from "react";
import ButtonCopy from "@/components/ButtonCopy";
import MemberIdentity from "@/components/MemberIdentity";
import { LinkExt } from "@/components/Utils";
import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { Box, Button, Card, Group, Stack, Title, Tooltip } from "@mantine/core";
import { IconArrowsShuffle2, IconUser, IconUserCheck } from "@tabler/icons-react";
import type { Ministry } from "@/data";

export default function Ministry(props: Ministry & { Icon: React.ReactElement }) {
  return <Card w={{base: "100%", xs: "fit-content"}} withBorder>
    <Group align="start" justify="center">
      <Stack align="center">
        <WalletDetails name={props.name} address={props.address} />
        {React.cloneElement(props.Icon, {size: 8*13})}
      </Stack>
      <Stack gap="xs" align="end">
        {props.multisig && <Multisig multisig={props.multisig} quorum={props.quorum} />}
        {props.coinjoin && <Coinjoin coinjoin={props.coinjoin} />}
        
      </Stack>
    </Group>
  </Card>
}

function Multisig(props: {multisig: BitcoinAddress[], quorum: number}) {
  return <>
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
    {props.multisig.map((address, i) => (
      <MemberIdentity key={i} id={address} />
    ))}
  </>
}

function Coinjoin(props: {coinjoin: BitcoinAddress[]}) {
  return <>
    <Tooltip label={`coinjoin up-to-${props.coinjoin.length}`}>
      <Button variant="transparent" p="0">
        <IconArrowsShuffle2 color="violet" />
      </Button>
    </Tooltip>
    {props.coinjoin.map((address, i) => (
      <MemberIdentity key={i} id={address} />
    ))}
  </>
}

function WalletDetails(props: {name: string, address?: BitcoinAddress}) {
  return <Group gap="xs" wrap="nowrap">
    {props.address 
      ? <>
          <Box visibleFrom="sm">
            <ButtonCopy address={props.address} />
          </Box>
          <LinkExt href={chainExplorer.btc.address + props.address} data-disabled={!props.address}>
            <Wallet name={props.name} />
          </LinkExt> 
        </>
      : <Wallet name={props.name} />
    }
  </Group>
}

function Wallet(props: {name: string}) {
  return <Title order={3}>
    {props.name}
  </Title>
}