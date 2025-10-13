import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface ContactSectionProps {
  currentLang: 'de' | 'fr' | 'tr';
}

const content = {
  de: {
    title: 'Kontaktieren Sie uns',
    subtitle: 'Senden Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen',
    form: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      service: 'Gewünschte Dienstleistung',
      servicePlaceholder: 'Wählen Sie eine Dienstleistung',
      serviceOptions: ['Französisch → Türkisch', 'Türkisch → Französisch', 'Fachübersetzung', 'Andere'],
      message: 'Nachricht',
      messagePlaceholder: 'Beschreiben Sie Ihr Projekt...',
      submit: 'Nachricht senden',
    },
    contact: {
      title: 'Kontaktinformationen',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      locationValue: 'Luxemburg',
    },
  },
  fr: {
    title: 'Contactez-nous',
    subtitle: 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais',
    form: {
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      service: 'Service souhaité',
      servicePlaceholder: 'Choisissez un service',
      serviceOptions: ['Français → Turc', 'Turc → Français', 'Traduction spécialisée', 'Autre'],
      message: 'Message',
      messagePlaceholder: 'Décrivez votre projet...',
      submit: 'Envoyer le message',
    },
    contact: {
      title: 'Informations de contact',
      email: 'E-mail',
      phone: 'Téléphone',
      location: 'Localisation',
      locationValue: 'Luxembourg',
    },
  },
  tr: {
    title: 'Bize Ulaşın',
    subtitle: 'Bize bir mesaj gönderin, en kısa sürede size dönüş yapalım',
    form: {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      service: 'İstenen Hizmet',
      servicePlaceholder: 'Bir hizmet seçin',
      serviceOptions: ['Fransızca → Türkçe', 'Türkçe → Fransızca', 'Uzman Çeviri', 'Diğer'],
      message: 'Mesaj',
      messagePlaceholder: 'Projenizi açıklayın...',
      submit: 'Mesaj Gönder',
    },
    contact: {
      title: 'İletişim Bilgileri',
      email: 'E-posta',
      phone: 'Telefon',
      location: 'Konum',
      locationValue: 'Lüksemburg',
    },
  },
};

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const { toast } = useToast();
  const text = content[currentLang];

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
      if (!endpoint) {
        throw new Error('VITE_FORM_ENDPOINT ist nicht gesetzt');
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new URLSearchParams({
          name: data.name,
          email: data.email,
          message: data.message,
        } as any),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Form submit failed');
      }
      return await response.json().catch(() => ({}));
    },
    onSuccess: () => {
      const successMessages = {
        de: 'Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.',
        fr: 'Message envoyé avec succès ! Nous vous contacterons bientôt.',
        tr: 'Mesaj başarıyla gönderildi! En kısa sürede size döneceğiz.',
      };
      
      toast({
        title: successMessages[currentLang],
        description: currentLang === 'de' ? 'Vielen Dank für Ihre Anfrage.' : 
                     currentLang === 'fr' ? 'Merci pour votre demande.' : 
                     'Talebiniz için teşekkürler.',
      });
      
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    },
    onError: (error: Error) => {
      const errorMessages = {
        de: 'Fehler beim Senden der Nachricht',
        fr: 'Erreur lors de l\'envoi du message',
        tr: 'Mesaj gönderilirken hata oluştu',
      };
      
      toast({
        title: errorMessages[currentLang],
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            {text.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{text.form.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{text.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">{text.form.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-contact-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">{text.form.service}</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger id="service" data-testid="select-contact-service">
                        <SelectValue placeholder={text.form.servicePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {text.form.serviceOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{text.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={text.form.messagePlaceholder}
                    required
                    data-testid="input-contact-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto" 
                  disabled={contactMutation.isPending}
                  data-testid="button-contact-submit"
                >
                  {contactMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      {currentLang === 'de' ? 'Wird gesendet...' : currentLang === 'fr' ? 'Envoi en cours...' : 'Gönderiliyor...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {text.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6" data-testid="text-contact-info-title">{text.contact.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.contact.email}</p>
                    <a href="mailto:a.d@traduran.lu" className="font-medium hover:text-primary transition-colors" data-testid="link-contact-email">
                      a.d@traduran.lu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.contact.phone}</p>
                    <a href="tel:+352661885750" className="font-medium hover:text-primary transition-colors" data-testid="link-contact-phone">
                      +352 661 885 750
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.contact.location}</p>
                    <p className="font-medium" data-testid="text-contact-location">{text.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
