import { Blockquote, Group, Text, Box } from "@mantine/core";
import { LinkOrg } from "@/components/Utils";
import { StatsRing } from "./StatsRing";
import { IconDeviceGamepad2, IconHeartBitcoin, IconMoodBitcoin, IconSchool } from "@tabler/icons-react";
import { Card } from "@/components/Layout";

export default function EducationProgram() {
  return <Card
      icon={<IconSchool />}
      title="Education Program."
      sub="Inclusive for all, regardless of skill set or professional experience."
      withBorder
    >
      <Text pb="xs">
        We provide an education program for those who want to learn how to use blockchain technology.
      </Text>
      <Group gap="xl" my="xl" align="stretch">
        <Blockquote flex={1} miw={8*40} color="green" cite="– bc1q8e...gxf9yh" icon={<IconMoodBitcoin />}>
          &laquo; Now, that&apos;s the kind of government transparency that I&apos;m here for &raquo;
        </Blockquote>
        <Blockquote flex={1} miw={8*30} color="grape" cite="– bc1q3s...ezxvq9" icon={<IconHeartBitcoin />}>
          &laquo; Love the concept!! &raquo;
        </Blockquote>
        <Blockquote flex={1} miw={8*30} color="violet" cite="– program candidate" icon={<IconDeviceGamepad2 />}>
          &laquo; That&apos;s like a video game &raquo;
        </Blockquote>
      </Group>
      <Text>
        At the end of the program, each alumni receives a certifcation cryptographicaly signed by <LinkOrg />
      </Text>
      <Box display="flex" style={{alignSelf: "center"}} my="xl">
        <StatsRing />
      </Box>
    </Card>
}