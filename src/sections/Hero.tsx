import { useTranslation } from 'react-i18next';
import { PhoneCall, MessageCircle, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--color-dark-bg)]">
      {/* Background Glow Effect for modern tech feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Small trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-primary)]/30 mb-8">
          <Zap className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
          <span className="text-sm font-medium text-[var(--color-text-subtle)] tracking-wider uppercase">
            {t('hero.badge', '7/24 Profesyonel Hizmet')}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-base)] leading-tight mb-6 max-w-4xl">
          {t('hero.title_part1', 'Elektrik Arızalarında')}{' '}
          <span className="text-[var(--color-primary)]">
            {t('hero.title_highlight', 'Hızlı ve Güvenilir')}
          </span>{' '}
          {t('hero.title_part2', 'Çözüm')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--color-text-subtle)] mb-10 max-w-2xl">
          {t('hero.subtitle', 'Ev ve iş yerlerinizdeki tüm elektrik tesisatı, arıza, bakım ve onarım işleri için garantili ve anında müdahale uzmanı.')}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="tel:+905555555555" // We will replace with real number later
            className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-black px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-5 h-5" />
            {t('hero.btn_call', 'Hemen Ara')}
          </a>
          
          <a 
            href="https://wa.me/905555555555" // We will replace with real number later
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/50 px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5" />
            {t('hero.btn_whatsapp', 'WhatsApp ile Ulaş')}
          </a>
        </div>

      </div>
    </section>
  );
}