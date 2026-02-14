import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Features from './Features'

describe('Features', () => {
  it('renders features section with correct content', () => {
    render(
      <Features
        howItWorksTitle="How It Works"
        findProgramsTitle="Find Programs"
        findProgramsDesc="Discover the best property flipping programs"
        findRenovationTitle="Report Vulnerabilities"
        findRenovationDesc="Get expert advice on renovations"
        getRewardedTitle="Get Rewarded"
        getRewardedDesc="Earn rewards for your contributions"
      />
    )

    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Find Programs')).toBeInTheDocument()
    expect(screen.getByText('Discover the best property flipping programs')).toBeInTheDocument()
    expect(screen.getByText('Report Vulnerabilities')).toBeInTheDocument()
    expect(screen.getByText('Get expert advice on renovations')).toBeInTheDocument()
    expect(screen.getByText('Get Rewarded')).toBeInTheDocument()
    expect(screen.getByText('Earn rewards for your contributions')).toBeInTheDocument()
  })

  it('renders features section with correct structure', () => {
    render(
      <Features
        howItWorksTitle="How It Works"
        findProgramsTitle="Find Programs"
        findProgramsDesc="Discover the best property flipping programs"
        findRenovationTitle="Report Vulnerabilities"
        findRenovationDesc="Get expert advice on renovations"
        getRewardedTitle="Get Rewarded"
        getRewardedDesc="Earn rewards for your contributions"
      />
    )

    const featuresSection = screen.getByRole('region')
    expect(featuresSection).toHaveClass('py-10')
    expect(featuresSection).toHaveClass('px-4')
    expect(featuresSection).toHaveAttribute('aria-label', 'How It Works')
  })
})