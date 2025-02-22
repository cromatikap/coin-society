import { IconUsersGroup } from "@tabler/icons-react";
import { Card } from "@/components/Layout";
import { Anchor as AnchorMantine, Stack, Text as TextMantine, TextProps } from "@mantine/core";
import { ReactNode } from "react";

export default function WhoWeAre() {
  return <Card
    icon={<IconUsersGroup />}
    title="Who we are?"
  >
    <Stack ta="center">
      <Text>
        We are using unstoppable technology inherent to the current march of progress.
      </Text>
      <Text>
        We are everyone, we are small business owners, artists, entrepreneurs, researchers, software engineers, faith advisors, entrepreneurs, investors, and more.
      </Text>
      <Text>
        <Anchor href="https://www.youtube.com/watch?v=hYJKBnGZnMA" target="_blank">
          We are the world government
        </Anchor>, by anyone for everyone.
      </Text>
      <Text>
        We are incentivizing a circular economy so we lift up together as Bitcoin is the best asset of all time and will continue to do so for 100 years.
      </Text>
      <Text>
        We are incentivizing a circular economy based on blockchain so we find solutions for national and continental democratic Bitcoin funds management.
      </Text>
      <Text>
        We are counting in <Anchor href="https://en.bitcoin.it/wiki/Satoshi_(unit)" target="_blank">satoshis (sat)</Anchor>.
      </Text>
      <Text>
        1 satoshi = 0.000,000,01 Bitcoin.
      </Text>
      <Text>
        100,000 satoshis = 0.001 Bitcoins.
      </Text>
      <Text>
        100,000 satoshis = 100 U.S. Dollars.
      </Text>
      <Text>
        We are the coin society.
      </Text>
      <Text>
        <Anchor href="/how-to-join">How to join?</Anchor>
      </Text>
    </Stack>
  </Card>
}

function Anchor({children, href, target}: {children: ReactNode, href: string, target?: string}) {
  return <AnchorMantine href={href} target={target}>{children}</AnchorMantine>
}

function Text({children, ...props}: {children: ReactNode, props?: TextProps}) {
  return <TextMantine {...props}>{children}</TextMantine>
}