class ContentManager {
  private content: Record<string, string> = {}

  public loadContent = async (language: string): Promise<boolean> => {
    try {
      // Load content based on provided language
      const response = await fetch(`/content/${language}.content.json`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      this.content = data
    } catch (error) {
      console.error('Failed to load content:', error)
      // Fallback to English content if loading fails
      this.content = {
        hero_title: 'Property Flipping Platform',
        hero_subtitle:
          'Connect property owners with renovation experts to quickly sell and flip properties.',
        cta_button1: 'Get Started',
        cta_button2: 'You are an owner',
        cta_button3: 'You are a flipper',
        cta_button4: 'Create Free Account',
        how_it_works: 'How It Works',
        find_programs: 'Find Property Owners',
        find_programs_desc:
          'Browse properties that need renovation and are ready to sell.',
        find_renovation: 'Get Renovation Help',
        find_renovation_desc:
          'Connect with professionals for your property renovation needs.',
        get_rewarded: 'Get Rewarded',
        get_rewarded_desc:
          'Earn money by helping property owners sell their renovated properties quickly.',
        stats_organizations: '500+',
        stats_organizations_label: 'Property Owners',
        stats_properties: '10M+',
        stats_properties_label: 'Properties Flipped',
        stats_money: '$100M+',
        stats_money_label: 'Money Earned',
        stats_experts: '50K+',
        stats_experts_label: 'Renovation Experts',
        cta_title: 'Ready to start flipping properties?',
        cta_subtitle:
          'Join thousands of renovation experts who are already helping property owners sell their renovated properties quickly.',
        footer_company: 'Property Flipping Platform',
        footer_terms: 'Terms',
        footer_privacy: 'Privacy',
        footer_properties: 'properties',
        footer_careers: 'Careers',
        footer_copyright: '© {year} Baan Flip. All rights reserved.',
      }
    }
    return true
  }

  public getContent = (key: string): string => {
    return this.content[key] || key
  }

  public getContentWithParams = (
    key: string,
    params: Record<string, string>,
  ): string => {
    let content = this.getContent(key)
    for (const [param, value] of Object.entries(params)) {
      content = content.replace(`{${param}}`, value)
    }
    return content
  }
}

// Create a singleton instance
export const contentManager = new ContentManager()

// Export the class for potential future use
export { ContentManager }
