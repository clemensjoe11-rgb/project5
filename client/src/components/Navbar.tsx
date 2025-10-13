import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: 'de' | 'fr' | 'tr';
  onLanguageChange: (lang: 'de' | 'fr' | 'tr') => void;
}

const navItems = {
  de: ['Startseite', 'Dienstleistungen', 'Über uns', 'Kontakt'],
  fr: ['Accueil', 'Services', 'À propos', 'Contact'],
  tr: ['Ana Sayfa', 'Hizmetler', 'Hakkımızda', 'İletişim'],
};

export default function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sectionIds = ['hero', 'services', 'about', 'contact'];
    const element = document.getElementById(sectionIds[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const items = navItems[currentLang];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection(0)}
              className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="button-nav-logo"
            >
              TRADURAN
            </button>

            <div className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  data-testid={`link-nav-${index}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
              <Button
                onClick={() => scrollToSection(3)}
                data-testid="button-nav-cta"
              >
                {currentLang === 'de' ? 'Kontakt' : currentLang === 'fr' ? 'Contact' : 'İletişim'}
              </Button>
            </div>

            <button
              className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-nav-mobile-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 md:hidden" data-testid="menu-mobile">
          <div className="px-6 py-8 space-y-6">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left text-lg font-medium hover:text-primary transition-colors py-2"
                data-testid={`link-mobile-nav-${index}`}
              >
                {item}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
