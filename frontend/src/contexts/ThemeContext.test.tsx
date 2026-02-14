import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useTheme } from '../hooks/useTheme'
import { ThemeProvider } from './ThemeContext'

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('provides the correct initial theme value', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('light')
  })

  it('loads theme from localStorage', () => {
    // Set up localStorage with dark theme
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('dark')
  })
})
