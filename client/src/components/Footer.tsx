import { Mail, Phone, Globe } from 'lucide-react';

interface FooterProps {
  currentLang: 'de' | 'fr' | 'tr';
}

const content = {
  de: {
    company: {
      title: 'TRADURAN',
      description: 'Professionelle Übersetzungsdienste zwischen Französisch und Türkisch',
    },
    links: {
      title: 'Schnelllinks',
      items: ['Startseite', 'Dienstleistungen', 'Über uns', 'Kontakt'],
    },
    contact: {
      title: 'Kontakt',
    },
    copyright: '© 2024 TRADURAN. Alle Rechte vorbehalten.',
  },
  fr: {
    company: {
      title: 'TRADURAN',
      description: 'Services de traduction professionnels entre le français et le turc',
    },
    links: {
      title: 'Liens rapides',
      items: ['Accueil', 'Services', 'À propos', 'Contact'],
    },
    contact: {
      title: 'Contact',
    },
    copyright: '© 2024 TRADURAN. Tous droits réservés.',
  },
  tr: {
    company: {
      title: 'TRADURAN',
      description: 'Fransızca ve Türkçe arasında profesyonel çeviri hizmetleri',
    },
    links: {
      title: 'Hızlı Bağlantılar',
      items: ['Ana Sayfa', 'Hizmetler', 'Hakkımızda', 'İletişim'],
    },
    contact: {
      title: 'İletişim',
    },
    copyright: '© 2024 TRADURAN. Tüm hakları saklıdır.',
  },
};

export default function Footer({ currentLang }: FooterProps) {
  const text = content[currentLang];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-brand">{text.company.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-footer-description">
              {text.company.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <a href="https://www.traduran.lu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-footer-website">
                www.traduran.lu
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">{text.links.title}</h4>
            <ul className="space-y-3">
              {text.links.items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(['hero', 'services', 'about', 'contact'][index])}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-nav-${index}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact-title">{text.contact.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:a.d@traduran.lu" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                  a.d@traduran.lu
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+352661885750" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +352 661 885 750
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
          {text.copyright}
        </div>
      </div>
    </footer>
  );
}
