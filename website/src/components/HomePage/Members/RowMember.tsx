import { Box, Button, Group, Table, Tooltip } from "@mantine/core";
import type { Member } from "../../../Members";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconCertificate, IconCurrencyEthereum, IconFileBitcoin } from "@tabler/icons-react";
import { chainExplorer } from "@/config";
import MemberIdentity from "@/components/MemberIdentity";
import {LinkExt} from "@/components/Utils";

export default function RowMember(props: Member & { index: number }) {
  const identity = props.identity;

  return <Table.Tr>
    <Table.Td>
      <Group justify="flex-end">
        <MemberIdentity address={props.address} index={props.index} />
      </Group>
    </Table.Td>
    <Table.Td>
      <Group justify="space-between">
        {props.occupation}
        <Group visibleFrom="xs">
          {props.txRegistration && 
            <LinkExt href={chainExplorer.btc.txid + props.txRegistration}>
              <Tooltip label="registration">
                <IconFileBitcoin />
              </Tooltip>
            </LinkExt>
          }
          {props.certification && <IconCertificate />}
        </Group>
      </Group>
    </Table.Td>
    <Table.Td visibleFrom="sm">
      {identity && <Socials identity={identity} />}
    </Table.Td>
  </Table.Tr>
}

function Socials({identity}: {identity: Member['identity']}) {
  const { emoji, github, instagram, linkedin, x, eth } = identity;
  
  return <Group align="center" gap="xs">
    {emoji}
    {eth?.address && 
      <LinkExt href={eth.ens ? chainExplorer.eth.ens + eth.ens : chainExplorer.eth.address + eth.address}>
        <Tooltip label="Ethereum address">
          {eth.ens
            ? <Box>
                <Button visibleFrom="md" variant="transparent" size="compact-sm" p="0">{eth.ens}</Button>
                <Box hiddenFrom="md" display="flex">
                  <IconCurrencyEthereum />
                </Box>
              </Box>
            : <IconCurrencyEthereum />
          }
        </Tooltip>
      </LinkExt>
    }
    {x && <LinkExt href={x}><IconBrandX /></LinkExt>}
    {instagram && <LinkExt href={instagram}><IconBrandInstagram /></LinkExt>}
    {github && <LinkExt href={github}><IconBrandGithub /></LinkExt>}
    {linkedin && <LinkExt href={linkedin}><IconBrandLinkedin /></LinkExt>}
  </Group>
}
