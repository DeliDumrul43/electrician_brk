import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Zap, Cctv, MonitorSpeaker, BellRing, Factory, Cable, 
  Hammer, Home, Cpu, Sun, Lightbulb, FileSignature, 
  ArrowDownToLine, HardHat, PlugZap 
} from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const servicesList = [
    { id: 'ev_charging', icon: PlugZap }, // ADDED TO THE VERY TOP
    { id: 'faults', icon: Zap }, 
    { id: 'camera', icon: Cctv },
    { id: 'intercom', icon: MonitorSpeaker }, 
    { id: 'alarm', icon: BellRing },
    { id: 'workplace', icon: Factory }, 
    { id: 'cable_tray', icon: Cable },
    { id: 'renovation', icon: Hammer }, 
    { id: 'villa', icon: Home },
    { id: 'knx', icon: Cpu }, 
    { id: 'solar', icon: Sun },
    { id: 'lighting', icon: Lightbulb }, 
    { id: 'subscription', icon: FileSignature },
    { id: 'underground', icon: ArrowDownToLine }, 
    { id: 'construction', icon: HardHat },
  ];

  return (
    <section id="services" className="py-20 bg-[var(--color-dark-bg)] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services.main_title')}</h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="mt-6 text-[var(--color-text-subtle)] max-w-2xl mx-auto text-lg">
            {t('services.main_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }} // Staggered delay
                className="flex items-center gap-4 bg-[var(--color-card-bg)] border border-white/5 p-4 rounded-xl transition-colors hover:border-[var(--color-primary)]/50 group"
              >
                <div className="w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[var(--color-primary)] transition-colors">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-sm md:text-base font-semibold leading-tight">
                  {t(`services.list.${service.id}`)}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}