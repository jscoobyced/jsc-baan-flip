import { ContentManager } from '../../services/ContentManager'
import Features from '../home/Features'
import Hero from '../home/Hero'
import HomeCta from '../home/HomeCta'
import Stats from '../home/Stats'

interface HomeProps {
  contentManager: ContentManager
}

const Home = ({ contentManager }: HomeProps) => {
  return (
    <main className="grow">
      <Hero
        heroTitle={contentManager.getContent('hero_title')}
        heroSubtitle={contentManager.getContent('hero_subtitle')}
        ctaButton1={contentManager.getContent('cta_button_1')}
        ctaButton2={contentManager.getContent('cta_button_2')}
        ctaButton3={contentManager.getContent('cta_button_3')}
      />
      <Features
        howItWorksTitle={contentManager.getContent('how_it_works')}
        findProgramsTitle={contentManager.getContent('find_programs')}
        findProgramsDesc={contentManager.getContent('find_programs_desc')}
        findRenovationTitle={contentManager.getContent('find_renovation')}
        findRenovationDesc={contentManager.getContent('find_renovation_desc')}
        getRewardedTitle={contentManager.getContent('get_rewarded')}
        getRewardedDesc={contentManager.getContent('get_rewarded_desc')}
      />
      <Stats
        statsOrganizations={contentManager.getContent('stats_organizations')}
        statsOrganizationsLabel={contentManager.getContent(
          'stats_organizations_label',
        )}
        statsProperties={contentManager.getContent('stats_properties')}
        statsPropertiesLabel={contentManager.getContent(
          'stats_properties_label',
        )}
        statsMoney={contentManager.getContent('stats_money')}
        statsMoneyLabel={contentManager.getContent('stats_money_label')}
        statsExperts={contentManager.getContent('stats_experts')}
        statsExpertsLabel={contentManager.getContent('stats_experts_label')}
      />
      <HomeCta
        ctaTitle={contentManager.getContent('cta_title')}
        ctaSubtitle={contentManager.getContent('cta_subtitle')}
        ctaButtonText={contentManager.getContent('cta_button_4')}
      />
    </main>
  )
}

export default Home
