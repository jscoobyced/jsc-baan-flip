import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Footer } from './Footer'
import { ThemeProvider } from '../contexts/ThemeContext'

// Mock the content manager
vi.mock('../services/ContentManager', async () => {
  const mockContentManager = {
    getContent: vi.fn().mockImplementation((key) => {
      const contentMap: Record<string, string> = {
        footer_company: 'Bug Bounty Platform',
        footer_terms: 'Terms',
        footer_privacy: 'Privacy',
        footer_security: 'Security',
        footer_careers: 'Careers',
        footer_copyright: '© {year} HackerOne. All rights reserved.',
      }
      return contentMap[key] || key
    }),
    getContentWithParams: vi.fn().mockImplementation((key, params) => {
      if (key === 'footer_copyright') {
        return `© ${params.year} HackerOne. All rights reserved.`
      }
      return key
    }),
  }

  return {
    contentManager: mockContentManager,
    ContentManager: vi.fn().mockImplementation(() => mockContentManager),
  }
})

describe('Footer', () => {
  it('renders footer text', () => {
    render(
      <ThemeProvider> 
        <Footer /> 
      </ThemeProvider> 
    )
    // Check for one of the footer elements that should be present
    const footer = screen.getByText(/Bug Bounty Platform/i)
    expect(footer).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('text-center')
  })
})
