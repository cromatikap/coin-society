import { Flex, Title, BackgroundImage, useMantineTheme } from "@mantine/core";
import css from "./Index.module.css";
import SideImage from "@/public/nicolas-thomas-wKlqqfNTLsI-unsplash.jpg";

export default function LandingScreen() {
  const theme = useMantineTheme();

  return (
    <Flex justify={"stretch"} direction={"row"} align={"center"}>
        <Flex
          className={css.gradientBackground}
          direction={"column"}
          flex="1.618"
          gap="md"
          align={{base: "center", md: "start"}}
          pl={{base: 0, md: "xl"}}
        >
          <Title order={1} ta={{base: "center", md: "left"}} lts="4px" style={{color: theme.colors.dark[7]}} fw="900" size={48}>coin society</Title>
          <Title order={2} ta={{base: "center", md: "left"}} lts="1px" style={{color: theme.colors.dark[5]}}>Blockchain technology research academy.</Title>
        </Flex> 
        <BackgroundImage visibleFrom="md" src={SideImage.src} flex="2" h="100vh" />
      </Flex>
  );
}