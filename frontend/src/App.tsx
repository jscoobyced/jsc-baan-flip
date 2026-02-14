import { useEffect, useState } from 'react'
import { Footer } from './components/common/Footer'
import { LanguageSelector } from './components/common/LanguageSelector'
import Home from './components/home/Home'
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
      {contentLoaded ? (
        <Home contentManager={contentManager} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-semibold text-primary-foreground">
            Loading...
          </p>
        </div>
      )}
      <Footer
        footerCompany={contentManager.getContent('footer_company')}
        footerTerms={contentManager.getContent('footer_terms')}
        footerPrivacy={contentManager.getContent('footer_privacy')}
        footerCareers={contentManager.getContent('footer_careers')}
        footerCopyright={contentManager.getContentWithParams(
          'footer_copyright',
          {
            year: new Date().getFullYear().toString(),
          },
        )}
      />
    </div>
  )
}

export default App
