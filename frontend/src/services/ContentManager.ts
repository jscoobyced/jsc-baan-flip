class ContentManager {
  private content: Record<string, string> = {}

  public async loadContent(language: string) {
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
        hero_title: 'Bug Bounty Platform for Security Researchers',
        hero_subtitle:
          'Connect with organizations to find and fix security vulnerabilities. Get rewarded for your discoveries.',
        cta_button1: 'Get Started',
        cta_button2: 'View Programs',
        how_it_works: 'How It Works',
        find_programs: 'Find Programs',
        find_programs_desc: 'Browse security programs from top organizations.',
        report_vulnerabilities: 'Report Vulnerabilities',
        report_vulnerabilities_desc:
          'Submit detailed reports with impact analysis.',
        get_rewarded: 'Get Rewarded',
        get_rewarded_desc: 'Earn bounties for valid security findings.',
        stats_organizations: '500+',
        stats_organizations_label: 'Organizations',
        stats_vulnerabilities: '10M+',
        stats_vulnerabilities_label: 'Vulnerabilities Fixed',
        stats_bounties: '$100M+',
        stats_bounties_label: 'Bounties Paid',
        stats_researchers: '50K+',
        stats_researchers_label: 'Security Researchers',
        cta_title: 'Ready to start your security research journey?',
        cta_subtitle:
          'Join thousands of security researchers who are already discovering vulnerabilities and getting rewarded.',
        cta_button3: 'Create Free Account',
        footer_company: 'Bug Bounty Platform',
        footer_terms: 'Terms',
        footer_privacy: 'Privacy',
        footer_security: 'Security',
        footer_careers: 'Careers',
        footer_copyright: '© {year} HackerOne. All rights reserved.',
      }
    }
  }

  public getContent(key: string): string {
    return this.content[key] || key
  }

  public getContentWithParams(
    key: string,
    params: Record<string, string>,
  ): string {
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
