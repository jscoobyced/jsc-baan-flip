import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './app.css'
import App from './App.tsx'
import { AboutUs } from './components/about/AboutUs.tsx'
import Home from './components/home/Home.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { contentManager } from './services/ContentManager.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use a layout component for common elements, including ScrollRestoration
    children: [
      { index: true, element: <Home contentManager={contentManager} /> },
      {
        path: 'about-us',
        element: <AboutUs contentManager={contentManager} />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
