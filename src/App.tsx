import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MaterialsSection from './components/sections/MaterialsSection';
import ImpactSection from './components/sections/ImpactSection';
import GlobalPresenceSection from './components/sections/GlobalPresenceSection';
import ContactSection from './components/sections/ContactSection';

import './index.css';

function App() {
  useEffect(() => {
    document.title = 'Infinite Italia S.R.L. | Recycled Materials Export';

    // Add animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MaterialsSection />
        <ImpactSection />
        <GlobalPresenceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;