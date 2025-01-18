import { IconBuildingBank, IconDropletHeart, IconPlant, IconQuestionMark } from "@tabler/icons-react";
import Ministry from "./Ministry";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";
import { Flex } from "@mantine/core";
import { ministries, MINISTRY_PURPOSES } from "@/data";

export default function Governance(props: LayoutCardOptProps ) {

  const getIcon = (purpose: typeof MINISTRY_PURPOSES[number]) => {
    switch (purpose) {
      case "faucet": return <IconDropletHeart />;
      case "stimulus": return <IconPlant />;
      default: return <IconQuestionMark />;
    }
  }

  return <Card
    {...props}
    icon={<IconBuildingBank />}
    title="Governance."
    sub="Ministries."
  >
    <Flex justify={{base: "stretch", xs: "flex-start"}} wrap="wrap" gap="xs" align="stretch">
      {ministries.map((ministry) => 
        <Ministry
          key={ministry.name}
          {...ministry}
          Icon={getIcon(ministry.purpose)}
        />
      )}
    </Flex>
  </Card>
}