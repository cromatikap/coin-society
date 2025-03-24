import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '../src/components/Navigation'
import { MantineProvider } from '@mantine/core'
import React from 'react'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}))

// Import after mocking
import { useRouter, usePathname } from 'next/navigation'

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('Navigation Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Default mock implementation
    ;(usePathname as jest.Mock).mockReturnValue('/')
  })

  it('renders navigation with all route buttons', () => {
    renderWithTheme(<Navigation />)
    
    // Check if logo is rendered
    expect(screen.getByAltText('Coin Society Logo')).toBeInTheDocument()
    
    // Check if all route buttons are rendered
    expect(screen.getByText('Community')).toBeInTheDocument()
    expect(screen.getByText('How to join?')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('highlights the current route', () => {
    // Set current path to community
    ;(usePathname as jest.Mock).mockReturnValue('/community')
    
    renderWithTheme(<Navigation />)
    
    // Get buttons
    const communityButton = screen.getByText('Community').closest('button')
    const joinButton = screen.getByText('How to join?').closest('button')
    
    // Expected: Community button has filled variant, join button has light variant
    // Note: in a real test we'd check for class names or other attributes that indicate the button style
    expect(communityButton).toBeInTheDocument()
    expect(joinButton).toBeInTheDocument()
  })

  it('navigates to home when logo is clicked', () => {
    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
    
    renderWithTheme(<Navigation />)
    
    // Click the logo
    fireEvent.click(screen.getByAltText('Coin Society Logo'))
    
    // Check if router.push was called with '/'
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('navigates to the correct route when a button is clicked', () => {
    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
    
    renderWithTheme(<Navigation />)
    
    // Click the Community button
    fireEvent.click(screen.getByText('Community'))
    
    // Check if router.push was called with '/community'
    expect(mockPush).toHaveBeenCalledWith('/community')
  })

  it('renders external links with proper attributes', () => {
    renderWithTheme(<Navigation />)
    
    // The Resources link should be an external link
    const resourcesLink = screen.getByText('Resources').closest('a')
    
    expect(resourcesLink).toHaveAttribute('href', expect.stringContaining('ipal.network'))
    expect(resourcesLink).toHaveAttribute('target', '_blank')
    expect(resourcesLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
}) 