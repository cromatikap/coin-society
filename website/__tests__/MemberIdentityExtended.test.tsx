import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MemberIdentity from '@/components/MemberIdentity'
import { MantineProvider } from '@mantine/core'
import userEvent from '@testing-library/user-event'
import { BitcoinAddress } from '@/types'

// Mock modules - must be before imports
jest.mock('@/hooks/useAddressTag', () => ({
  useAddressTag: jest.fn()
}))

jest.mock('@/config', () => ({
  chainExplorer: {
    btc: {
      address: 'https://mempool.space/address/'
    }
  }
}))

// Import after mocking
import { useAddressTag } from '@/hooks/useAddressTag'

// Mock format function
jest.mock('@/utils', () => ({
  format: jest.fn().mockImplementation((input) => `formatted_${input}`)
}))

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('MemberIdentity Component Extended Tests', () => {
  const setIsEditingMock = jest.fn()
  const saveTagMock = jest.fn()
  
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders in editing mode', () => {
    // Setup mock for editing mode
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'Test Tag',
      isEditing: true,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Text input should be rendered in both mobile and desktop views
    const textInputs = screen.getAllByRole('textbox')
    expect(textInputs.length).toBe(2)
    
    // Each input should have the default value set to the tag
    textInputs.forEach(input => {
      expect(input).toHaveValue('Test Tag')
    })
  })

  it('handles keyboard events in the text input', async () => {
    // Setup mock for editing mode
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'Test Tag',
      isEditing: true,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Get the first text input (doesn't matter which one)
    const textInput = screen.getAllByRole('textbox')[0]
    
    // Test pressing Enter key
    fireEvent.keyDown(textInput, { key: 'Enter', code: 'Enter' })
    expect(saveTagMock).toHaveBeenCalledWith('Test Tag')
    
    // Test pressing Escape key
    fireEvent.keyDown(textInput, { key: 'Escape', code: 'Escape' })
    expect(setIsEditingMock).toHaveBeenCalledWith(false)
  })

  it('handles blur event on the text input', () => {
    // Setup mock for editing mode
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'Test Tag',
      isEditing: true,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Get the first text input
    const textInput = screen.getAllByRole('textbox')[0]
    
    // Test blur event
    fireEvent.blur(textInput)
    expect(saveTagMock).toHaveBeenCalledWith('Test Tag')
  })

  it('displays alert for invalid Bitcoin address', () => {
    // Setup mock for an invalid address
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: '',
      isEditing: false,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    // Use an address that will be determined invalid by the component
    // Cast to BitcoinAddress to bypass type-checking for testing
    const invalidAddress = 'invalid-address' as unknown as BitcoinAddress
    renderWithTheme(<MemberIdentity id={invalidAddress} />)
    
    // Check if the alert icon is present (SVG with alert-circle class)
    const alertIcon = document.querySelector('.tabler-icon-alert-circle')
    expect(alertIcon).toBeInTheDocument()
    
    // There should be a tooltip component for the alert
    const tooltipContainer = document.querySelector('[class*="ActionIcon-root"]')
    expect(tooltipContainer).toBeTruthy()
  })

  it('renders mobile view with only icon when no tag', () => {
    // Setup mock for mobile view with no tag
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: '',
      isEditing: false,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // In mobile view (hiddenFrom="xs"), it should render the icon
    // This is hard to test in jsdom, but we can check for the SVG
    const bitcoinIcon = document.querySelector('svg') // The IconUserBitcoin
    expect(bitcoinIcon).toBeInTheDocument()
  })

  it('renders with long tag that gets truncated', () => {
    // Setup mock with a long tag
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'ThisIsAVeryLongTagThatShouldBeTruncated',
      isEditing: false,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Check that the tag is truncated in the mobile view
    const truncatedTag = screen.getByText('ThisI…')
    expect(truncatedTag).toBeInTheDocument()
  })

  it('changes to editing mode when edit button is clicked', async () => {
    // Setup mock
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'Test Tag',
      isEditing: false,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Click the edit button
    const editButton = screen.getByTitle('Edit tag')
    await userEvent.click(editButton)
    
    // setIsEditing should be called with true
    expect(setIsEditingMock).toHaveBeenCalledWith(true)
  })

  it('does not show copy button for invalid address', () => {
    // Setup mock for invalid address
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: '',
      isEditing: false,
      setIsEditing: setIsEditingMock,
      saveTag: saveTagMock,
      isAddress: true
    })
    
    // Invalid address - cast to bypass type checking for testing
    const invalidAddress = 'invalid-address' as unknown as BitcoinAddress
    renderWithTheme(<MemberIdentity id={invalidAddress} />)
    
    // Should only have the edit button
    expect(screen.getAllByRole('button').length).toBe(1)
  })
}) 