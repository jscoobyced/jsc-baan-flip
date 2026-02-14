# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project with Tailwind CSS for styling. It's a modern application starter template that includes:

- React 19 with TypeScript
- Vite 7 for development and builds
- Tailwind CSS 4 for styling with dark mode support
- Vitest for testing with React Testing Library
- ESLint with TypeScript and React rules

## Key Architecture Components

### Core Structure
- `src/` - Main source code directory
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
  - `components/` - React components
  - `contexts/` - React context providers (ThemeContext)
  - `hooks/` - Custom React hooks (useTheme)
  - `test/` - Test setup and utilities
  - `app.css` - Global styles with Tailwind CSS configuration

### Theme System
The application implements a complete dark/light mode toggle using:
- `ThemeContext` for managing theme state
- `useTheme` hook for consuming theme context
- `ThemeToggle` component for UI control
- Local storage persistence for theme preference

### Development Workflow
- Development server: `yarn dev`
- Production build: `yarn build`
- Testing: `yarn test` (watch mode), `yarn test:ui`, `yarn test:coverage`
- Linting: `yarn lint`
- Formatting: `yarn format`

## Key Files and Their Purpose

- `src/App.tsx` - Main application layout with ThemeToggle and Footer
- `src/main.tsx` - Entry point that wraps App with ThemeProvider
- `src/contexts/ThemeContext.tsx` - Theme state management using React Context
- `src/hooks/useTheme.ts` - Custom hook to access theme context
- `src/components/ThemeToggle.tsx` - UI button to toggle between themes
- `src/app.css` - Tailwind CSS configuration with dark mode variant

## Common Development Tasks

### Running the Development Server
```bash
yarn dev
```
The app will be available at http://localhost:5173

### Running Tests
```bash
yarn test          # Run tests in watch mode
yarn test:ui       # Run tests with interactive UI
yarn test:coverage # Run tests with coverage report
```

### Building for Production
```bash
yarn build
```

### Linting and Formatting
```bash
yarn lint          # Run ESLint
yarn format        # Format code with Prettier
```

## Testing Approach

The project uses Vitest with React Testing Library for testing. Tests are located alongside components with a `.test.tsx` suffix. The test setup includes:
- JSDOM environment
- Global test setup in `src/test/setup.ts`
- Example tests for components and hooks