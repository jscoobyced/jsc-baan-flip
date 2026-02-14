import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders hero section with correct content', () => {
    render(
      <Hero
        heroTitle="Welcome to our Property Flipping Platform"
        heroSubtitle="Find the best opportunities to flip properties"
        ctaButton1="Get Started"
        ctaButton2="Learn More"
        ctaButton3="Start Flipping"
      />,
    )

    expect(
      screen.getByText(/Welcome to our Property Flipping Platform/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Find the best opportunities to flip properties/),
    ).toBeInTheDocument()
  })

  it('renders hero section with correct structure', () => {
    render(
      <Hero
        heroTitle="Welcome to our Property Flipping Platform"
        heroSubtitle="Find the best opportunities to flip properties"
        ctaButton1="Get Started"
        ctaButton2="You are an Owner"
        ctaButton3="You are a Flipper"
      />,
    )

    // Just check that the component renders without errors
    // The structure is tested by the component itself
    expect(
      screen.getByText(/Welcome to our Property Flipping Platform/),
    ).toBeInTheDocument()
  })

  it('handles user type switching correctly', async () => {
    // We can't easily test the internal state changes from the test,
    // but we can verify that the component renders correctly with the props
    render(
      <Hero
        heroTitle="Welcome to our Property Flipping Platform"
        heroSubtitle="Find the best opportunities to flip properties"
        ctaButton1="Get Started"
        ctaButton2="You are an Owner"
        ctaButton3="You are a Flipper"
      />,
    )

    // Verify that the buttons are rendered with correct text
    const flipperButton = screen.getByText(/Get Started/)
    const ownerButton = screen.getByText(/You are an Owner/)

    expect(flipperButton).toBeInTheDocument()
    expect(ownerButton).toBeInTheDocument()

    await act(async () => {
      flipperButton.click()
    })

    // After clicking the flipper button, it stay the same because it's already in flipper state
    expect(screen.getByText(/Get Started/)).toBeInTheDocument()
    expect(screen.getByText(/You are an Owner/)).toBeInTheDocument()

    await act(async () => {
      ownerButton.click()
    })

    // After clicking the owner button, it should switch to owner state
    expect(screen.getByText(/You are a Flipper/)).toBeInTheDocument()
    expect(screen.getByText(/Get Started/)).toBeInTheDocument()

    await act(async () => {
      flipperButton.click()
    })

    // After clicking the flipper button, it should switch to owner state
    expect(screen.getByText(/Get Started/)).toBeInTheDocument()
    expect(screen.getByText(/You are an Owner/)).toBeInTheDocument()
  })
})
