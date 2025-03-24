import crypto from 'crypto';

import { EMOJI_LIST } from "./config";
import type { MemberAddress } from "@/data";
import { BitcoinAddress, BitcoinTxid, isValidBitcoinAddress, isValidBitcoinTxid } from "./types";

export const format = (input: BitcoinAddress | BitcoinTxid) => {
  return input.slice(0, 6) + '...' + input.slice(-6);
}

export function generateEmoji(address: MemberAddress): string {
  const hash = crypto.createHash('sha256').update(address).digest('hex');
  const index = parseInt(hash.slice(0, 8), 16) % EMOJI_LIST.length;
  return EMOJI_LIST[index];
}

/**
 * Safely format an address or transaction ID with validation
 * @param input The address or transaction ID to format
 * @param fallback Optional fallback text if invalid
 * @returns Formatted string or fallback if invalid
 */
export const safeFormat = (input: string, fallback: string = 'Invalid'): string => {
  if (isValidBitcoinAddress(input) || isValidBitcoinTxid(input)) {
    return format(input as BitcoinAddress | BitcoinTxid);
  }
  return fallback;
};

/**
 * Get a link to the appropriate blockchain explorer for an address or transaction
 * @param input The address or transaction ID
 * @param type 'address' or 'txid'
 * @returns URL to blockchain explorer or empty string if invalid
 */
export const getExplorerLink = (input: string, type: 'address' | 'txid'): string => {
  if (type === 'address' && isValidBitcoinAddress(input)) {
    return `https://mempool.space/address/${input}`;
  } else if (type === 'txid' && isValidBitcoinTxid(input)) {
    return `https://mempool.space/tx/${input}`;
  }
  return '';
};