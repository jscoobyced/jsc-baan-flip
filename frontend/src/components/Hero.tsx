import { useState } from 'react'
import { contentManager } from '../services/ContentManager'

export const Hero = () => {
  const [userType, setUserType] = useState<'owner' | 'flipper'>('owner')

  const toggleUserType = () => {
    setUserType(userType === 'owner' ? 'flipper' : 'owner')
  }

  return (
    <div className="relative py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {contentManager.getContent('hero_title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {contentManager.getContent('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  userType === 'owner'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={toggleUserType}
              >
                {userType === 'owner'
                  ? contentManager.getContent('cta_button1')
                  : contentManager.getContent('cta_button3')}
              </button>
              <button
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  userType === 'flipper'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={toggleUserType}
              >
                {userType === 'flipper'
                  ? contentManager.getContent('cta_button1')
                  : contentManager.getContent('cta_button2')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
