'use client';

import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send as TelegramIcon,
} from 'lucide-react';

import ContactInfoItem from './ContactInfoItem';

interface ContactInfoSectionProps {
  t: (key: string) => string;
}

const ContactInfoSection = ({ t }: ContactInfoSectionProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t('contact.info.title')}
      </h2>

      <div className="space-y-6">
        <ContactInfoItem
          t={t}
          icon={MapPin}
          titleKey="contact.info.address"
          contentKey="contact.data.address.street"
        />
        <ContactInfoItem
          t={t}
          icon={Phone}
          titleKey="contact.info.phone"
          contentKey="contact.data.phone"
        />
        <ContactInfoItem
          t={t}
          icon={Mail}
          titleKey="contact.info.email"
          contentKey="contact.data.email"
        />
        <ContactInfoItem
          t={t}
          icon={MessageCircle}
          titleKey="contact.info.whatsapp"
          contentKey="contact.data.whatsapp"
          iconColor="bg-green-500/20 text-green-400"
        />
        <ContactInfoItem
          t={t}
          icon={TelegramIcon}
          titleKey="contact.info.telegram"
          contentKey="contact.data.telegram"
        />
        <ContactInfoItem
          t={t}
          icon={Instagram}
          titleKey="contact.info.instagram"
          contentKey="contact.data.instagram"
          iconColor="bg-pink-500/20 text-pink-400"
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;
