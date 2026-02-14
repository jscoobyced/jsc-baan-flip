import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Stats from './Stats'

describe('Stats', () => {
  it('renders stats section with correct content', () => {
    render(
      <Stats
        statsOrganizations="100"
        statsOrganizationsLabel="Organizations"
        statsProperties="500"
        statsPropertiesLabel="Properties"
        statsMoney="$10M"
        statsMoneyLabel="Money"
        statsExperts="50"
        statsExpertsLabel="Experts"
      />
    )

    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Organizations')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('$10M')).toBeInTheDocument()
    expect(screen.getByText('Money')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Experts')).toBeInTheDocument()
  })

  it('renders stats section with correct structure', () => {
    render(
      <Stats
        statsOrganizations="100"
        statsOrganizationsLabel="Organizations"
        statsProperties="500"
        statsPropertiesLabel="Properties"
        statsMoney="$10M"
        statsMoneyLabel="Money"
        statsExperts="50"
        statsExpertsLabel="Experts"
      />
    )

    const statsSection = screen.getByRole('list')
    expect(statsSection).toHaveClass('bg-secondary')
    expect(statsSection).toHaveClass('py-15')
    expect(statsSection).toHaveClass('px-4')
    expect(statsSection).toHaveClass('mx-auto')
    expect(statsSection).toHaveClass('text-center')
    expect(statsSection).toHaveClass('grid')
    expect(statsSection).toHaveClass('grid-cols-2')
    expect(statsSection).toHaveClass('md:grid-cols-4')
    expect(statsSection).toHaveClass('gap-8')
  })
})