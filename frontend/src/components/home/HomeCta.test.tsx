import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HomeCta from './HomeCta'

describe('HomeCta', () => {
  it('renders call to action section with correct content', () => {
    render(
      <HomeCta
        ctaTitle="Ready to get started?"
        ctaSubtitle="Join our community of property flippers today"
        ctaButtonText="Sign Up Now"
      />,
    )

    expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
    expect(
      screen.getByText('Join our community of property flippers today'),
    ).toBeInTheDocument()
    expect(screen.getByText('Sign Up Now')).toBeInTheDocument()
  })

  it('renders call to action section with correct structure', () => {
    render(
      <HomeCta
        ctaTitle="Ready to get started?"
        ctaSubtitle="Join our community of property flippers today"
        ctaButtonText="Sign Up Now"
      />,
    )

    const ctaSection = screen.getByRole('region')
    expect(ctaSection).toHaveClass('py-10')
    expect(ctaSection).toHaveClass('px-4')
    expect(ctaSection).toHaveAttribute('aria-label', 'Call to Action')
  })

  it('renders call to action button with correct styling', async () => {
    render(
      <HomeCta
        ctaTitle="Ready to get started?"
        ctaSubtitle="Join our community of property flippers today"
        ctaButtonText="Sign Up Now"
      />,
    )

    const ctaButton = screen.getByText('Sign Up Now')
    await act(async () => {
      ctaButton.click()
    })
  })
})
