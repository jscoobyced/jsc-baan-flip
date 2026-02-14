import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'

// Mock the content manager
vi.mock('../services/ContentManager', async () => {
  const mockContentManager = {
    loadContent: vi.fn().mockResolvedValue({}),
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

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders LanguageSelector button', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
  })

  it('renders Footer', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    // Check for one of the footer elements that should be present
    const footer = screen.getByText(/Bug Bounty Platform/i)
    expect(footer).toBeInTheDocument()
  })
})
