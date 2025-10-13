import { Mail, Phone, MapPin } from "lucide-react";

type Lang = "de" | "fr" | "tr";

export default function ContactSection({ currentLang }: { currentLang: Lang }) {
  const t = TEXT[currentLang];

  return (
    <section id="contact" lang={currentLang} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">{t.heading}</h2>
        <p className="text-center text-muted-foreground mb-10">{t.subheading}</p>

        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border p-6 bg-card">
            <h3 className="text-2xl font-semibold mb-6">{t.contact.title}</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1"><Mail aria-hidden /></span>
                <div>
                  <div className="text-sm text-muted-foreground">{t.contact.email}</div>
                  <a href="mailto:a.d@traduran.lu" className="font-medium">a.d@traduran.lu</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1"><Phone aria-hidden /></span>
                <div>
                  <div className="text-sm text-muted-foreground">{t.contact.phone}</div>
                  <a href="tel:+352661885750" className="font-medium">+352 661 885 750</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1"><MapPin aria-hidden /></span>
                <div>
                  <div className="text-sm text-muted-foreground">{t.contact.location}</div>
                  <div className="font-medium">{t.contact.locationValue}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

const TEXT: Record<Lang, any> = {
  de: {
    heading: "Kontakt",
    subheading: "Schreiben Sie uns. Wir melden uns zeitnah.",
    contact: {
      title: "Kontaktinformationen",
      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",
      locationValue: "Luxemburg",
    },
  },
  fr: {
    heading: "Contactez-nous",
    subheading: "Envoyez-nous un message. Nous répondrons rapidement.",
    contact: {
      title: "Informations de contact",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Luxembourg",
    },
  },
  tr: {
    heading: "Bize ulaşın",
    subheading: "Bize yazın. En kısa sürede döneriz.",
    contact: {
      title: "İletişim Bilgileri",
      email: "E-posta",
      phone: "Telefon",
      location: "Konum",
      locationValue: "Lüksemburg",
    },
  },
};
