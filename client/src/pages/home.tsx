import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'de' | 'fr' | 'tr'>('fr');

  return (
    <div className="min-h-screen" id="hero">
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <HeroSection currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <AboutSection currentLang={currentLang} />
      <ContactSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}
