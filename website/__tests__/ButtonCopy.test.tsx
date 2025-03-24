import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ButtonCopy from '@/components/ButtonCopy'
import { MantineProvider } from '@mantine/core'

const renderWithTheme = (ui: React.ReactElement) => {
  return render(
    <MantineProvider defaultColorScheme="light">
      {ui}
    </MantineProvider>
  )
}

describe('ButtonCopy Component', () => {
  it('renders with the correct bitcoin address', () => {
    const testAddress = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq'
    renderWithTheme(<ButtonCopy address={testAddress} />)
    
    // The CopyButton from Mantine wraps our component
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    
    // Check that the copy icon is initially visible
    const copyIcon = document.querySelector('svg')
    expect(copyIcon).toBeInTheDocument()
  })
}) 