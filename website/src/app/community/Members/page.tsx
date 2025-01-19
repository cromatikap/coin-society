"use client";

import Members from ".";

export default function MembersPage() {
  return (
    <Members
      miw={{xs: "100%", lg: "0"}}
      maw={{xs: "100%", lg: "48%"}}
      withBorder
    />
  );
}