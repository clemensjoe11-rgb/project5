import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: 'de' | 'fr' | 'tr';
  onLanguageChange: (lang: 'de' | 'fr' | 'tr') => void;
}

const languages = [
  { code: 'de' as const, label: 'DE', flag: '🇩🇪' },
  { code: 'fr' as const, label: 'FR', flag: '🇫🇷' },
  { code: 'tr' as const, label: 'TR', flag: '🇹🇷' },
];

export default function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={currentLang === lang.code ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onLanguageChange(lang.code)}
            className="min-w-[3rem]"
            data-testid={`button-lang-${lang.code}`}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
