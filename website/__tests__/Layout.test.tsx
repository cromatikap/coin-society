import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Layout, default as LayoutWrapper } from '../src/components/Layout/Layout'
import { MantineProvider } from '@mantine/core'
import React from 'react'

// Mock required components and hooks
jest.mock('@/components/Navigation', () => {
  const MockedNavigation = () => <div data-testid="mocked-navigation">Navigation Component</div>
  MockedNavigation.displayName = 'MockedNavigation'
  return MockedNavigation
})

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Import after mocking
import { usePathname } from 'next/navigation'

// Mock AppShell component
jest.mock('@mantine/core', () => {
  const originalModule = jest.requireActual('@mantine/core')
  
  const MockedAppShell: React.FC<{children: React.ReactNode}> & {
    Main: React.FC<{children: React.ReactNode}>
  } = ({ children }) => (
    <div data-testid="mocked-app-shell">{children}</div>
  )
  
  MockedAppShell.displayName = 'MockedAppShell'
  
  const MockedMain: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <main data-testid="mocked-app-shell-main">{children}</main>
  )
  MockedMain.displayName = 'MockedMain'
  
  MockedAppShell.Main = MockedMain
  
  return {
    ...originalModule,
    AppShell: MockedAppShell,
  }
})

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('Layout Components', () => {
  describe('Layout Component', () => {
    it('renders the Navigation and AppShell components', () => {
      // Render the Layout component
      renderWithTheme(
        <Layout>
          <div data-testid="test-children">Test Content</div>
        </Layout>
      )
      
      // Check if the Navigation component is rendered
      expect(screen.getByTestId('mocked-navigation')).toBeInTheDocument()
      
      // Check if the AppShell component is rendered
      expect(screen.getByTestId('mocked-app-shell')).toBeInTheDocument()
      
      // Check if the AppShell.Main component is rendered
      expect(screen.getByTestId('mocked-app-shell-main')).toBeInTheDocument()
      
      // Check if the children are rendered
      expect(screen.getByTestId('test-children')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })
  })
  
  describe('LayoutWrapper Component', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    
    afterEach(() => {
      // Clear the DOM between tests
      jest.clearAllMocks()
    })
    
    it('renders children directly when pathname is home ("/")', () => {
      // Mock the usePathname hook to return '/'
      (usePathname as jest.Mock).mockReturnValue('/')
      
      // Render the LayoutWrapper component
      renderWithTheme(
        <LayoutWrapper>
          <div data-testid="test-children">Test Content</div>
        </LayoutWrapper>
      )
      
      // Check if children are rendered directly
      expect(screen.getByTestId('test-children')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
      
      // Check that the Layout components are not rendered
      expect(screen.queryByTestId('mocked-navigation')).not.toBeInTheDocument()
      expect(screen.queryByTestId('mocked-app-shell')).not.toBeInTheDocument()
      expect(screen.queryByTestId('mocked-app-shell-main')).not.toBeInTheDocument()
    })
    
    it('renders children within Layout when pathname is not home', () => {
      // Mock the usePathname hook to return a different route
      (usePathname as jest.Mock).mockReturnValue('/community')
      
      // Render the LayoutWrapper component
      renderWithTheme(
        <LayoutWrapper>
          <div data-testid="test-children">Test Content</div>
        </LayoutWrapper>
      )
      
      // Check if children are rendered
      expect(screen.getByTestId('test-children')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
      
      // Check that the Layout components are rendered
      expect(screen.getByTestId('mocked-navigation')).toBeInTheDocument()
      expect(screen.getByTestId('mocked-app-shell')).toBeInTheDocument()
      expect(screen.getByTestId('mocked-app-shell-main')).toBeInTheDocument()
    })
    
    it.each([
      '/how-to-join',
      '/about',
      '/some-other-route'
    ])('renders children within Layout for route: %s', (route) => {
      // Mock the usePathname hook to return the current route
      (usePathname as jest.Mock).mockReturnValue(route)
      
      // Render the LayoutWrapper component with the current route
      const { unmount } = renderWithTheme(
        <LayoutWrapper>
          <div data-testid="test-children">{route} Content</div>
        </LayoutWrapper>
      )
      
      // Check if the Layout is used
      expect(screen.getByTestId('mocked-navigation')).toBeInTheDocument()
      expect(screen.getByTestId('mocked-app-shell')).toBeInTheDocument()
      expect(screen.getByTestId('mocked-app-shell-main')).toBeInTheDocument()
      
      // Check if the children are rendered
      expect(screen.getByTestId('test-children')).toBeInTheDocument()
      expect(screen.getByText(`${route} Content`)).toBeInTheDocument()
      
      // Clean up after each iteration
      unmount()
    })
  })
}) 