'use client';

interface ContactHeroSectionProps {
  t: (key: string) => string;
}

const ContactHeroSection = ({ t }: ContactHeroSectionProps) => {
  return (
    <div className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
        {t('contact.title')}
      </h1>
      <p className="text-xl text-gray-300">{t('contact.subtitle')}</p>
    </div>
  );
};

export default ContactHeroSection;
