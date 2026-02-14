import { contentManager } from '../services/ContentManager'

export const Footer = () => {
  return (
    <footer className="mt-10 py-8 px-4 text-center text-gray-600 dark:text-gray-400 font-family-sans border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-900 dark:text-white font-semibold">
              {contentManager.getContent('footer_company')}
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {contentManager.getContent('footer_terms')}
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {contentManager.getContent('footer_privacy')}
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {contentManager.getContent('footer_security')}
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              {contentManager.getContent('footer_careers')}
            </a>
          </div>
        </div>
        <div className="mt-6 text-sm">
          <p>
            {contentManager.getContentWithParams('footer_copyright', { year: new Date().getFullYear().toString() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
