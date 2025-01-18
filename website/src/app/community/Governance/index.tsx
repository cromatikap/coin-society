import { IconBuildingBank, IconDropletHeart, IconPlant } from "@tabler/icons-react";
import Ministry from "./Ministry";
import { Card } from "@/components/Layout";
import { Group } from "@mantine/core";

export default function Governance() {
  return <Card
    icon={<IconBuildingBank />}
    title="Governance."
    sub="Ministries."
    withBorder
  >
    <Group align="stretch">
      <Ministry
        name="Stimulus and Growth"
        address="bc1q7722e27hewmfz0j5k2utuplylpaz2xjxdn94g5"
        multisig={[
          "bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9",
          "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh",
          "bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx"
        ]}
        quorum={2}
        Icon={<IconPlant />}
      />
      <Ministry
        name="Faucet 1"
        address="bc1qayz7m844g89mhyvwja246mdd67p8udax8xgekx"
        multisig={["bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx"]}
        quorum={1}
        Icon={<IconDropletHeart />}
      />
      <Ministry
        name="Faucet 2"
        address="bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh"
        multisig={["bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh"]}
        quorum={1}
        Icon={<IconDropletHeart />}
      />
    </Group>
  </Card>
}