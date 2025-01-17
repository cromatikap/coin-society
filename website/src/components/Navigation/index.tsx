"use client";

import { Group, Button } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  { path: "/community", label: "Community" },
  { path: "/learning", label: "Resources" },
  { path: "/", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Group justify="center" p="md">
      {routes.map((route) => (
        <Button
          key={route.path}
          variant={pathname === route.path ? "filled" : "light"}
          onClick={() => router.push(route.path)}
        >
          {route.label}
        </Button>
      ))}
    </Group>
  );
} 