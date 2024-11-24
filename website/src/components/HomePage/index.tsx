"use client";

import { AppShell, Box, Flex, Stack } from "@mantine/core";
import LandingScreen from "./LandingScreen";
import Affixes from "./LandingScreen/Affixes";
import Members from "./Members";
import Description from "./Description";
import EducationProgram from "./EducationProgram";
import ResearchProgram from "./ResearchProgram";

export default function HomePage() {  
  return <>
    <AppShell>
      <LandingScreen />
      <AppShell.Main p={{base: 'sm', xs: 'xl'}}>
        <Flex gap={{base: 'xs', lg: 'xl'}} wrap="wrap" justify="center">
          <Stack flex={1}>
            <Box>
              <Description />
            </Box>
            <Box>
              <EducationProgram />
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Members />
            </Box>
            <Box>
              <ResearchProgram />
            </Box>
          </Stack>
        </Flex>
      </AppShell.Main>
    </AppShell>
    <Affixes />
  </>;
}
