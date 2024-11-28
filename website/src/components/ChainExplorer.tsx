import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { format } from "@/utils";
import { Box, Group } from "@mantine/core";
import { IconUserBitcoin } from "@tabler/icons-react";
import {LinkExt} from "./Utils";
import ButtonCopy from "./ButtonCopy";

export default function ChainExplorer(props: { address: BitcoinAddress }) {
  return <Group gap="xs" w="fit-content">
    <LinkExt href={chainExplorer.btc.address + props.address}>
      <Box hiddenFrom="xs">
        <IconUserBitcoin />
      </Box>
      <Box visibleFrom="xs" ff="monospace">
        {format(props.address)}
      </Box>
    </LinkExt>
    <ButtonCopy address={props.address} />
  </Group>
}