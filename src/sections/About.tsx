import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, Award, Building2 } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const references = ['motoes', 'tasmotor', 'aksupastane', 'aksukasap'];

  return (
    <section id="about" className="py-20 bg-[var(--color-card-bg)] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Core Value Proposition */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-[var(--color-text-subtle)] text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{t('about.point1_title')}</h4>
                  <p className="text-[var(--color-text-subtle)]">{t('about.point1_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{t('about.point2_title')}</h4>
                  <p className="text-[var(--color-text-subtle)]">{t('about.point2_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">{t('about.point3_title')}</h4>
                  <p className="text-[var(--color-text-subtle)]">{t('about.point3_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Commercial References */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[var(--color-dark-bg)] p-8 md:p-10 rounded-3xl border border-[var(--color-primary)]/20 h-full">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
                {t('about.ref_title')}
              </h3>
              <p className="text-[var(--color-text-subtle)] mb-8">
                {t('about.ref_subtitle')}
              </p>
              
              <div className="space-y-6">
                {references.map((ref) => (
                  <div key={ref} className="border-l-2 border-[var(--color-primary)] pl-4">
                    <h4 className="font-bold text-lg text-white">
                      {t(`about.refs.${ref}.title`)}
                    </h4>
                    <p className="text-sm text-[var(--color-text-subtle)] mt-1">
                      {t(`about.refs.${ref}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}