import { Box, Button, Group, Table, Tooltip } from "@mantine/core";
import type { Member } from "@/data";
import { generateEmoji } from "@/utils";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconCertificate, IconCurrencyEthereum, IconFileBitcoin } from "@tabler/icons-react";
import { chainExplorer } from "@/config";
import MemberIdentity from "@/components/MemberIdentity";
import {LinkExt} from "@/components/Utils";

export default function RowMember(props: Member & { index: number }) {

  return <Table.Tr>
    <Table.Td w={300}>
      <Group justify="flex-end" wrap="nowrap">
        <MemberIdentity address={props.address} index={props.index} />
      </Group>
    </Table.Td>
    <Table.Td w={300}>
      <Group justify="space-between" wrap="nowrap">
        <Box style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {props.occupation}
        </Box>
        <Group visibleFrom="xs" wrap="nowrap">
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
    <Table.Td w={300} visibleFrom="sm">
      <Socials member={props} />
    </Table.Td>
  </Table.Tr>
}

function Socials({member}: {member: Member}) {
  const { github, instagram, linkedin, x, eth } = member.identity || {};
  
  return <Group align="center" gap="xs" wrap="nowrap">
    {generateEmoji(member.address)}
    {eth?.address && 
      <LinkExt href={eth.ens ? chainExplorer.eth.ens + eth.ens : chainExplorer.eth.address + eth.address}>
        <Tooltip label="Ethereum address">
          {eth.ens
            ? <Box>
                <Button visibleFrom="md" variant="transparent" size="compact-sm" p="0" 
                  style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {eth.ens}
                </Button>
                <Box hiddenFrom="md" display="flex">
                  <IconCurrencyEthereum />
                </Box>
              </Box>
            : <IconCurrencyEthereum />
          }
        </Tooltip>
      </LinkExt>
    }
    {github && <LinkExt href={github}><IconBrandGithub /></LinkExt>}
    {instagram && <LinkExt href={instagram}><IconBrandInstagram /></LinkExt>}
    {linkedin && <LinkExt href={linkedin}><IconBrandLinkedin /></LinkExt>}
    {x && <LinkExt href={x}><IconBrandX /></LinkExt>}
  </Group>
}
