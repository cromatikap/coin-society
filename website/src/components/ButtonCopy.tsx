import { BitcoinAddress } from "@/types";
import { Button, CopyButton, Tooltip } from "@mantine/core";
import { IconClipboardCheck, IconCopy } from "@tabler/icons-react";

export default function ButtonCopy(props: { address: BitcoinAddress }) {
  return <CopyButton value={props.address}>
    {({ copied, copy }) => (
      <Tooltip label="copy address">
        <Button size="xs" variant="transparent" color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? <IconClipboardCheck /> : <IconCopy />}
        </Button>
      </Tooltip>
    )}
  </CopyButton>
}