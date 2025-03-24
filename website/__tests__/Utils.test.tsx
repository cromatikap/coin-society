import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { LinkExt, LinkOrg, Headline } from '../src/components/Utils'
import { MantineProvider } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import React from 'react'

// Mock the config module
jest.mock('../src/config', () => ({
  ensOrgUrl: 'https://example.org'
}))

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('Utils Components', () => {
  describe('LinkExt Component', () => {
    it('renders with href prop', () => {
      renderWithTheme(<LinkExt href="https://example.com">Test Link</LinkExt>)
      
      const link = screen.getByText('Test Link')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', 'https://example.com')
      expect(link.closest('a')).toHaveAttribute('target', '_blank')
      expect(link.closest('a')).toHaveAttribute('rel', 'noreferrer')
    })

    it('renders with url prop', () => {
      renderWithTheme(<LinkExt url="https://example.org">Test URL</LinkExt>)
      
      const link = screen.getByText('Test URL')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', 'https://example.org')
    })

    it('renders with fallback when no href or url', () => {
      renderWithTheme(<LinkExt>Fallback Link</LinkExt>)
      
      const link = screen.getByText('Fallback Link')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', '#')
    })
  })

  describe('LinkOrg Component', () => {
    it('renders with correct org URL', () => {
      renderWithTheme(<LinkOrg />)
      
      const link = screen.getByText('coin-society.eth')
      expect(link).toBeInTheDocument()
      expect(link.closest('a')).toHaveAttribute('href', 'https://example.org')
      expect(link.closest('a')).toHaveAttribute('target', '_blank')
    })
  })

  describe('Headline Component', () => {
    it('renders with title and without subtitle', () => {
      renderWithTheme(<Headline>Test Headline</Headline>)
      
      expect(screen.getByText('Test Headline')).toBeInTheDocument()
      expect(screen.queryByRole('heading', { level: 4 })).not.toBeInTheDocument()
    })

    it('renders with title and subtitle', () => {
      renderWithTheme(
        <Headline sub="Subtitle Text">Main Title</Headline>
      )
      
      expect(screen.getByText('Main Title')).toBeInTheDocument()
      expect(screen.getByText('Subtitle Text')).toBeInTheDocument()
    })

    it('renders with icon', () => {
      renderWithTheme(
        <Headline icon={<IconInfoCircle data-testid="test-icon" />}>
          With Icon
        </Headline>
      )
      
      expect(screen.getByText('With Icon')).toBeInTheDocument()
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    })
  })
}) 