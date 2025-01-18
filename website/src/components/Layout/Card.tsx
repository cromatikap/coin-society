import { Card as MantineCard, Title as MantineTitle } from "@mantine/core";
import { Headline } from "../Utils";
import { ReactElement } from "react";

interface LayoutCardProps {
  children: React.ReactNode;
  icon: ReactElement;
  title: string;
  sub: string;
  withBorder?: boolean;
}

export function Card({ children, icon, title, sub, withBorder = false }: LayoutCardProps) {
  return <MantineCard miw={{xs: 600, sm: 700}} withBorder={withBorder} shadow={withBorder ? "sm" : "none"}>
    <Headline sub={sub} icon={icon}>
      {title}
    </Headline>
    {children}
  </MantineCard>
}

export function Title(props: { children: React.ReactNode }) {
  return <MantineTitle order={3} my="md">{props.children}</MantineTitle>
}

export function Subtitle(props: { children: React.ReactNode }) {
  return <MantineTitle order={5} mt="xs">{props.children}</MantineTitle>
}