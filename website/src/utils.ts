import { BitcoinAddress, BitcoinTxid } from "./types";

export const format = (input: BitcoinAddress | BitcoinTxid) => {
  return input.slice(0, 6) + '...' + input.slice(-6);
}