import { IconBuildingBank } from "@tabler/icons-react";
import Department from "./Department";
import { Card } from "@/components/Layout";
import type { LayoutCardOptProps } from "@/components/Layout";
import { Anchor, Flex } from "@mantine/core";
import { departments } from "@/data";

export default function Governance(props: LayoutCardOptProps ) {

  return <Card
    {...props}
    icon={<IconBuildingBank />}
    title="Governance."
    sub={<>Departments. <Anchor href="/how-to-join" target="_blank" rel="noreferrer">Create your own here!</Anchor></>}
  >
    <Flex justify={{base: "stretch", xs: "flex-start"}} wrap="wrap" gap="xs" align="stretch">
      {departments.map((department) => 
        <Department
          key={department.name}
          {...department}
          Icon={department.Icon}
        />
      )}
    </Flex>
  </Card>
}