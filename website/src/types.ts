// Specific Bitcoin address format types
export type BtcSegwitAddress = `bc1q${string}`;
export type BtcTapRootAddress = `bc1p${string}`; 
export type BtcLegacyAddress = `1${string}`;
export type BtcNestedSegwitAddress = `3${string}`;

// BitcoinAddress represents any valid Bitcoin address format
export type BitcoinAddress = BtcSegwitAddress | BtcTapRootAddress | BtcLegacyAddress | BtcNestedSegwitAddress;

// Transaction ID type (64 character hex string)
export type BitcoinTxid = `${string}`; 

export type EthereumAddress = `0x${string}`;
export type EthereumName = `${string}.eth`;

export type Url = `https://${string}`;

// Validation utility functions
export const isValidBitcoinAddress = (address: string): address is BitcoinAddress => {
  // Segwit addresses (start with bc1q, 42 chars)
  const segwitRegex = /^bc1q[a-zA-Z0-9]{38,39}$/;
  // Taproot addresses (start with bc1p, 62 chars)
  const taprootRegex = /^bc1p[a-zA-Z0-9]{58,59}$/;
  // Legacy addresses (start with 1, 26-34 chars)
  const legacyRegex = /^1[a-km-zA-HJ-NP-Z1-9]{25,33}$/;
  // Nested SegWit addresses (start with 3, 26-34 chars)
  const nestedSegwitRegex = /^3[a-km-zA-HJ-NP-Z1-9]{25,33}$/;
  
  return segwitRegex.test(address) || 
         taprootRegex.test(address) || 
         legacyRegex.test(address) || 
         nestedSegwitRegex.test(address);
};

export const isValidBitcoinTxid = (txid: string): txid is BitcoinTxid => {
  // Bitcoin transaction IDs are 64 character hex strings
  const txidRegex = /^[a-fA-F0-9]{64}$/;
  return txidRegex.test(txid);
};
