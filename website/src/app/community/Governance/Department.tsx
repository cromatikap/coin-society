import React from "react";
import ButtonCopy from "@/components/ButtonCopy";
import MemberIdentity from "@/components/MemberIdentity";
import { LinkExt } from "@/components/Utils";
import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { Box, Button, Card, Divider, Group, Stack, Title, Tooltip, Text, ThemeIcon, Anchor } from "@mantine/core";
import { IconArrowsJoin, IconArrowsRight, IconArrowsShuffle2, IconCrown, IconInfinity, IconMultiplier1x, IconSpy, IconUser, IconUserCheck, IconUsersGroup } from "@tabler/icons-react";
import type { Department } from "@/data";

const formatAmount = (amount: number) => <Text span ff="monospace">
  {new Intl.NumberFormat("en", { notation: "standard" }).format(amount)}
</Text>

export default function Department(props: Department) {
  return <Card w={{base: "100%", xs: "fit-content"}} withBorder>
    <Stack gap="xs">
      <Group align="center" justify="space-between">
        <WalletDetails name={props.name} address={props.address} />
        <Regime {...props} />
      </Group>
      <Group justify="space-between" align="start" gap="xs">
        <props.Icon size={8*13} />
        <Governance {...props} />
      </Group>
      <Divider label={<>Spending allocations (<Anchor size="xs" href="https://en.bitcoin.it/wiki/Satoshi_(unit)" target="_blank" rel="noreferrer">sats</Anchor>)</>} />
        {props.budget.map((b, i) => 
          <Group key={i} justify="space-between" style={{width: "100%"}}>
            <Group gap="xs">
              <ThemeIcon color="orange" size={24} radius="xl">
                {b.frequence 
                  ? <IconInfinity size={16} />
                  : <IconMultiplier1x size={16} />
                }
              </ThemeIcon>
              {b.recipient}:
            </Group>
            <Box>
              {formatAmount(b.amount)}{b.frequence && ` / ${b.frequence}`}
            </Box>
          </Group>
        )}
    </Stack>
  </Card>
}

function Regime(props: Department) {
  const m = props.quorum;
  const n = props.participants.length;
  const governance = m === 1 && n == 1 ? "Sole Authority" : 
    props.governance == "coinjoin" ? "Private Group" :
    props.governance == "multi-sig" ? "Shared Governance" :
    props.governance;

  return <Tooltip label={`${governance}`}>
    <ThemeIcon size={28} radius="xl">
      {governance == "Sole Authority" && <IconCrown size={20} />}
      {governance == "Private Group" && <IconSpy size={20} />}
      {governance == "Shared Governance" && <IconUsersGroup size={20} />}
    </ThemeIcon>
  </Tooltip>
}

function Governance(props: Department) {
  const m = props.quorum;
  const n = props.participants.length;
  const governance = m === 1 && n == 1 ? "single-sig" : props.governance;

  return <Stack gap="xs" align="end">
    <Group gap="xs" justify="center">
      <Qorum {...{m, n}} />
      <Type governance={governance} />
    </Group>
    <Divider label="Participants" w="100%" variant="dashed" />
    {props.participants.map((address, i) => (
      <MemberIdentity key={i} id={address} />
    ))}
  </Stack>
}

function Qorum(props: {m: number, n: number}) {
  const {m, n} = props;

  return <Tooltip label={`${m}-of-${n}`}>
      <Button variant="transparent" p="0">
        <Group gap="xs">
          {Array.from({ length: n }, (_, i) => (
            i < m 
            ? <IconUserCheck key={i} />
            : <IconUser key={i} color="lightblue" />
          ))}
        </Group>
      </Button>
    </Tooltip>
}

function Type(props: {governance: Department["governance"] | "single-sig"}) {
  const {governance} = props;

  return <Tooltip label={`${governance}`}>
    <Button variant="transparent" p="0">
      {governance == "coinjoin" && <IconArrowsShuffle2 color="orange" />}
      {governance == "multi-sig" && <IconArrowsJoin color="green" />}
      {governance == "single-sig" && <IconArrowsRight color="red" />}
    </Button>
  </Tooltip>
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
    Dept. of {props.name}
  </Title>
}