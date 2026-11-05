import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Cleaned up Interface (No more categories)
interface Project {
  id: number;
  title: string;
  description: string;
  gallery: string[]; 
}

export default function Gallery() {
  const { t } = useTranslation();
  
  // 2. Only Modal State remains
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    { 
      id: 1,
      title: t('projects.p1.title'), 
      description: t('projects.p1.desc'),
      gallery: [
        '/projects/Alarm sistemleri/foto1.jpg',
        '/projects/Alarm sistemleri/foto2.jpg',
        '/projects/Alarm sistemleri/foto3.jpg'
      ] 
    },
    { 
      id: 2,
      title: t('projects.p2.title'), 
      description: t('projects.p2.desc'),
      gallery: [
        '/projects/Aydınlatma sistemleri/foto1.jpg',
        '/projects/Aydınlatma sistemleri/foto2.jpg',
        '/projects/Aydınlatma sistemleri/foto3.jpg',
        '/projects/Aydınlatma sistemleri/foto4.jpg',
        '/projects/Aydınlatma sistemleri/foto5.jpg',
        '/projects/Aydınlatma sistemleri/foto6.jpg',
        '/projects/Aydınlatma sistemleri/foto7.jpg',
        '/projects/Aydınlatma sistemleri/foto8.jpg',
        '/projects/Aydınlatma sistemleri/foto9.jpg',
        '/projects/Aydınlatma sistemleri/foto10.jpg'
      ] 
    },
    { 
      id: 3,
      title: t('projects.p3.title'), 
      description: t('projects.p3.desc'),
      gallery: [
        '/projects/Dağıtım panoları/foto1.jpg',
        '/projects/Dağıtım panoları/foto2.jpg',
        '/projects/Dağıtım panoları/foto3.jpg',
        '/projects/Dağıtım panoları/foto4.jpg'

        
      ] 
    },
    { 
      id: 4,
      title: t('projects.p4.title'), 
      description: t('projects.p4.desc'),
      gallery: [
        '/projects/Kablo Tavası/foto1.jpg',
        '/projects/Kablo Tavası/foto2.jpg',
        '/projects/Kablo Tavası/foto3.jpg',
        '/projects/Kablo Tavası/foto4.jpg',
        '/projects/Kablo Tavası/foto5.jpg',
        
      

      ] 
    },
    { 
      id: 5, 
      title: t('projects.p5.title'), 
      description: t('projects.p5.desc'),
      gallery: [
        '/projects/Kamera sistemleri/foto1.jpg',
        '/projects/Kamera sistemleri/foto2.jpg',
        '/projects/Kamera sistemleri/foto3.jpg',
        '/projects/Kamera sistemleri/foto4.jpg'
      ] 
    },
    { 
      id: 6,
      title: t('projects.p6.title'), 
      description: t('projects.p6.desc'),
      gallery: [
        '/projects/KNX Akıllı Ev sistemleri/foto1.jpg',
        '/projects/KNX Akıllı Ev sistemleri/foto2.jpg'
      ] 
    },
    { 
      id: 7, 
      title: t('projects.p7.title'), 
      description: t('projects.p7.desc'),
      gallery: [
        '/projects/Kompanzasyon panoları/foto1.jpg',
        '/projects/Kompanzasyon panoları/foto2.jpg',
        '/projects/Kompanzasyon panoları/foto3.jpg'
      ] 
    },
    { 
      id: 8, 
      title: t('projects.p8.title'), 
      description: t('projects.p8.desc'),
      gallery: [
        '/projects/Sıva altı elektrik tesisatı/foto1.jpg',
        '/projects/Sıva altı elektrik tesisatı/foto2.jpg',
        '/projects/Sıva altı elektrik tesisatı/foto3.jpg',
        '/projects/Sıva altı elektrik tesisatı/foto4.jpg'
      ] 
    },
    { 
      id: 9,
      title: t('projects.p9.title'), 
      description: t('projects.p9.desc'),
      gallery: [
        '/projects/Tesisat/foto1.jpg',
        '/projects/Tesisat/foto2.jpg',
        '/projects/Tesisat/foto3.jpg'
      ] 
    },
    { 
      id: 10, 
      title: t('projects.p10.title'), 
      description: t('projects.p10.desc'),
      gallery: [
        '/projects/Topraklama ve paratoner sistemleri/foto1.jpg',
        '/projects/Topraklama ve paratoner sistemleri/foto2.jpg',
        '/projects/Topraklama ve paratoner sistemleri/foto3.jpg'
      ] 
    }
  ];

  // 4. Modal Controls
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0); 
  };

  const closeModal = () => setSelectedProject(null);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentSlide((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentSlide((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[var(--color-dark-bg)] relative">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('gallery.main_title')}</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] rounded-full"></div>
          </div>
          <p className="mt-6 md:mt-0 text-[var(--color-text-subtle)] max-w-md">
            {t('gallery.main_subtitle')}
          </p>
        </div>

        {/* Thumbnail Grid - No Filters */}
        {/* Thumbnail Grid - No Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openModal(project)}
              /* bg-gray-800 ve animate-pulse ekledik (Resim yüklenene kadar yanıp sönen şık bir kutu olacak) */
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800/80 animate-pulse cursor-pointer shadow-lg"
            >
              <img 
                src={project.gallery[0]} 
                alt={project.title} 
                loading="lazy" 
                decoding="async"
                /* Başlangıçta opacity-0 (görünmez). Yüklendiği (onLoad) an animate-pulse'u durdurup resmi gösterir */
                className="w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:scale-105"
                onLoad={(e) => {
                  const target = e.currentTarget;
                  target.classList.remove('opacity-0');
                  target.classList.add('opacity-90');
                  if (target.parentElement) {
                    target.parentElement.classList.remove('animate-pulse');
                  }
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 transition-colors duration-300">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="font-bold text-white text-lg drop-shadow-md block">{project.title}</span>
                  {project.gallery.length > 1 && (
                    <span className="text-[var(--color-primary)] text-xs font-bold mt-2 uppercase tracking-wider block">
                      {project.gallery.length} {t('gallery.photos', 'Fotoğraf')}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Split-View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-all duration-300" 
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-[var(--color-card-bg)] border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]" 
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Left Side: The Image Slider */}
              <div className="w-full md:w-3/5 relative bg-black h-[300px] md:h-[600px] flex items-center justify-center group/slider">
                <img 
                  src={selectedProject.gallery[currentSlide]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 border border-white/20 hover:bg-[var(--color-primary)] hover:text-black hover:border-transparent text-white p-2.5 rounded-full backdrop-blur-md transition-all md:opacity-0 group-hover/slider:opacity-100 z-10">
                          <ChevronLeft size={24} />
                      </button>
                      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 border border-white/20 hover:bg-[var(--color-primary)] hover:text-black hover:border-transparent text-white p-2.5 rounded-full backdrop-blur-md transition-all md:opacity-0 group-hover/slider:opacity-100 z-10">
                          <ChevronRight size={24} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
                          {selectedProject.gallery.map((_, idx) => (
                          <button 
                              key={idx} 
                              onClick={() => setCurrentSlide(idx)}
                              className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-[var(--color-primary)] w-6' : 'bg-white/50 w-2 hover:bg-white'}`}
                          />
                          ))}
                      </div>
                  </>
                )}
              </div>

              {/* Right Side: Project Information */}
              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col relative bg-[var(--color-card-bg)]">
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-[var(--color-primary)] transition-colors p-1"
                >
                  <X size={28} />
                </button>

                <div className="mt-4 md:mt-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-white/10 mb-6"></div>

                  <p className="text-[var(--color-text-subtle)] leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}