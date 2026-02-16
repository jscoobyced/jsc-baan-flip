import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer text', () => {
    render(
      <ThemeProvider>
        <Footer
          footerCompany="Homeowners and Flippers Platform"
          footerTerms="Terms"
          footerPrivacy="Privacy"
          aboutUs="Careers"
          footerCopyright={`© ${new Date().getFullYear()} HackerOne. All rights reserved.`}
        />
      </ThemeProvider>,
    )
    // Check for one of the footer elements that should be present
    const footer = screen.getByText(/Homeowners and Flippers Platform/i)
    expect(footer).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    render(
      <ThemeProvider>
        <Footer
          footerCompany="Homeowners and Flippers Platform"
          footerTerms="Terms"
          footerPrivacy="Privacy"
          aboutUs="Careers"
          footerCopyright={`© ${new Date().getFullYear()} HackerOne. All rights reserved.`}
        />
      </ThemeProvider>,
    )
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('text-center')
  })
})
