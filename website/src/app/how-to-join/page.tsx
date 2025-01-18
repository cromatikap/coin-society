import { Group } from "@mantine/core";
import HowToJoin from "./HowToJoin";
import HowToCreateMinistry from "./HowToCreateMinistry";

export default function HowToJoinPage() {
  
  return <Group justify="center" gap="xl" align="start">
    <HowToJoin />
    <HowToCreateMinistry />
  </Group>
} 