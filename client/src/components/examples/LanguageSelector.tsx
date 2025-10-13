import { useState } from 'react';
import LanguageSelector from '../LanguageSelector';

export default function LanguageSelectorExample() {
  const [lang, setLang] = useState<'de' | 'fr' | 'tr'>('fr');
  
  return (
    <div className="p-8">
      <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
      <p className="mt-4 text-sm text-muted-foreground">Selected: {lang}</p>
    </div>
  );
}
