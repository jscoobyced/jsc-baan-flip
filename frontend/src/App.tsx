import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LanguageSelector } from './components/LanguageSelector'
import { contentManager } from './services/ContentManager'

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en_us')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const loadContent = async () => {
      await contentManager.loadContent(currentLanguage)
      setContentLoaded(true)
    }
    loadContent()
  }, [currentLanguage])

  const changeLanguage = (language: string) => {
    if (language === currentLanguage) return
    setContentLoaded(false)
    setCurrentLanguage(language)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="flex justify-end items-center p-4">
        <LanguageSelector
          currentLanguage={currentLanguage}
          onChangeLanguage={changeLanguage}
          isOpen={isDropdownOpen}
          onToggle={toggleDropdown}
        />
      </div>
      <main className="grow">
        {contentLoaded ? (
          <>
            <Hero />

            {/* Features Section */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
                  {contentManager.getContent('how_it_works')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('find_programs')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('find_programs_desc')}
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('report_vulnerabilities')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('report_vulnerabilities_desc')}
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <div className="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('get_rewarded')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('get_rewarded_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('stats_organizations')}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('stats_organizations_label')}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('stats_vulnerabilities')}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('stats_vulnerabilities_label')}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('stats_bounties')}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('stats_bounties_label')}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {contentManager.getContent('stats_researchers')}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {contentManager.getContent('stats_researchers_label')}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {contentManager.getContent('cta_title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                  {contentManager.getContent('cta_subtitle')}
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  {contentManager.getContent('cta_button4')}
                </button>
              </div>
            </section>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              Loading...
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
