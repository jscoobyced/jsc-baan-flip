interface FeaturesProps {
  howItWorksTitle: string
  findProgramsTitle: string
  findProgramsDesc: string
  findRenovationTitle: string
  findRenovationDesc: string
  getRewardedTitle: string
  getRewardedDesc: string
}

const Features = ({
  howItWorksTitle,
  findProgramsTitle,
  findProgramsDesc,
  findRenovationTitle,
  findRenovationDesc,
  getRewardedTitle,
  getRewardedDesc,
}: FeaturesProps) => {
  return (
    <section className="py-10 px-4" role="region" aria-label="How It Works">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary-foreground mb-16">
          {howItWorksTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="text-center p-6"
            role="article"
            aria-label="Find Programs"
          >
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              {findProgramsTitle}
            </h3>
            <p className="text-primary-foreground">{findProgramsDesc}</p>
          </div>
          <div
            className="text-center p-6"
            role="article"
            aria-label="Report Vulnerabilities"
          >
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              {findRenovationTitle}
            </h3>
            <p className="text-primary-foreground">{findRenovationDesc}</p>
          </div>
          <div
            className="text-center p-6"
            role="article"
            aria-label="Get Rewarded"
          >
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              {getRewardedTitle}
            </h3>
            <p className="text-primary-foreground">{getRewardedDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
