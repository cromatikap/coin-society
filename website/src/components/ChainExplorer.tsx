import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { format } from "@/utils";
import { Box, Button, CopyButton, Group, Tooltip } from "@mantine/core";
import { IconClipboardCheck, IconCopy, IconUserBitcoin } from "@tabler/icons-react";
import {LinkExt} from "./Utils";

export default function ChainExplorer(props: { address: BitcoinAddress }) {
  return <Group gap="xs" justify="flex-end">
    <LinkExt href={chainExplorer.btc.address + props.address}>
      <Box hiddenFrom="xs">
        <IconUserBitcoin />
      </Box>
      <Box visibleFrom="xs" ff="monospace">
        {format(props.address)}
      </Box>
    </LinkExt>
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