"use client";

import { AppShell, Box, Flex } from "@mantine/core";
import LandingScreen from "./LandingScreen";
import Affixes from "./LandingScreen/Affixes";
import Description from "./Description";
import EducationProgram from "./EducationProgram";
import ResearchProgram from "./ResearchProgram";

const GAP = {base: 'sm', sm: 'xl'}

export default function HomePage() {  
  return <>
    <AppShell>
      <LandingScreen />
      <AppShell.Main p={GAP}>
        <Flex gap={GAP} wrap="wrap" justify="center">
          <Flex flex={1.1} gap={GAP} direction="column">
            <Box>
              <Description />
            </Box>
            <Box>
              <ResearchProgram />
            </Box>
          </Flex>
          <Flex flex={1} gap={GAP} direction="column" miw={{sm: 8*54}}>
            <Box>
              <EducationProgram />
            </Box>
          </Flex>
        </Flex>
      </AppShell.Main>
    </AppShell>
    <Affixes />
  </>;
}
