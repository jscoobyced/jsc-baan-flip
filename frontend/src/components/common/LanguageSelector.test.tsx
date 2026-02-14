import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { LanguageSelector } from './LanguageSelector'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('LanguageSelector', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders language selector button', async () => {
    renderWithTheme(
      <LanguageSelector currentLanguage="en_us" onChangeLanguage={() => {}} />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
  })

  it('renders language options when dropdown is open', async () => {
    renderWithTheme(
      <LanguageSelector currentLanguage="en_us" onChangeLanguage={() => {}} />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument()
    expect(screen.getByText('🇪🇸 Español')).toBeInTheDocument()
    expect(screen.getByText('🇫🇷 Français')).toBeInTheDocument()
    expect(screen.getByText('🇹🇭 ภาษาไทย')).toBeInTheDocument()
  })

  it('changes language to English', async () => {
    const user = userEvent.setup()
    const changeLanguage = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="es_es"
        onChangeLanguage={changeLanguage}
      />,
    )

    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const englishButton = screen.getByText('🇺🇸 English')

    await user.click(englishButton)

    expect(changeLanguage).toHaveBeenCalledWith('en_us')
  })

  it('changes language to Spanish', async () => {
    const user = userEvent.setup()
    const changeLanguage = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={changeLanguage}
      />,
    )

    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const spanishButton = screen.getByText('🇪🇸 Español')

    await user.click(spanishButton)

    expect(changeLanguage).toHaveBeenCalledWith('es_es')
  })

  it('changes language to French', async () => {
    const user = userEvent.setup()
    const changeLanguage = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={changeLanguage}
      />,
    )

    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const frenchButton = screen.getByText('🇫🇷 Français')

    await user.click(frenchButton)

    expect(changeLanguage).toHaveBeenCalledWith('fr_fr')
  })

  it('changes language to Thai', async () => {
    const user = userEvent.setup()
    const changeLanguage = vi.fn()
    renderWithTheme(
      <LanguageSelector
        currentLanguage="en_us"
        onChangeLanguage={changeLanguage}
      />,
    )

    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const thaiButton = screen.getByText('🇹🇭 ภาษาไทย')

    await user.click(thaiButton)

    expect(changeLanguage).toHaveBeenCalledWith('th_th')
  })

  it('toggles theme in dropdown', async () => {
    renderWithTheme(
      <LanguageSelector currentLanguage="en_us" onChangeLanguage={() => {}} />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const themeButton = screen.getByText('🌙 Dark Mode')
    expect(themeButton).toBeInTheDocument()
  })

  it('toggles theme to light mode', async () => {
    const user = userEvent.setup()
    renderWithTheme(
      <LanguageSelector currentLanguage="en_us" onChangeLanguage={() => {}} />,
    )
    const button = screen.getByRole('button', { name: /language selector/i })
    expect(button).toBeInTheDocument()
    await userEvent.click(button)

    const darkThemeButton = screen.getByText('🌙 Dark Mode')
    expect(darkThemeButton).toBeInTheDocument()

    await user.click(darkThemeButton)
    await userEvent.click(button)
    const lightThemeButton = screen.getByText('☀️ Light Mode')
    expect(lightThemeButton).toBeInTheDocument()
  })
})
