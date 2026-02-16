import { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from './components/common/Footer'
import { LanguageSelector } from './components/common/LanguageSelector'
import { contentManager } from './services/ContentManager'

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en_us')

  useEffect(() => {
    const loadContent = async () => {
      const contentLoaded = await contentManager.loadContent(currentLanguage)
      setContentLoaded(contentLoaded)
    }
    loadContent()
  }, [currentLanguage])

  const changeLanguage = (language: string) => {
    if (language === currentLanguage) return
    setContentLoaded(false)
    setCurrentLanguage(language)
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-primary"
      role="region"
      aria-label="Main application container"
    >
      <div
        className="flex justify-end items-center p-4"
        aria-label="Language selector"
      >
        <LanguageSelector
          currentLanguage={currentLanguage}
          onChangeLanguage={changeLanguage}
        />
      </div>
      {!contentLoaded && (
        <div
          className="grow flex items-center justify-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-secondary-foreground text-lg">
            Loading content...
          </p>
        </div>
      )}
      {contentLoaded && <Outlet />}
      <Footer
        footerCompany={contentManager.getContent('footer_company')}
        footerTerms={contentManager.getContent('footer_terms')}
        footerPrivacy={contentManager.getContent('footer_privacy')}
        aboutUs={contentManager.getContent('about_us')}
        footerCopyright={contentManager.getContentWithParams(
          'footer_copyright',
          {
            year: new Date().getFullYear().toString(),
          },
        )}
      />
      <ScrollRestoration />
    </div>
  )
}

export default App
