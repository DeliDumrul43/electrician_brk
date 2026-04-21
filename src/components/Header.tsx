import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
// Import the logo from your assets folder
import logo from '../assets/logo.jpg';

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();

  // Function to handle changing the URL when a new language is clicked
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
    <header className="sticky top-0 z-50 w-full bg-[var(--color-dark-bg)]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <a href={`/${lang}`} className="flex items-center h-full py-2">
          <img 
            src={logo} 
            alt="Burak Elektrik Logo" 
            className="h-full w-auto object-contain rounded"
          />
        </a>

        {/* 2. Desktop Navigation (Hidden on small mobile screens) */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-subtle)] hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. Language Switcher */}
        <div className="flex gap-2">
          {['tr', 'en', 'ru'].map((l) => (
            <button
              key={l}
              onClick={() => handleLanguageChange(l)}
              className={`uppercase text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                i18n.language === l
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'text-[var(--color-text-subtle)] bg-[var(--color-card-bg)] hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}