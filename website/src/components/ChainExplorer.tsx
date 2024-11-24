import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { format } from "@/utils";
import { Anchor, Box, Button, CopyButton, Group, Tooltip } from "@mantine/core";
import { IconClipboardCheck, IconCopy, IconUserBitcoin } from "@tabler/icons-react";

export default function ChainExplorer(props: { address: BitcoinAddress }) {
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