import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import WhoWeAre from '../src/components/HomePage/WhoWeAre'
import { MantineProvider } from '@mantine/core'
import React from 'react'

// Mock the Card component from Layout
jest.mock('../src/components/Layout/Card', () => ({
  Card: ({ children, title, icon }: { children: React.ReactNode, title: string, icon: React.ReactNode }) => (
    <div data-testid="mock-card">
      <div data-testid="mock-card-icon">{icon}</div>
      <h2 data-testid="mock-card-title">{title}</h2>
      <div data-testid="mock-card-content">{children}</div>
    </div>
  )
}))

// Skip Description, ResearchProgram, and FAQ tests due to Mantine component complexity
jest.mock('../src/components/HomePage/Description', () => {
  const MockedDescription = () => <div>Mocked Description</div>
  MockedDescription.displayName = 'MockedDescription'
  return MockedDescription
})

jest.mock('../src/components/HomePage/ResearchProgram', () => {
  const MockedResearchProgram = () => <div>Mocked ResearchProgram</div>
  MockedResearchProgram.displayName = 'MockedResearchProgram'
  return MockedResearchProgram
})

jest.mock('../src/components/HomePage/FAQ', () => {
  const MockedFAQ = () => <div>Mocked FAQ</div>
  MockedFAQ.displayName = 'MockedFAQ'
  return MockedFAQ
})

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('HomePage Components', () => {
  describe('WhoWeAre Component', () => {
    it('renders with correct title and content', () => {
      renderWithTheme(<WhoWeAre />)
      
      // Check if card title is correct
      expect(screen.getByTestId('mock-card-title')).toHaveTextContent('Who we are?')
      
      // Check for presence of key content
      const content = screen.getByTestId('mock-card-content')
      expect(content).toHaveTextContent('We are the coin society')
      expect(content).toHaveTextContent('satoshis')
      
      // Check links are present
      const links = screen.getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)
      
      // Check specific link
      expect(screen.getByText('How to join?')).toBeInTheDocument()
    })
  })
}) 