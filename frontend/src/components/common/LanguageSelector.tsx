import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'

interface LanguageSelectorProps {
  currentLanguage: string
  onChangeLanguage: (language: string) => void
}

export const LanguageSelector = ({
  currentLanguage,
  onChangeLanguage,
}: LanguageSelectorProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)!
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-2xl hover:scale-110 transition-transform"
        aria-label="Language selector"
      >
        🌐
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              onChangeLanguage('en_us')
              toggleDropdown()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'en_us'
                ? 'bg-secondary-foreground text-secondary'
                : 'bg-primary text-primary-foreground hover:bg-secondary-foreground'
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => {
              onChangeLanguage('es_es')
              toggleDropdown()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'es_es'
                ? 'bg-secondary-foreground text-secondary'
                : 'bg-primary text-primary-foreground hover:bg-secondary-foreground'
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => {
              onChangeLanguage('fr_fr')
              toggleDropdown()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'fr_fr'
                ? 'bg-secondary-foreground text-secondary'
                : 'bg-primary text-primary-foreground hover:bg-secondary-foreground'
            }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => {
              onChangeLanguage('th_th')
              toggleDropdown()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'th_th'
                ? 'bg-secondary-foreground text-secondary'
                : 'bg-primary text-primary-foreground hover:bg-secondary-foreground'
            }`}
          >
            🇹🇭 ภาษาไทย
          </button>
          <div className="border-t border-gray-300 dark:border-gray-700 my-1"></div>
          <div className="px-4 py-2">
            <button
              onClick={() => {
                toggleTheme()
                toggleDropdown()
              }}
              className="w-full flex items-center justify-center p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
