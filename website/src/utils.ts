import crypto from 'crypto';

import { EMOJI_LIST } from "./config";
import type { MemberAddress } from "@/data";
import { BitcoinAddress, BitcoinTxid } from "./types";

export const format = (input: BitcoinAddress | BitcoinTxid) => {
  return input.slice(0, 6) + '...' + input.slice(-6);
}

export function generateEmoji(address: MemberAddress): string {
  const hash = crypto.createHash('sha256').update(address).digest('hex');
  const index = parseInt(hash.slice(0, 8), 16) % EMOJI_LIST.length;
  return EMOJI_LIST[index];
}