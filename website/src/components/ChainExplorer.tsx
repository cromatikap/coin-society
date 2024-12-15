import { chainExplorer } from "@/config";
import { BitcoinAddress } from "@/types";
import { format } from "@/utils";
import { Box, Group, TextInput, ActionIcon, Text } from "@mantine/core";
import { IconUserBitcoin, IconPencil } from "@tabler/icons-react";
import { LinkExt } from "./Utils";
import ButtonCopy from "./ButtonCopy";
import { useAddressTag } from "@/hooks/useAddressTag";
import { KeyboardEvent } from "react";

interface ChainExplorerProps {
  address: BitcoinAddress;
  showAsLink?: boolean;
}

export default function ChainExplorer({ address, showAsLink = true }: ChainExplorerProps) {
  const { tag, isEditing, setIsEditing, saveTag } = useAddressTag(address);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveTag(e.currentTarget.value);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const displayAddress = showAsLink ? format(address) : address;

  const content = isEditing ? (
    <TextInput
      defaultValue={tag}
      placeholder={displayAddress}
      onKeyDown={handleKeyDown}
      onBlur={(e) => saveTag(e.currentTarget.value)}
      autoFocus
      size="xs"
      w="auto"
    />
  ) : (
    tag || displayAddress
  );

  return (
    <Group gap="xs" w="fit-content" wrap="nowrap">
      {showAsLink ? (
        <LinkExt href={chainExplorer.btc.address + address}>
          <Box hiddenFrom="xs">
            <IconUserBitcoin />
          </Box>
          <Box visibleFrom="xs" ff="monospace">
            {content}
          </Box>
        </LinkExt>
      ) : (
        <Text component="span" c="dimmed" ff="monospace">
          {content}
        </Text>
      )}
      <Group gap={2}>
        <ActionIcon 
          variant="subtle" 
          size="sm" 
          onClick={() => setIsEditing(true)}
          title="Edit tag"
        >
          <IconPencil size="1rem" />
        </ActionIcon>
        {showAsLink && <ButtonCopy address={address} />}
      </Group>
    </Group>
  );
}