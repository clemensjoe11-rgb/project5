import { Card } from '@/components/ui/card';
import { Languages, FileText, BookOpen, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: 'de' | 'fr' | 'tr';
}

const content = {
  de: {
    title: 'Unsere Dienstleistungen',
    subtitle: 'Professionelle Sprachlösungen für Ihre Bedürfnisse',
    services: [
      {
        icon: Languages,
        title: 'Französisch → Türkisch',
        description: 'Präzise Übersetzungen vom Französischen ins Türkische mit kultureller Sensibilität',
      },
      {
        icon: Languages,
        title: 'Türkisch → Französisch',
        description: 'Professionelle Übersetzungen vom Türkischen ins Französische für alle Textarten',
      },
      {
        icon: FileText,
        title: 'Fachübersetzungen',
        description: 'Spezialisierte juristische, technische und medizinische Übersetzungen',
      },
      {
        icon: BookOpen,
        title: 'Kulturelle Anpassung',
        description: 'Lokalisierung und kulturelle Anpassung Ihrer Inhalte',
      },
    ],
  },
  fr: {
    title: 'Nos Services',
    subtitle: 'Solutions linguistiques professionnelles adaptées à vos besoins',
    services: [
      {
        icon: Languages,
        title: 'Français → Turc',
        description: 'Traductions précises du français vers le turc avec sensibilité culturelle',
      },
      {
        icon: Languages,
        title: 'Turc → Français',
        description: 'Traductions professionnelles du turc vers le français pour tous types de textes',
      },
      {
        icon: FileText,
        title: 'Traductions spécialisées',
        description: 'Traductions juridiques, techniques et médicales spécialisées',
      },
      {
        icon: BookOpen,
        title: 'Adaptation culturelle',
        description: 'Localisation et adaptation culturelle de vos contenus',
      },
    ],
  },
  tr: {
    title: 'Hizmetlerimiz',
    subtitle: 'İhtiyaçlarınıza özel profesyonel dil çözümleri',
    services: [
      {
        icon: Languages,
        title: 'Fransızca → Türkçe',
        description: 'Kültürel duyarlılıkla Fransızcadan Türkçeye hassas çeviriler',
      },
      {
        icon: Languages,
        title: 'Türkçe → Fransızca',
        description: 'Her tür metin için Türkçeden Fransızcaya profesyonel çeviriler',
      },
      {
        icon: FileText,
        title: 'Uzman Çeviriler',
        description: 'Hukuki, teknik ve tıbbi konularda uzman çeviriler',
      },
      {
        icon: BookOpen,
        title: 'Kültürel Uyarlama',
        description: 'İçeriklerinizin yerelleştirilmesi ve kültürel uyarlaması',
      },
    ],
  },
};

export default function ServicesSection({ currentLang }: ServicesSectionProps) {
  const text = content[currentLang];

  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
            {text.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate transition-all group cursor-pointer"
                data-testid={`card-service-${index}`}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center justify-between" data-testid={`text-service-title-${index}`}>
                  {service.title}
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
