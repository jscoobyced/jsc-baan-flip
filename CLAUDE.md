# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite frontend application for a property flipping platform. The application is structured with:

- React 19 with TypeScript
- Vite 7 for development and builds
- Tailwind CSS 4 for styling
- Vitest for testing with React Testing Library
- Multi-language content management system

## Project Structure

```
frontend/
├── src/
│   ├── components/       # React components
│   ├── services/         # Application services (ContentManager)
│   ├── contexts/         # React contexts and providers
│   ├── hooks/           # Custom React hooks
│   ├── test/            # Test setup and utilities
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/
│   └── content/         # Language-specific content files (.content.json)
└── package.json         # Project dependencies and scripts
```

## Key Features

1. **Multi-language Support**: The application loads content from JSON files based on the selected language
2. **Content Management**: The `ContentManager` service handles loading and retrieving localized content
3. **Responsive Design**: Built with Tailwind CSS for responsive UI
4. **Testing**: Unit tests with Vitest and React Testing Library
5. **TypeScript**: Strict type checking throughout the codebase

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn test` - Run tests in watch mode
- `yarn test:ui` - Run tests with interactive UI
- `yarn test:coverage` - Run tests with coverage report

## Content Management

The application uses a content manager service that loads JSON files from `public/content/` directory:
- `en_us.content.json` - English content (default)
- `es_es.content.json` - Spanish content
- `fr_fr.content.json` - French content
- `th_th.content.json` - Thai content

Each content file contains key-value pairs where keys are used to retrieve localized content in components.

## Testing

Tests are written using Vitest and React Testing Library. Test files are typically named with `.test.tsx` extension and placed alongside the components they test.

## Key Files

- `src/App.tsx` - Main application component that orchestrates the UI
- `src/services/ContentManager.ts` - Service for managing localized content
- `src/components/LanguageSelector.tsx` - Component for language switching
- `src/components/home/` - Home page components (Hero, Features, Stats, HomeCta)
- `src/components/Footer.tsx` - Footer component