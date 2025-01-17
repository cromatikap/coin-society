import { Container, Title, Text, List, Stack } from '@mantine/core';

export default function HowToJoin() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <Title order={1}>How to Join Coin Society</Title>
        
        <Text>
          Coin Society is an exclusive community of blockchain enthusiasts and professionals. 
          Here&apos;s how you can become a member:
        </Text>

        <List>
          <List.Item>
            <Text>
              Connect your wallet and verify ownership of required assets
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Participate in community discussions and events
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              Follow our community guidelines and code of conduct
            </Text>
          </List.Item>
        </List>

        <Text>
          Once you meet the requirements, you&apos;ll automatically become a member of our community.
        </Text>
      </Stack>
    </Container>
  );
} 