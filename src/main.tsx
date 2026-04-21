import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import AppLayout from './App'
import IndexPage from './pages/IndexPage'
import './index.css'
import './i18n/config'

// 1. Updated Routing Architecture
const router = createBrowserRouter([
  {
    // The language parameter is now at the absolute root level
    path: "/:lang", 
    element: <AppLayout />,
    children: [
      // The IndexPage will load automatically inside the layout
      { index: true, element: <IndexPage /> }, 
    ],
  },
  {
    // 2. If someone visits the naked domain (burakelektrik.com), force them to /tr
    path: "/",
    element: <Navigate to="/tr" replace /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)