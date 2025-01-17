import MemberIdentity from "@/components/MemberIdentity";
import {CardSecondary} from "@/components/Utils";
import { Stack, Group, Tooltip, Button } from "@mantine/core";
import { IconBuildingBank, IconDropletHeart, IconUser, IconUserCheck } from "@tabler/icons-react";
import Ministry from "./Ministry";
import { Card } from "@/components/Layout";

export default function Governance() {
  return <Card
    icon={<IconBuildingBank />}
    title="Governance."
    sub="Ministries."
  >
    <CardSecondary>
      <Group wrap="nowrap">
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
          <MemberIdentity address="bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9" />
          <MemberIdentity address="bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh" />
          <MemberIdentity address="bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx" />
        </Stack>
      </Group>
    </CardSecondary>
  </Card>
}