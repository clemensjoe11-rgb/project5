import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@assets/stock_images/modern_professional__a10fb5d7.jpg';

interface HeroSectionProps {
  currentLang: 'de' | 'fr' | 'tr';
}

const content = {
  de: {
    subtitle: 'PROFESSIONELLE ÜBERSETZUNGSDIENSTE',
    title: 'SERVICE DE TRADUCTION FR ↔ TR',
    description:
      'Hochwertige, präzise und kulturell sensible Übersetzungen zwischen Französisch und Türkisch',
    cta: 'Kontaktieren Sie uns',
  },
  fr: {
    subtitle: 'SERVICES DE TRADUCTION PROFESSIONNELS',
    title: 'SERVICE DE TRADUCTION FR ↔ TR',
    description:
      'Services linguistiques de haute qualité, précis et culturellement sensibles',
    cta: 'Nous contacter',
  },
  tr: {
    subtitle: 'PROFESYONEL ÇEVİRİ HİZMETLERİ',
    title: 'SERVICE DE TRADUCTION FR ↔ TR',
    description: 'Yüksek kaliteli, doğru ve kültürel açıdan hassas dil hizmetleri',
    cta: 'İletişime Geçin',
  },
};

export default function HeroSection({ currentLang }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const text = content[currentLang];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/70 to-foreground/60 z-10" />

      <div
        className="relative z-20 max-w-5xl mx-auto px-6
                   flex flex-col items-center text-center
                   md:items-start md:text-left"
      >
        <p
          className="text-primary font-medium text-sm md:text-base uppercase tracking-wider mb-4"
          data-testid="text-hero-subtitle"
        >
          {text.subtitle}
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 mx-auto md:mx-0"
          data-testid="text-hero-title"
        >
          {text.title}
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed"
          data-testid="text-hero-description"
        >
          {text.description}
        </p>
        <Button
          size="lg"
          className="bg-primary hover-elevate active-elevate-2 text-primary-foreground px-8 py-6 text-lg mx-auto md:mx-0"
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          data-testid="button-hero-cta"
        >
          {text.cta}
        </Button>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/80 hover-elevate active-elevate-2 p-3 rounded-full transition-all animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
