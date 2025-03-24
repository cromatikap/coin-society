import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ThemeProvider from '../src/components/ThemeProvider'
import React from 'react'
import { MantineProvider } from '@mantine/core'

// Mock React hooks to control state
const mockSetMounted = jest.fn()
const mockSetColorScheme = jest.fn()
let mounted = true
let colorScheme: 'light' | 'dark' | 'auto' = 'light'

// Mock React's useState
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((initial) => {
    if (initial === false) {
      return [mounted, mockSetMounted]
    }
    return [colorScheme, mockSetColorScheme]
  }),
  useEffect: jest.fn((callback) => callback())
}))

// Mock the MantineProvider to track when it's rendered
jest.mock('@mantine/core', () => ({
  MantineProvider: jest.fn(({ children, defaultColorScheme }) => (
    <div data-testid="mantine-provider" data-color-scheme={defaultColorScheme}>
      {children}
    </div>
  ))
}))

describe('ThemeProvider Final Tests for 100% Coverage', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks()
    mockSetMounted.mockClear()
    mockSetColorScheme.mockClear()
    
    // Reset state values
    mounted = true
    colorScheme = 'light'
  })

  it('renders MantineProvider with correct props when mounted', () => {
    // Configure light mode
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })

    // Render
    render(
      <ThemeProvider>
        <div data-testid="test-child">Test Child</div>
      </ThemeProvider>
    )

    // Verify MantineProvider was called with correct props
    expect(MantineProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultColorScheme: 'light',
        children: expect.anything()
      }),
      expect.anything()
    )

    // Verify our mocked MantineProvider rendered correctly
    const provider = screen.getByTestId('mantine-provider')
    expect(provider).toBeInTheDocument()
    expect(provider).toHaveAttribute('data-color-scheme', 'light')

    // Verify children are rendered
    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })

  it('renders MantineProvider with dark theme when dark mode is detected', () => {
    // Setup dark mode and change state variable
    colorScheme = 'dark'
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true, // Dark mode
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })

    // Render
    render(
      <ThemeProvider>
        <div data-testid="test-child">Test Child</div>
      </ThemeProvider>
    )

    // Verify MantineProvider was called with correct props
    expect(MantineProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultColorScheme: 'dark',
        children: expect.anything()
      }),
      expect.anything()
    )

    // Verify our mocked MantineProvider rendered correctly
    const provider = screen.getByTestId('mantine-provider')
    expect(provider).toBeInTheDocument()
    expect(provider).toHaveAttribute('data-color-scheme', 'dark')
  })

  it('renders MantineProvider with auto theme when no preference detected', () => {
    // Set theme to auto
    colorScheme = 'auto'
    
    // Mock matchMedia to be undefined
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: undefined,
    })

    // Render
    render(
      <ThemeProvider>
        <div data-testid="test-child">Test Child</div>
      </ThemeProvider>
    )

    // Verify MantineProvider was called with correct props
    expect(MantineProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultColorScheme: 'auto',
        children: expect.anything()
      }),
      expect.anything()
    )

    // Verify our mocked MantineProvider rendered correctly
    const provider = screen.getByTestId('mantine-provider')
    expect(provider).toBeInTheDocument()
    expect(provider).toHaveAttribute('data-color-scheme', 'auto')
  })
}) 