import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-card-bg)] border-t border-black/10 dark:border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Burak Elektrik" className="h-16 mb-6 rounded" />
            <p className="text-[var(--color-text-subtle)] text-sm leading-relaxed">
              {t('footer.description', 'Güvenliğiniz ve konforunuz için 7/24 kesintisiz, garantili ve profesyonel elektrik teknik servis hizmeti sunuyorum.')}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--color-text-base)]">{t('footer.links_title', 'Hızlı Bağlantılar')}</h4>
            <ul className="space-y-3 text-[var(--color-text-subtle)]">
              <li><a href="#services" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.services', 'Hizmetler')}</a></li>
              <li><a href="#about" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.about', 'Hakkımızda')}</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.gallery', 'Galeri')}</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.contact', 'İletişim')}</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[var(--color-text-base)]">{t('footer.contact_title', 'İletişim')}</h4>
            <ul className="space-y-4 text-[var(--color-text-subtle)]">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <a href="tel:+905340666020" className="hover:text-[var(--color-primary)] transition-colors">
                  {t('contact.phone', '0534 066 60 20')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <a href="mailto:burakelektrik007@gmail.com" className="hover:text-[var(--color-primary)] transition-colors break-all">
                  {t('contact.email', 'burakelektrik007@gmail.com')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {t('contact.address', 'Macun 1019. Sokak No:34 Kapı No:5 07112 Aksu / Antalya / Türkiye')}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--color-text-subtle)]">
          <p>© {currentYear} Burak Elektrik. {t('footer.rights', 'Tüm hakları saklıdır.')}</p>
          <p className="mt-2 md:mt-0">
            {t('footer.developer', 'Designed & Developed by')} <span className="text-[var(--color-primary)] font-bold">You</span>
          </p>
        </div>
      </div>
    </footer>
  );
}