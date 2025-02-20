import { Group } from "@mantine/core";
import HowToJoin from "./HowToJoin";
import HowToCreateDepartment from "./HowToCreateDepartment";

export default function HowToJoinPage() {
  
  return <Group justify="stretch" gap="xl" align="start">
    <HowToJoin
      miw={{xs: "100%", lg: "48%"}}
      maw={{xs: "100%", lg: "48%"}}
      withBorder
    />
    <HowToCreateDepartment
      miw={{xs: "100%", lg: "48%"}}
      maw={{xs: "100%", lg: "48%"}}
    />
  </Group>
} 