import { Accordion } from "@mantine/core";

const groceries = [
  {
    emoji: '🦸',
    value: 'Privacy policy',
    description:
      "coin-society will never share publicly your private information unless a formal and written agreement is signed and sent from you.",
  }
];

export default function FAQ() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return <Accordion>
      {items}
    </Accordion>
}