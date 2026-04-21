// src/App.tsx
import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Loader from './components/Loader';

export default function AppLayout() {
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // 1. Loading State
  const [isLoading, setIsLoading] = useState(true);

  // 2. Artificial Delay Timer
  useEffect(() => {
    // Show the loader for exactly 2.2 seconds (matches the loading bar animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Language Syncing Logic
  useEffect(() => {
    const supportedLangs = ['tr', 'en', 'ru'];
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      navigate('/tr', { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="tr" href={`https://burakelektrik.com/tr`} />
        <link rel="alternate" hreflang="en" href={`https://burakelektrik.com/en`} />
        <link rel="alternate" hreflang="ru" href={`https://burakelektrik.com/ru`} />
        <link rel="alternate" hreflang="x-default" href={`https://burakelektrik.com/tr`} />
      </Helmet>

      {/* 3. The Loader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* 4. The Main App Content */}
      <Header />
      
      <main className="flex-grow">
        <Outlet /> 
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}