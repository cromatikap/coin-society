import { Card } from "@mantine/core";
import { Headline } from "../Utils";
import { IconUsers } from "@tabler/icons-react";

export default function LayoutCard({children}: {children: React.ReactNode}) {
  return <Card miw={{xs: 600, sm: 700}}>
    <Headline
      sub="Certified and aspiring community members."
      icon={<IconUsers />}
    >
      Community.
    </Headline>
    {children}
  </Card>
}