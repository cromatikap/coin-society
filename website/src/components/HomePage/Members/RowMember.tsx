import { Box, Button, Group, Table, Tooltip, Text } from "@mantine/core";
import type { Member } from "./data";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconCertificate, IconCurrencyEthereum, IconFileBitcoin } from "@tabler/icons-react";
import { chainExplorer } from "@/config";
import ChainExplorer from "@/components/ChainExplorer";
import {LinkExt} from "@/components/Utils";
import { BitcoinAddress } from "@/types";

export default function RowMember(props: Member) {
  const identity = props.identity;
  const isAddress = /^bc1q[0-9a-z]{38}$/.test(props.address);

  return <Table.Tr>
    <Table.Td>
      {isAddress
        ? <ChainExplorer address={props.address as BitcoinAddress} />
        : <Text c="dimmed" ta="right">{props.address}</Text>
      }
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
      {identity && <Socials links={identity} />}
    </Table.Td>
  </Table.Tr>
}

function Socials({links}: {links: Member['identity']}) {
  if(!links) return;

  const { github, instagram, linkedin, x, eth } = links;
  
  return links && <Group align="center" gap="xs">
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
