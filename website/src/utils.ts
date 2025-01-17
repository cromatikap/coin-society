import crypto from 'crypto';

import { CANDIDATE, ELIGIBLE_CANDIDATE, EMOJI_LIST } from "./config";
import { MemberAddress } from "./Members";
import { BitcoinAddress, BitcoinTxid } from "./types";

export const format = (input: BitcoinAddress | BitcoinTxid) => {
  return input.slice(0, 6) + '...' + input.slice(-6);
}

export function generateEmoji(address: MemberAddress): string {
  if (address === CANDIDATE) return '❓';
  if (address === ELIGIBLE_CANDIDATE) return '❔';

  const hash = crypto.createHash('sha256').update(address).digest('hex');
  const index = parseInt(hash.slice(0, 8), 16) % EMOJI_LIST.length;
  return EMOJI_LIST[index];
}