import { isValidBitcoinAddress, isValidBitcoinTxid } from '@/types'

describe('Bitcoin Address Validation', () => {
  it('validates Segwit addresses correctly', () => {
    // Valid Segwit (bc1q)
    expect(isValidBitcoinAddress('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')).toBe(true)
    
    // Invalid - wrong prefix
    expect(isValidBitcoinAddress('bb1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')).toBe(false)
    
    // Invalid - wrong length
    expect(isValidBitcoinAddress('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5m')).toBe(false)
  })

  it('validates Taproot addresses correctly', () => {
    // Valid Taproot (bc1p)
    expect(isValidBitcoinAddress('bc1p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk5jj0')).toBe(true)
    
    // Invalid - wrong prefix
    expect(isValidBitcoinAddress('bc2p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk5jj0')).toBe(false)
    
    // Invalid - wrong length
    expect(isValidBitcoinAddress('bc1p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk')).toBe(false)
  })

  it('validates Legacy addresses correctly', () => {
    // Valid Legacy (1)
    expect(isValidBitcoinAddress('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2')).toBe(true)
    
    // Invalid - wrong prefix
    expect(isValidBitcoinAddress('2BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2')).toBe(false)
  })

  it('validates Nested Segwit addresses correctly', () => {
    // Valid Nested Segwit (3)
    expect(isValidBitcoinAddress('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')).toBe(true)
    
    // Invalid - wrong prefix
    expect(isValidBitcoinAddress('4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')).toBe(false)
  })
})

describe('Bitcoin Transaction ID Validation', () => {
  it('validates transaction IDs correctly', () => {
    // Valid txid (64 character hex)
    expect(isValidBitcoinTxid('3a1b9e330d32fef1ee42f8e86420d2be978bbe0dc5862f17da9027cf9e11f8c4')).toBe(true)
    
    // Invalid - wrong length
    expect(isValidBitcoinTxid('3a1b9e330d32fef1ee42f8e86420d2be978bbe0dc5862f17da9027cf9e11f8')).toBe(false)
    
    // Invalid - non-hex characters
    expect(isValidBitcoinTxid('3a1b9e330d32fef1ee42f8e86420d2be978bbe0dc5862f17da9027cf9e11f8cz')).toBe(false)
  })
}) 