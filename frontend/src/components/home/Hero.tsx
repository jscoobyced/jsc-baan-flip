import { useState } from 'react'
import { HeroButton } from './HeroButton'

interface HeroProps {
  heroTitle: string
  heroSubtitle: string
  ctaButton1: string
  ctaButton2: string
  ctaButton3: string
}

const Hero = ({
  heroTitle,
  heroSubtitle,
  ctaButton1,
  ctaButton2,
  ctaButton3,
}: HeroProps) => {
  const [userType, setUserType] = useState<'owner' | 'flipper'>('flipper')

  const toggleUserType = (selectedType: 'owner' | 'flipper') => {
    if (userType === selectedType) {
      void 0
    } else {
      setUserType(selectedType)
    }
  }

  return (
    <div className="relative py-15 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl text-secondary-foreground mb-8">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <HeroButton
                userType={userType}
                buttonType="flipper"
                toggleUserType={toggleUserType}
                text={userType === 'flipper' ? ctaButton1 : ctaButton3}
              />
              <HeroButton
                userType={userType}
                buttonType="owner"
                toggleUserType={toggleUserType}
                text={userType === 'owner' ? ctaButton1 : ctaButton2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
