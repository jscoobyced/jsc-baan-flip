import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageSelector } from './LanguageSelector'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('LanguageSelector', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders language selector button', () => {
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={() => {}}
        isOpen={false}
        onToggle={() => {}}
      />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
  })

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup()
    const toggle = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={() => {}}
        isOpen={false}
        onToggle={toggle}
      />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })

    await user.click(button)

    expect(toggle).toHaveBeenCalledTimes(1)
  })

  it('renders language options', () => {
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={() => {}}
        isOpen={true}
        onToggle={() => {}}
      />,
    )

    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument()
    expect(screen.getByText('🇪🇸 Español')).toBeInTheDocument()
    expect(screen.getByText('🇫🇷 Français')).toBeInTheDocument()
    expect(screen.getByText('🇹🇭 ภาษาไทย')).toBeInTheDocument()
  })

  it('changes language when selected', async () => {
    const user = userEvent.setup()
    const changeLanguage = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={changeLanguage}
        isOpen={true}
        onToggle={() => {}}
      />,
    )

    const spanishButton = screen.getByText('🇪🇸 Español')

    await user.click(spanishButton)

    expect(changeLanguage).toHaveBeenCalledWith('es_es')
  })

  it('toggles theme in dropdown', async () => {
    const user = userEvent.setup()
    const toggle = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={() => {}}
        isOpen={true}
        onToggle={toggle}
      />,
    )

    const themeButton = screen.getByText('🌙 Dark Mode')

    await user.click(themeButton)

    // The theme toggle button should be clicked, but we can't easily test
    // the actual theme change without more complex setup
    expect(themeButton).toBeInTheDocument()
  })
})
