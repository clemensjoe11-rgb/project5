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
    titleTop: 'SERVICE DE TRADUCTION',
    titleBottom: 'FR ↔ TR',
    description:
      'Hochwertige, präzise und kulturell sensible Übersetzungen zwischen Französisch und Türkisch',
    cta: 'Kontaktieren Sie uns',
  },
  fr: {
    subtitle: 'SERVICES DE TRADUCTION PROFESSIONNELS',
    titleTop: 'SERVICE DE TRADUCTION',
    titleBottom: 'FR ↔ TR',
    description:
      'Services linguistiques de haute qualité, précis et culturellement sensibles',
    cta: 'Nous contacter',
  },
  tr: {
    subtitle: 'PROFESYONEL ÇEVİRİ HİZMETLERİ',
    titleTop: 'SERVICE DE TRADUCTION',
    titleBottom: 'FR ↔ TR',
    description: 'Yüksek kaliteli, doğru ve kültürel açıdan hassas dil hizmetleri',
    cta: 'İletişime Geçin',
  },
};

export default function HeroSection({ currentLang }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  const t = content[currentLang];

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
        className="relative z-20 w-full max-w-5xl mx-auto px-6
                   flex flex-col items-center text-center
                   md:items-start md:text-left"
      >
        <p className="text-primary font-medium text-sm md:text-base uppercase tracking-wider mb-4 mx-auto md:mx-0">
          {t.subtitle}
        </p>

        <h1 className="leading-tight text-primary-foreground font-bold mb-2 text-4xl md:text-6xl lg:text-7xl mx-auto md:mx-0">
          <span className="block">{t.titleTop}</span>
          <span className="block">{t.titleBottom}</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed">
          {t.description}
        </p>

        <Button
          size="lg"
          className="bg-primary hover-elevate active-elevate-2 text-primary-foreground px-8 py-6 text-lg self-center md:self-start"
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {t.cta}
        </Button>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/80 hover-elevate active-elevate-2 p-3 rounded-full transition-all animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
