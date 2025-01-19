import { chainExplorer } from "@/config";
import { format } from "@/utils";
import { Box, Group, TextInput, ActionIcon, Text } from "@mantine/core";
import { IconUserBitcoin, IconPencil } from "@tabler/icons-react";
import { LinkExt } from "./Utils";
import ButtonCopy from "./ButtonCopy";
import { useAddressTag } from "@/hooks/useAddressTag";
import { KeyboardEvent } from "react";
import type { MemberAddress } from "@/data";
import { BitcoinAddress } from "@/types";

interface MemberIdentityProps {
  id: MemberAddress | number;
}

export default function MemberIdentity({ id }: MemberIdentityProps) {
  const { tag, isEditing, setIsEditing, saveTag, isAddress } = useAddressTag(id);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveTag(e.currentTarget.value);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const displayAddress = isAddress ? format(id as MemberAddress) : `${id}`;

  const inputProps = {
    defaultValue: tag,
    placeholder: displayAddress,
    onKeyDown: handleKeyDown,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => saveTag(e.currentTarget.value),
    autoFocus: true,
    size: "xs" as const,
    w: {base: 7*8, xs: 150},
  };

  const displayTag = tag && tag.length > 6 ? tag.slice(0, 5) + '…' : tag;
  const content = isEditing ? (
    <TextInput {...inputProps} />
  ) : (
    tag || displayAddress
  );

  return (
    <Group gap="xs" w="fit-content" wrap="nowrap">
      {isAddress ? (
        <LinkExt href={chainExplorer.btc.address + id as MemberAddress}>
          <Box hiddenFrom="xs">
            {isEditing ? (
              <TextInput {...inputProps} />
            ) : (
              tag ? (
                <Text ff="monospace">{displayTag}</Text>
              ) : (
                <IconUserBitcoin />
              )
            )}
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
        {isAddress && <ButtonCopy address={id as BitcoinAddress} />}
      </Group>
    </Group>
  );
}