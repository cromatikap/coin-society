import { Card } from "@mantine/core";
import { Headline } from "../Utils";
import { ReactElement } from "react";

interface LayoutCardProps {
  children: React.ReactNode;
  icon: ReactElement;
  title: string;
  sub: string;
  withBorder?: boolean;
}

export default function LayoutCard({ children, icon, title, sub, withBorder = false }: LayoutCardProps) {
  return <Card miw={{xs: 600, sm: 700}} withBorder={withBorder} shadow={withBorder ? "sm" : "none"}>
    <Headline sub={sub} icon={icon}>
      {title}
    </Headline>
    {children}
  </Card>
}