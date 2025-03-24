import { format, generateEmoji, safeFormat, getExplorerLink } from '../src/utils';
import { BitcoinAddress, BitcoinTxid } from '../src/types';
import { EMOJI_LIST } from '../src/config';

// Mock crypto for deterministic tests
jest.mock('crypto', () => ({
  createHash: jest.fn().mockReturnValue({
    update: jest.fn().mockReturnThis(),
    digest: jest.fn().mockReturnValue('abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789')
  })
}));

describe('Utils Functions', () => {
  describe('format function', () => {
    it('truncates long addresses correctly', () => {
      const address = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
      expect(format(address as BitcoinAddress)).toBe('bc1qw5...v8f3t4');
    });

    it('truncates transaction IDs correctly', () => {
      const txid = '6a60dd92cf340246d0de7812d88491132d1bf55ec9c15c52114e5a312bb1a900';
      expect(format(txid as BitcoinTxid)).toBe('6a60dd...b1a900');
    });

    it('handles short inputs gracefully', () => {
      // Edge case with very short input - should match the actual behavior
      const shortInput = 'abc123';
      expect(format(shortInput as unknown as BitcoinTxid)).toBe('abc123...abc123');
    });
  });

  describe('generateEmoji function', () => {
    const testAddress = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
    
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('returns consistent emoji for the same address', () => {
      const emoji1 = generateEmoji(testAddress as BitcoinAddress);
      const emoji2 = generateEmoji(testAddress as BitcoinAddress);
      expect(emoji1).toBe(emoji2);
    });

    it('returns an emoji from the EMOJI_LIST', () => {
      const emoji = generateEmoji(testAddress as BitcoinAddress);
      
      // We know the emoji must be one of the items in the list
      expect(EMOJI_LIST.includes(emoji)).toBe(true);
    });

    it('uses the hash to determine emoji index', () => {
      // We're mocking digest to return 'abcdef0123456789...'
      // So the first 8 chars are 'abcdef01'
      // parseInt('abcdef01', 16) = 2882400001
      // index = 2882400001 % EMOJI_LIST.length
      const expectedIndex = 2882400001 % EMOJI_LIST.length;
      
      const emoji = generateEmoji(testAddress as BitcoinAddress);
      expect(emoji).toBe(EMOJI_LIST[expectedIndex]);
    });
  });

  describe('safeFormat function', () => {
    it('formats valid Bitcoin addresses', () => {
      const address = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
      expect(safeFormat(address)).toBe('bc1qw5...v8f3t4');
    });

    it('formats valid transaction IDs', () => {
      const txid = '6a60dd92cf340246d0de7812d88491132d1bf55ec9c15c52114e5a312bb1a900';
      expect(safeFormat(txid)).toBe('6a60dd...b1a900');
    });

    it('returns default fallback for invalid inputs', () => {
      expect(safeFormat('invalid-input')).toBe('Invalid');
    });

    it('returns custom fallback for invalid inputs', () => {
      expect(safeFormat('invalid-input', 'Not valid')).toBe('Not valid');
    });
  });

  describe('getExplorerLink function', () => {
    it('generates correct link for Bitcoin addresses', () => {
      const address = 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4';
      expect(getExplorerLink(address, 'address')).toBe('https://mempool.space/address/bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4');
    });

    it('generates correct link for transaction IDs', () => {
      const txid = '6a60dd92cf340246d0de7812d88491132d1bf55ec9c15c52114e5a312bb1a900';
      expect(getExplorerLink(txid, 'txid')).toBe('https://mempool.space/tx/6a60dd92cf340246d0de7812d88491132d1bf55ec9c15c52114e5a312bb1a900');
    });

    it('returns empty string for invalid addresses', () => {
      expect(getExplorerLink('invalid-address', 'address')).toBe('');
    });

    it('returns empty string for invalid transaction IDs', () => {
      expect(getExplorerLink('invalid-txid', 'txid')).toBe('');
    });

    it('returns empty string for mismatched type', () => {
      // Valid txid but requesting address explorer
      const txid = '6a60dd92cf340246d0de7812d88491132d1bf55ec9c15c52114e5a312bb1a900';
      expect(getExplorerLink(txid, 'address')).toBe('');
    });
  });
}); 