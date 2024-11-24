import { Accordion } from "@mantine/core";

const groceries = [
  {
    emoji: '👨‍💻',
    value: 'Terms of Education Program registration.',
    description: "While we strongly encourage you to retain your registration donation within the ecosystem, neither the Coin-Society nor any of its members are, or will ever be, entitled to request a return of the funds or any other form of financial compensation. Please consider it a gift from God.",
  },
  {
    emoji: '🦸',
    value: 'Privacy policy.',
    description:
      "Coin-Society will not request your private information and will not publicly disclose any private information unless you provide prior express consent through a formal written agreement.",
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