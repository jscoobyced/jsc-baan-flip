import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { HeroButton } from './HeroButton'

describe('HeroButton', () => {
  const mockToggleUserType = vi.fn()

  beforeEach(() => {
    mockToggleUserType.mockClear()
  })

  it('renders with correct initial styling based on userType', () => {
    // Test when userType matches buttonType (should be primary background)
    render(
      <HeroButton
        userType="flipper"
        buttonType="flipper"
        toggleUserType={mockToggleUserType}
        text="Hello, World"
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-button-primary')
    expect(button).toHaveClass('text-primary-foreground')
    expect(button).toHaveClass('border-primary-foreground')
  })

  it('renders with correct alternative styling when userType does not match buttonType', () => {
    // Test when userType does not match buttonType (should be primary-foreground background)
    render(
      <HeroButton
        userType="flipper"
        buttonType="owner"
        toggleUserType={mockToggleUserType}
        text="Hello, World"
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-button-secondary')
    expect(button).toHaveClass('text-primary-foreground')
    expect(button).toHaveClass('border-secondary-foreground')
  })

  it('renders correct text content based on userType and buttonType', () => {
    // Test when userType matches buttonType
    render(
      <HeroButton
        userType="flipper"
        buttonType="flipper"
        toggleUserType={mockToggleUserType}
        text="Get Started"
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Get Started')
  })

  it('calls toggleUserType when clicked', () => {
    render(
      <HeroButton
        userType="flipper"
        buttonType="owner"
        toggleUserType={mockToggleUserType}
        text="View Programs"
      />,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockToggleUserType).toHaveBeenCalledWith('owner')
  })

  it('has correct CSS classes for styling', () => {
    render(
      <HeroButton
        userType="flipper"
        buttonType="flipper"
        toggleUserType={mockToggleUserType}
        text="Get Started"
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-8')
    expect(button).toHaveClass('py-3')
    expect(button).toHaveClass('rounded-lg')
    expect(button).toHaveClass('font-medium')
    expect(button).toHaveClass('transition-colors')
    expect(button).toHaveClass('w-52')
  })
})
