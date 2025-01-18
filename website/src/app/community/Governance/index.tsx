import { IconBuildingBank, IconDropletHeart, IconPlant, IconQuestionMark } from "@tabler/icons-react";
import Ministry from "./Ministry";
import { Card } from "@/components/Layout";
import { Group } from "@mantine/core";
import { ministries, MINISTRY_PURPOSES } from "@/data";

export default function Governance() {

  const getIcon = (purpose: typeof MINISTRY_PURPOSES[number]) => {
    switch (purpose) {
      case "faucet": return <IconDropletHeart />;
      case "stimulus": return <IconPlant />;
      default: return <IconQuestionMark />;
    }
  }

  return <Card
    icon={<IconBuildingBank />}
    title="Governance."
    sub="Ministries."
    withBorder
  >
    <Group align="stretch">
      {ministries.map((ministry) => 
        <Ministry
          key={ministry.name}
          {...ministry}
          Icon={getIcon(ministry.purpose)}
        />
      )}
    </Group>
  </Card>
}