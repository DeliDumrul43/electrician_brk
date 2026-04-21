import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact'; 

export default function IndexPage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Select all sections on the page that have an ID
    const sections = document.querySelectorAll('section[id]');

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting with the middle of the screen
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // This margin means the section becomes "active" when it hits the vertical center of the screen
        rootMargin: '-40% 0px -60% 0px', 
        threshold: 0
      }
    );

    // Start observing all sections
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // Map the active section ID to translated browser tab titles
  const getPageTitle = () => {
    switch (activeSection) {
      case 'services':
        return `${t('nav.services', 'Hizmetler')} | Burak Elektrik`;
      case 'about':
        return `${t('nav.about', 'Hakkımızda')} | Burak Elektrik`;
      case 'gallery':
        return `${t('nav.gallery', 'Galeri')} | Burak Elektrik`;
      case 'contact':
        return `${t('nav.contact', 'İletişim')} | Burak Elektrik`;
      case 'hero':
      default:
        return 'Burak Elektrik | 7/24 Teknik Servis';
    }
  };

  return (
    <>
      {/* Dynamic Browser Tab Header */}
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>

      {/* Page Content */}
      <div className="flex flex-col gap-16 md:gap-24 pb-16">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </div>
    </>
  );
}