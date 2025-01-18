import type { BitcoinAddress } from "@/types";

export const MINISTRY_PURPOSES = [
  "faucet",
  "stimulus"
] as const;

export type Ministry = {
  name: string;
  address?: BitcoinAddress;
  quorum?: number;
  purpose: (typeof MINISTRY_PURPOSES)[number];
} & (
  | { coinjoin?: never; quorum: number; multisig: BitcoinAddress[]; }
  | { multisig?: never; quorum?: never; coinjoin: BitcoinAddress[]; }
);

export const ministries: Ministry[] = [
  {
    name: "Stimulus and Growth",
    address: "bc1q7722e27hewmfz0j5k2utuplylpaz2xjxdn94g5",
    multisig: [
      "bc1q3sqklhqpdwjnpthecn0pgeyatr4vf290ezxvq9",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh",
      "bc1q7stt7pr9ex5qtwst2mnxs7hu5ztz7mzvttx8sx"
    ],
    quorum: 2,
    purpose: "stimulus"
  },
  {
    name: "Faucet",
    coinjoin: [
      "bc1qayz7m844g89mhyvwja246mdd67p8udax8xgekx",
      "bc1q8em0mdcer84fy724awvvy9yegcart4r7gxf9yh"
    ],
    purpose: "faucet"
  }
]
