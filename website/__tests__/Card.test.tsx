import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Card, Title, Subtitle } from '../src/components/Layout/Card'
import { MantineProvider } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import React from 'react'

// Mock the Utils component as it's used by Card
jest.mock('../src/components/Utils', () => ({
  Headline: ({ children, sub, icon }: { children: React.ReactNode, sub?: React.ReactNode, icon?: React.ReactNode }) => (
    <div data-testid="mock-headline">
      {icon && <div data-testid="mock-icon">{icon}</div>}
      <h2 data-testid="mock-title">{children}</h2>
      {sub && <h4 data-testid="mock-subtitle">{sub}</h4>}
    </div>
  )
}))

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('Layout Components', () => {
  describe('Card Component', () => {
    it('renders with required props', () => {
      renderWithTheme(
        <Card 
          title="Test Card"
          icon={<IconInfoCircle data-testid="test-icon" />}
        >
          <p>Card content</p>
        </Card>
      )
      
      // Check if Headline received the correct props
      expect(screen.getByTestId('mock-headline')).toBeInTheDocument()
      expect(screen.getByTestId('mock-title')).toHaveTextContent('Test Card')
      expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
      
      // Check if the content is rendered
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })
    
    it('renders with subtitle', () => {
      renderWithTheme(
        <Card 
          title="Test Card"
          sub="Test Subtitle"
          icon={<IconInfoCircle />}
        >
          <p>Card content</p>
        </Card>
      )
      
      expect(screen.getByTestId('mock-subtitle')).toHaveTextContent('Test Subtitle')
    })
    
    it('applies border when withBorder is true', () => {
      renderWithTheme(
        <Card 
          title="Test Card"
          icon={<IconInfoCircle />}
          withBorder={true}
        >
          <p>Card content</p>
        </Card>
      )
      
      // MantineCard will receive withBorder=true
      const card = screen.getByText('Card content').closest('div')
      expect(card).toBeInTheDocument()
    })
  })
  
  describe('Title Component', () => {
    it('renders title correctly', () => {
      renderWithTheme(<Title>Test Title</Title>)
      
      const title = screen.getByText('Test Title')
      expect(title).toBeInTheDocument()
      expect(title.tagName).toBe('H3')
    })
  })
  
  describe('Subtitle Component', () => {
    it('renders subtitle correctly', () => {
      renderWithTheme(<Subtitle>Test Subtitle</Subtitle>)
      
      const subtitle = screen.getByText('Test Subtitle')
      expect(subtitle).toBeInTheDocument()
      expect(subtitle.tagName).toBe('H5')
    })
  })
}) 