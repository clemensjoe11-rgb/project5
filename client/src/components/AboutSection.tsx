import { CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'de' | 'fr' | 'tr';
}

const content = {
  de: {
    title: 'Über TRADURAN',
    description1: 'TRADURAN ist ein führendes Übersetzungsunternehmen, das hochwertige, präzise und kulturell sensible Sprachdienstleistungen ausschließlich für Übersetzungen vom Türkischen ins Französische und umgekehrt anbietet.',
    description2: 'Mit jahrelanger Erfahrung und einem Team von Muttersprachlern garantieren wir Übersetzungen, die nicht nur sprachlich korrekt, sondern auch kulturell angemessen sind. Wir verstehen die Nuancen beider Sprachen und Kulturen.',
    highlights: [
      'Muttersprachliche Übersetzer',
      'Kulturelle Expertise',
      'Termingerechte Lieferung',
      'Vertraulichkeit garantiert',
    ],
  },
  fr: {
    title: 'À propos de TRADURAN',
    description1: 'TRADURAN est une entreprise de traduction leader offrant des services linguistiques de haute qualité, précis et culturellement sensibles, spécialisée uniquement dans la traduction du turc vers le français et vice versa.',
    description2: 'Avec des années d\'expérience et une équipe de locuteurs natifs, nous garantissons des traductions non seulement linguistiquement correctes mais aussi culturellement appropriées. Nous comprenons les nuances des deux langues et cultures.',
    highlights: [
      'Traducteurs natifs',
      'Expertise culturelle',
      'Livraison dans les délais',
      'Confidentialité garantie',
    ],
  },
  tr: {
    title: 'TRADURAN Hakkında',
    description1: 'TRADURAN, yalnızca Türkçeden Fransızcaya ve Fransızcadan Türkçeye çeviri hizmetleri sunan, yüksek kaliteli, doğru ve kültürel açıdan hassas dil hizmetleri sağlayan lider bir çeviri şirketidir.',
    description2: 'Yıllarca deneyim ve ana dili konuşan bir ekip ile, sadece dilsel olarak doğru değil aynı zamanda kültürel olarak uygun çeviriler garanti ediyoruz. Her iki dilin ve kültürün nüanslarını anlıyoruz.',
    highlights: [
      'Ana dili konuşan çevirmenler',
      'Kültürel uzmanlık',
      'Zamanında teslimat',
      'Gizlilik garantisi',
    ],
  },
};

export default function AboutSection({ currentLang }: AboutSectionProps) {
  const text = content[currentLang];

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">
              {text.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description-1">
              {text.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description-2">
              {text.description2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {text.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`item-highlight-${index}`}>
                  <div className="bg-primary/10 rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-years">10+</div>
                  <div className="text-muted-foreground">{currentLang === 'de' ? 'Jahre Erfahrung' : currentLang === 'fr' ? 'Ans d\'expérience' : 'Yıl Deneyim'}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-projects">5000+</div>
                  <div className="text-muted-foreground">{currentLang === 'de' ? 'Projekte abgeschlossen' : currentLang === 'fr' ? 'Projets réalisés' : 'Tamamlanan Proje'}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-clients">98%</div>
                  <div className="text-muted-foreground">{currentLang === 'de' ? 'Kundenzufriedenheit' : currentLang === 'fr' ? 'Satisfaction client' : 'Müşteri Memnuniyeti'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
