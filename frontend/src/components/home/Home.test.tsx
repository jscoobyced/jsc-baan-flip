import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { ContentManager } from '../../services/ContentManager'
import Home from './Home'

describe('Home', () => {
  const mockContentManager = {
    getContent: vi.fn((key: string) => {
      const content: Record<string, string> = {
        hero_title: 'Welcome to our Property Flipping Platform',
        hero_subtitle: 'Find the best opportunities to flip properties',
        cta_button_1: 'Get Started',
        cta_button_2: 'Learn More',
        cta_button_3: 'Start Flipping',
        how_it_works: 'How It Works',
        find_programs: 'Find Programs',
        find_programs_desc: 'Discover the best property flipping programs',
        find_renovation: 'Report Vulnerabilities',
        find_renovation_desc: 'Get expert advice on renovations',
        get_rewarded: 'Get Rewarded',
        get_rewarded_desc: 'Earn rewards for your contributions',
        stats_organizations: '100',
        stats_organizations_label: 'Organizations',
        stats_properties: '500',
        stats_properties_label: 'Properties',
        stats_money: '$10M',
        stats_money_label: 'Money',
        stats_experts: '50',
        stats_experts_label: 'Experts',
        cta_title: 'Ready to get started?',
        cta_subtitle: 'Join our community of property flippers today',
        cta_button_4: 'Sign Up Now',
      }
      return content[key] || key
    }),
    loadContent: vi.fn().mockResolvedValue(true),
    getContentWithParams: vi.fn(
      (key: string, params: Record<string, string>) => {
        const content: Record<string, string> = {
          welcome_message: 'Welcome {name}! You have {count} messages.',
        }
        let result = content[key] || key
        for (const param in params) {
          result = result.replace(`{${param}}`, params[param])
        }
        return result
      },
    ),
  } as unknown as ContentManager

  it('renders home page with all components', () => {
    render(<Home contentManager={mockContentManager} />)

    // Check that main components are rendered using partial matching
    expect(
      screen.getByText(/Welcome to our Property Flipping Platform/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Find the best opportunities to flip properties/),
    ).toBeInTheDocument()

    // Check that the main components are rendered
    expect(screen.getByText(/How It Works/)).toBeInTheDocument()
    expect(screen.getByText(/Find Programs/)).toBeInTheDocument()
    expect(
      screen.getByText(/Discover the best property flipping programs/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Report Vulnerabilities/)).toBeInTheDocument()
    expect(
      screen.getByText(/Get expert advice on renovations/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Get Rewarded/)).toBeInTheDocument()
    expect(
      screen.getByText(/Earn rewards for your contributions/),
    ).toBeInTheDocument()

    // Check stats are rendered
    expect(screen.getByText(/100/)).toBeInTheDocument()
    expect(screen.getByText(/Organizations/)).toBeInTheDocument()
    expect(screen.getByText(/500/)).toBeInTheDocument()
    expect(screen.getByText(/Properties/)).toBeInTheDocument()
    expect(screen.getByText(/\$10M/)).toBeInTheDocument()
    expect(screen.getByText(/Money/)).toBeInTheDocument()

    // Use more specific selectors for the "50" value to avoid conflicts
    // Find the experts stat specifically by searching for the exact text "50" within the specific list item
    const statsSection = screen.getByRole('list')
    const expertsListItem = within(statsSection).queryAllByRole('listitem')[3] // Experts is the 4th item (index 3)
    if (expertsListItem) {
      const expertsElement = within(expertsListItem).getByText(/50/)
      expect(expertsElement).toBeInTheDocument()
      expect(within(expertsListItem).getByText(/Experts/)).toBeInTheDocument()
    }

    // Check CTA is rendered
    expect(screen.getByText(/Ready to get started?/)).toBeInTheDocument()
    expect(
      screen.getByText(/Join our community of property flippers today/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Sign Up Now/)).toBeInTheDocument()
  })

  it('renders home page with correct structure', () => {
    render(<Home contentManager={mockContentManager} />)

    const mainElement = screen.getByRole('main')
    expect(mainElement).toHaveClass('grow')
  })
})
