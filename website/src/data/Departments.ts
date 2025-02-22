import type { BitcoinAddress } from "@/types";
import { IconCodeCircle2, IconPlant, IconSchool, IconServerBolt, TablerIcon } from "@tabler/icons-react";

export type Department = {
  name: string;
  address?: BitcoinAddress;
  participants: BitcoinAddress[];
  governance: "multi-sig" | "coinjoin";
  quorum: number;
  Icon: TablerIcon;
  budget: Budget[];
};

export type Budget = {
  recipient: string;
  amount: number;
  frequence?: string;
}

export const departments: Department[] = [
  {
    name: "Education",
    participants: [
      "bc1qgdjv7k377sg72s8jr8nzpqw4cl92rq4tmfes9n",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh"
    ],
    governance: "coinjoin",
    quorum: 2,
    Icon: IconSchool,
    budget: [
      {
        recipient: "welcome pack",
        amount: 12000,
        frequence: "new member"
      }
    ]
  },
  {
    name: "Operational Costs",
    address: "bc1qn63tnrcrzf5k3rjhna3hl0ns65a7jqhrhyvunp",
    participants: [
      "bc1qym3lewe8sc76q4j2f9cuzjt56df3k7z7a6fjtm",
    ],
    governance: "multi-sig",
    quorum: 1,
    Icon: IconServerBolt,
    budget: [
      {
        recipient: "hosting provider",
        amount: 15000,
        frequence: "month"
      }
    ]
  },
  {
    name: "Developer Bounties",
    address: "bc1qncz00j0kc40d2kvujyuj7ygkp4pkja3cykrqet",
    participants: [
      "bc1qym3lewe8sc76q4j2f9cuzjt56df3k7z7a6fjtm",
    ],
    governance: "multi-sig",
    quorum: 1,
    Icon: IconCodeCircle2,
    budget: [
      {
        recipient: "XXS",
        amount: 10000,
        frequence: "bounty"
      },
      {
        recipient: "XS",
        amount: 20000,
        frequence: "bounty"
      },
      {
        recipient: "S",
        amount: 30000,
        frequence: "bounty"
      },
      {
        recipient: "M",
        amount: 50000,
        frequence: "bounty"
      },
      {
        recipient: "L",
        amount: 80000,
        frequence: "bounty"
      },
      {
        recipient: "XL",
        amount: 130000,
        frequence: "bounty"
      },
      {
        recipient: "XXL",
        amount: 210000,
        frequence: "bounty"
      },
    ]
  },
  {
    name: "Stimulus and Growth",
    address: "bc1q7722e27hewmfz0j5k2utuplylpaz2xjxdn94g5",
    participants: [
      "bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh",
      "bc1qym3lewe8sc76q4j2f9cuzjt56df3k7z7a6fjtm"
    ],
    governance: "multi-sig",
    quorum: 2,
    Icon: IconPlant,
    budget: [
      {
        recipient: "stimulus and growth",
        amount: 300000,
      }
    ]
  }
]
