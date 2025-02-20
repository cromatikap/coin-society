import { IconBuildingBank } from "@tabler/icons-react";
import Ministry from "./Ministry";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";
import { Anchor, Flex } from "@mantine/core";
import { ministries } from "@/data";

export default function Governance(props: LayoutCardOptProps ) {

  return <Card
    {...props}
    icon={<IconBuildingBank />}
    title="Governance."
    sub={<>Departments. <Anchor href="/how-to-join" target="_blank" rel="noreferrer">Create your own here!</Anchor></>}
  >
    <Flex justify={{base: "stretch", xs: "flex-start"}} wrap="wrap" gap="xs" align="stretch">
      {ministries.map((ministry) => 
        <Ministry
          key={ministry.name}
          {...ministry}
          Icon={ministry.Icon}
        />
      )}
    </Flex>
  </Card>
}