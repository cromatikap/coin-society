"use client";

import { Group, Button, Image } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { IconExternalLink } from '@tabler/icons-react';

const routes = [
  { path: "/community", label: "Community" },
  { 
    path: "https://beta2.ipal.network/profile/0x1878DE1c17b0828B90D89b4c075Ec7B0FC978B06", 
    label: "Resources",
    external: true 
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Group justify="flex-start" align="center" p="md" gap="xl">
      <Image
        src="/favicon.ico"
        alt="Coin Society Logo"
        w={32}
        h={32}
        style={{ cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
      <Group>
        {routes.map((route) => (
          route.external ? (
            <Button
              key={route.path}
              variant="light"
              component="a"
              href={route.path}
              target="_blank"
              rel="noopener noreferrer"
              rightSection={<IconExternalLink size={16} />}
            >
              {route.label}
            </Button>
          ) : (
            <Button
              key={route.path}
              variant={pathname === route.path ? "filled" : "light"}
              onClick={() => router.push(route.path)}
            >
              {route.label}
            </Button>
          )
        ))}
      </Group>
    </Group>
  );
} 