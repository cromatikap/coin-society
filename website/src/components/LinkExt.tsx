import { Anchor } from "@mantine/core";

export default function LinkExt({href, children}: {href: string, children: React.ReactNode}) {
  return <Anchor href={href} target="_blank" rel="noreferrer" display="flex">
    {children}
  </Anchor>
}