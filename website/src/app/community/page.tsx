"use client";

import Layout from "@/components/Layout";
import Members from "./Members";
import Governance from "./Governance";

export default function CommunityPage() {
  return (
    <Layout>
      <Members />
      <Governance />
    </Layout>
  );
}