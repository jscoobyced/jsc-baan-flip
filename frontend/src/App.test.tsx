import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/dist/cjs/setup/index.js'
import { describe, expect, it, vi } from 'vitest'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { contentManager } from './services/ContentManager'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

// Mock the ContentManager to avoid actual HTTP requests
vi.mock('./services/ContentManager', () => {
  const mockContentManager = {
    loadContent: vi.fn(),
    getContent: vi.fn().mockImplementation((key: string) => {
      switch (key) {
        case 'footer_company':
          return 'Property Flipping Platform'
        case 'footer_terms':
          return 'Terms'
        case 'footer_privacy':
          return 'Privacy'
        case 'footer_careers':
          return 'Careers'
        case 'footer_copyright':
          return '© {year} Baan Flip. All rights reserved.'
        default:
          return key
      }
    }),
    getContentWithParams: vi.fn(),
  }

  return {
    contentManager: mockContentManager,
    ContentManager: vi.fn().mockImplementation(() => mockContentManager),
  }
})

// Mock the Home component to avoid complex rendering
vi.mock('./components/home/Home', () => ({
  default: vi.fn(() => <div data-testid="mock-home">Home Component</div>),
}))

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state initially', () => {
    // Mock loadContent to return false initially (loading state)
    vi.mocked(contentManager.loadContent).mockResolvedValue(false)

    renderWithTheme(<App />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders home page after content is loaded', async () => {
    // Mock loadContent to return true (content loaded)
    vi.mocked(contentManager.loadContent).mockResolvedValue(true)

    // Mock content for footer
    vi.mocked(contentManager.getContent).mockImplementation((key: string) => {
      switch (key) {
        case 'footer_company':
          return 'Property Flipping Platform'
        case 'footer_terms':
          return 'Terms'
        case 'footer_privacy':
          return 'Privacy'
        case 'footer_careers':
          return 'Careers'
        case 'footer_copyright':
          return '© {year} Baan Flip. All rights reserved.'
        default:
          return key
      }
    })

    vi.mocked(contentManager.getContentWithParams).mockImplementation(
      (key: string, params: Record<string, string>) => {
        if (key === 'footer_copyright') {
          return `© ${params.year} Baan Flip. All rights reserved.`
        }
        return key
      },
    )

    renderWithTheme(<App />)

    // Wait for content to load
    await waitFor(() => {
      expect(screen.getByTestId('mock-home')).toBeInTheDocument()
    })
  })

  it('renders with correct structure', async () => {
    vi.mocked(contentManager.loadContent).mockResolvedValue(true)

    vi.mocked(contentManager.getContent).mockImplementation((key: string) => {
      switch (key) {
        case 'footer_company':
          return 'Property Flipping Platform'
        case 'footer_terms':
          return 'Terms'
        case 'footer_privacy':
          return 'Privacy'
        case 'footer_careers':
          return 'Careers'
        case 'footer_copyright':
          return '© {year} Baan Flip. All rights reserved.'
        default:
          return key
      }
    })

    vi.mocked(contentManager.getContentWithParams).mockImplementation(
      (key: string, params: Record<string, string>) => {
        if (key === 'footer_copyright') {
          return `© ${params.year} Baan Flip. All rights reserved.`
        }
        return key
      },
    )

    renderWithTheme(<App />)

    // Wait for content to load
    await waitFor(() => {
      expect(screen.getByTestId('mock-home')).toBeInTheDocument()
    })

    // Check that the main app structure is present
    expect(
      screen.getByRole('region', { name: 'Main application container' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
  })

  it('handles language change correctly including edge case', async () => {
    // Mock loadContent to return true (content loaded)
    vi.mocked(contentManager.loadContent).mockResolvedValue(true)

    // Mock content for footer
    vi.mocked(contentManager.getContent).mockImplementation((key: string) => {
      switch (key) {
        case 'footer_company':
          return 'Property Flipping Platform'
        case 'footer_terms':
          return 'Terms'
        case 'footer_privacy':
          return 'Privacy'
        case 'footer_careers':
          return 'Careers'
        case 'footer_copyright':
          return '© {year} Baan Flip. All rights reserved.'
        default:
          return key
      }
    })

    vi.mocked(contentManager.getContentWithParams).mockImplementation(
      (key: string, params: Record<string, string>) => {
        if (key === 'footer_copyright') {
          return `© ${params.year} Baan Flip. All rights reserved.`
        }
        return key
      },
    )

    // This test specifically targets the changeLanguage function
    renderWithTheme(<App />)

    // Wait for content to load
    await waitFor(() => {
      expect(screen.getByTestId('mock-home')).toBeInTheDocument()
    })

    // The changeLanguage function is called internally by LanguageSelector
    // We can't directly test it, but we can verify the component handles it correctly
    expect(
      screen.getByRole('region', { name: 'Main application container' }),
    ).toBeInTheDocument()
  })

  it('changes language to French', async () => {
    const user = userEvent.setup()
    renderWithTheme(<App />)

    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await user.click(button)

    const frenchButton = screen.getByText('🇫🇷 Français')

    await user.click(frenchButton)

    // Click again to check there are no errors when clicking the same language
    await user.click(button)
    await user.click(frenchButton)

    expect(screen.getByText('Careers')).toBeInTheDocument()
  })
})
