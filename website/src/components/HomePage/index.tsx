"use client";

import { AppShell, Grid } from "@mantine/core";
import LandingScreen from "./LandingScreen";
import Affixes from "./LandingScreen/Affixes";
import Members from "./Members";
import Description from "./Description";

export default function HomePage() {  
  return <>
    <AppShell>
      <LandingScreen />
      <AppShell.Main p={{base: 'sm', xs: 'xl'}}>
        <Grid gutter={{base: 'xs', xs: 'xl'}} grow>
          <Grid.Col span={{base: 12, xl: 6}}>
            <Members />
          </Grid.Col>
          <Grid.Col span={{base: 12, xl: 6}}>
            <Description />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
    <Affixes />
  </>;
}
