import { Flex, Title, BackgroundImage, useMantineTheme, Button, Text } from "@mantine/core";
import css from "./Index.module.css";
import SideImage from "@/public/jesus.jpeg";
import { IconBrandGithub } from "@tabler/icons-react";

export default function LandingScreen() {
  const theme = useMantineTheme();

  const openRepoURL = () => {
    window.open("https://github.com/cromatikap/coin-society", "_blank");
  }

  return (
    <Flex justify={"stretch"} direction={"row"} align={"center"} h={"100vh"} >
      <Flex
        className={css.gradientBackground}
        direction={"column"}
        flex="1"
        gap="md"
        align={{base: "center", md: "start"}}
        pl={{base: 0, md: "xl"}}
      >
        <Title order={1} ta={{base: "center", md: "left"}} lts="4px" c="violet" fw="900" size={48}>coin society</Title>
        <Title order={2} ta={{base: "center", md: "left"}} lts="1px" style={{color: theme.colors.dark[9]}}>
          Blockchain technology Institute.<br />
          <Text py="xs">
          Research, experiments and learning laboratory.
          </Text>
        </Title>
        <Button onClick={openRepoURL} my="xl" variant="outline" color="dark" size="sm" leftSection={<IconBrandGithub />}>
          Contribute
        </Button>
      </Flex> 
      <BackgroundImage visibleFrom="md" src={SideImage.src} flex="1.618" h="100vh"/>
    </Flex>
  );
}