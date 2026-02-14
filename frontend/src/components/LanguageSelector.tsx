import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

interface LanguageSelectorProps {
  currentLanguage: string
  onChangeLanguage: (language: string) => void
  isOpen: boolean
  onToggle: () => void
}

export const LanguageSelector = ({
  currentLanguage,
  onChangeLanguage,
  isOpen,
  onToggle,
}: LanguageSelectorProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)!

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="text-2xl hover:scale-110 transition-transform"
        aria-label="Language selector"
      >
        🌐
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              onChangeLanguage('en_us')
              onToggle()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'en_us'
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => {
              onChangeLanguage('es_es')
              onToggle()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'es_es'
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => {
              onChangeLanguage('fr_fr')
              onToggle()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'fr_fr'
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => {
              onChangeLanguage('th_th')
              onToggle()
            }}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === 'th_th'
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🇹🇭 ภาษาไทย
          </button>
          <div className="border-t border-gray-300 dark:border-gray-700 my-1"></div>
          <div className="px-4 py-2">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
