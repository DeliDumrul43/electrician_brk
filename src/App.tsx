// src/App.tsx
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
// Components we will build shortly
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function AppLayout() {
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // 1. Language Syncing Logic
  useEffect(() => {
    const supportedLangs = ['tr', 'en', 'ru'];
    
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // Redirect malformed or missing language paths to default /tr
      navigate('/tr', { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Primary SEO Management */}
      <Helmet>
        <html lang={i18n.language} />
        {/* Dynamic Title (we will get this text from translations) */}
        {/* Alternate href tags (CRITICAL for SEO) */}
        <link rel="alternate" hreflang="tr" href={`https://burakelektrik.com/tr`} />
        <link rel="alternate" hreflang="en" href={`https://burakelektrik.com/en`} />
        <link rel="alternate" hreflang="ru" href={`https://burakelektrik.com/ru`} />
        <link rel="alternate" hreflang="x-default" href={`https://burakelektrik.com/tr`} />
      </Helmet>

      {/* 3. The UI Structure */}
      <Header />
      
      <main className="flex-grow">
        <Outlet /> {/* This is where our localized pages load */}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}