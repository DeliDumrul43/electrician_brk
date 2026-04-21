// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './App' // Our main layout file
import IndexPage from './pages/IndexPage' // We will create this
import './index.css' // We added our tailwind theme here
import './i18n/config' // i18n initializer we'll create next

// Define a dynamic route that captures the language code
const router = createBrowserRouter([
  {
    path: "/", // Redirect root to /tr by default for now
    element: <AppLayout />,
    children: [
      { path: ":lang/", element: <IndexPage /> }, // Main single-page scroll
      { path: ":lang/services", element: <IndexPage /> }, // Anchor handling
      // Add other specific pages (if needed) like contact form separately
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)