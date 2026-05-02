import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const handleLanguageChange = (newLang: string) => {
    navigate(`/${newLang}`);
  };

  const navLinks = [
    { name: t('nav.services', 'Hizmetler'), href: '#services' },
    { name: t('nav.about', 'Hakkımızda'), href: '#about' },
    { name: t('nav.gallery', 'Galeri'), href: '#gallery' },
    { name: t('nav.contact', 'İletişim'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-dark-bg)]/80 backdrop-blur-md border-b border-black/10 dark:border-white/5 transition-colors duration-300">
      {/* relative positioning here allows the nav to absolutely center itself */}
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* 1. Left Side: Logo */}
        <div className="flex flex-1 justify-start">
          <a href={`/${lang || 'tr'}`} className="flex items-center h-12 py-1">
            <img src={logo} alt="Burak Elektrik Logo" className="h-full w-auto object-contain rounded" />
          </a>
        </div>

        {/* 2. Middle: Perfectly Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. Right Side: Controls */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-[var(--color-card-bg)] text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] transition-colors"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="flex gap-2">
            {['tr', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={`uppercase text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                  i18n.language === l
                    ? 'bg-[var(--color-primary)] text-black border border-transparent'
                    : 'text-[var(--color-text-subtle)] bg-[var(--color-card-bg)] border border-black/5 hover:text-black dark:hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
}