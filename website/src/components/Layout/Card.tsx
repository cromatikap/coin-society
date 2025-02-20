import { Card as MantineCard, Title as MantineTitle, StyleProp } from "@mantine/core";
import { Property } from 'csstype';
import { Headline } from "../Utils";
import { ReactElement } from "react";

export type LayoutCardOptProps = {
  withBorder?: boolean;
  miw?: StyleProp<Property.MinWidth<string | number> | undefined>;
  maw?: StyleProp<Property.MaxWidth<string | number> | undefined>;
}

export type LayoutCardProps = {
  children: React.ReactNode;
  icon: ReactElement;
  title: string;
  sub: React.ReactNode;
} & LayoutCardOptProps;

export function Card({
  children,
  icon,
  title,
  sub,
  withBorder = false,
  miw = {xs: 600, sm: 700},
  maw = {}
}: LayoutCardProps) {
  return <MantineCard
    miw={miw} maw={maw}
    withBorder={withBorder}
    shadow={withBorder ? "sm" : "none"}
  >
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