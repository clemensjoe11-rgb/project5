import { useState } from 'react';
import Navbar from '../Navbar';

export default function NavbarExample() {
  const [lang, setLang] = useState<'de' | 'fr' | 'tr'>('fr');
  
  return <Navbar currentLang={lang} onLanguageChange={setLang} />;
}
