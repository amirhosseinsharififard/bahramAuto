'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import {
  ContactFormSection,
  ContactHeroSection,
  ContactHoursSection,
  ContactInfoSection,
  ContactMapSection,
} from '@/components/contact-us';
import { Footer, Header } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={language === 'fa' ? 'rtl' : 'ltr'}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactHeroSection t={t} />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactFormSection t={t} />
            <div className="space-y-8">
              <ContactInfoSection t={t} />
              <ContactHoursSection t={t} />
            </div>
          </div>

          <ContactMapSection t={t} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ContactPage;
