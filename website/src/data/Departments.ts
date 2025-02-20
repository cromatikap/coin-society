import type { BitcoinAddress } from "@/types";
import { IconCodeCircle2, IconPlant, IconSchool, IconServerBolt, TablerIcon } from "@tabler/icons-react";

export type Department = {
  name: string;
  address?: BitcoinAddress;
  quorum?: number;
  Icon: TablerIcon;
} & (
  | { coinjoin?: never; quorum: number; multisig: BitcoinAddress[]; }
  | { multisig?: never; quorum?: never; coinjoin: BitcoinAddress[]; }
);

export const departments: Department[] = [
  {
    name: "Education",
    coinjoin: [
      "bc1qgdjv7k377sg72s8jr8nzpqw4cl92rq4tmfes9n",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh"
    ],
    Icon: IconSchool
  },
  {
    name: "Operational Costs",
    address: "bc1qn63tnrcrzf5k3rjhna3hl0ns65a7jqhrhyvunp",
    multisig: [
      "bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx",
    ],
    quorum: 1,
    Icon: IconServerBolt
  },
  {
    name: "Developer Bounties",
    address: "bc1qncz00j0kc40d2kvujyuj7ygkp4pkja3cykrqet",
    multisig: [
      "bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx",
    ],
    quorum: 1,
    Icon: IconCodeCircle2
  },
  {
    name: "Stimulus and Growth",
    address: "bc1q7722e27hewmfz0j5k2utuplylpaz2xjxdn94g5",
    multisig: [
      "bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh",
      "bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx"
    ],
    quorum: 2,
    Icon: IconPlant
  }
]
