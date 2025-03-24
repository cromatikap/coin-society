import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ThemeProvider from '../src/components/ThemeProvider'
import React, { Dispatch, SetStateAction } from 'react'

// Mock React hooks
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn()
}))

describe('ThemeProvider Component', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks()
    
    // Setup useState mock with proper typing
    const useStateMock = jest.spyOn(React, 'useState')
    useStateMock.mockImplementation(<T,>(initialValue: T): [T, Dispatch<SetStateAction<T>>] => {
      return [initialValue, jest.fn() as Dispatch<SetStateAction<T>>]
    })
    
    // Setup useEffect mock to execute callback
    const useEffectMock = jest.spyOn(React, 'useEffect')
    useEffectMock.mockImplementation(f => f())
  })
  
  it('renders without crashing', () => {
    // Mock window.matchMedia
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
    
    // Act
    const { container } = render(
      <ThemeProvider>
        <div data-testid="test-child">Test Child</div>
      </ThemeProvider>
    )
    
    // Assert
    expect(container).toBeTruthy()
  })
  
  it('handles light theme detection', () => {
    // Mock window.matchMedia for light theme
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false, // false indicates light theme
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })
    
    // Re-mock useState to capture state changes
    const setColorSchemeMock = jest.fn()
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, jest.fn()]) // mounted state
    jest.spyOn(React, 'useState').mockImplementationOnce(() => ['auto', setColorSchemeMock]) // colorScheme state
    
    // Act
    render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    )
    
    // Assert
    expect(setColorSchemeMock).toHaveBeenCalledWith('light')
  })
  
  it('handles dark theme detection', () => {
    // Mock window.matchMedia for dark theme
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true, // true indicates dark theme
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })
    
    // Re-mock useState to capture state changes
    const setColorSchemeMock = jest.fn()
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, jest.fn()]) // mounted state
    jest.spyOn(React, 'useState').mockImplementationOnce(() => ['auto', setColorSchemeMock]) // colorScheme state
    
    // Act
    render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    )
    
    // Assert
    expect(setColorSchemeMock).toHaveBeenCalledWith('dark')
  })
}) 