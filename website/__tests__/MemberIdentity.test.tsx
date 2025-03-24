import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MemberIdentity from '@/components/MemberIdentity'
import { MantineProvider } from '@mantine/core'

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

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('MemberIdentity Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders with a valid bitcoin address', () => {
    // Setup mock for this test
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: 'Test Tag',
      isEditing: false,
      setIsEditing: jest.fn(),
      saveTag: jest.fn(),
      isAddress: true
    })
    
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<MemberIdentity id={testAddress} />)
    
    // Test tag should be displayed
    expect(screen.getByText('Test Tag')).toBeInTheDocument()
    
    // Edit button should be present
    const editButton = screen.getByTitle('Edit tag')
    expect(editButton).toBeInTheDocument()
    
    // Copy button should be present
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0)
  })

  it('renders with a non-address ID', () => {
    // Setup mock for this test
    (useAddressTag as jest.Mock).mockReturnValue({
      tag: '',
      isEditing: false,
      setIsEditing: jest.fn(),
      saveTag: jest.fn(),
      isAddress: false
    })
    
    renderWithTheme(<MemberIdentity id={123} />)
    
    // Number ID should be displayed
    expect(screen.getByText('123')).toBeInTheDocument()
    
    // Edit button should be present
    const editButton = screen.getByTitle('Edit tag')
    expect(editButton).toBeInTheDocument()
  })
}) 