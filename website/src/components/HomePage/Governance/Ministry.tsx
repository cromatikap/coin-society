import ButtonCopy from "@/components/ButtonCopy";
import { LinkExt } from "@/components/Utils";
import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { Group, Title } from "@mantine/core";

export default function Ministry(props: {name: string, address: BitcoinAddress}) {
  return <Group gap="0" wrap="nowrap">
    <ButtonCopy address={props.address} />
    <LinkExt href={chainExplorer.btc.address + props.address}>
      <Title order={3} mr="md">{props.name}</Title>
    </LinkExt> 
  </Group>
}