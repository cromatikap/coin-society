import ChainExplorer from "@/components/ChainExplorer";
import {Headline, CardSecondary} from "@/components/Utils";
import { Stack, Group, Tooltip, Button, Card } from "@mantine/core";
import { IconBuildingBank, IconDropletHeart, IconUser, IconUserCheck } from "@tabler/icons-react";
import Ministry from "./Ministry";

export default function Governance() {
  return <Card>
    <Headline sub="Ministries." icon={<IconBuildingBank />}>
      Governance.
    </Headline>
    <CardSecondary>
      <Group>
        <Stack align="center">
          <Ministry name="Faucet" address="bc1q7722e27hewmfz0j5k2utuplylpaz2xjxdn94g5" />
          <IconDropletHeart size={8*13} />
        </Stack>
        <Stack gap="xs" align="start">
        <Tooltip label={"multisig 2-to-3"}>
          <Button variant="transparent" p="0">
            <Group gap="xs">
              <IconUserCheck color="teal" />
              <IconUserCheck color="teal" />
              <IconUser color="pink" />
            </Group>
          </Button>
        </Tooltip>
          <ChainExplorer address="bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9" />
          <ChainExplorer address="bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh" />
          <ChainExplorer address="bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx" />
        </Stack>
      </Group>
    </CardSecondary>
  </Card>
}