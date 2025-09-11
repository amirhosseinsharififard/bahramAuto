'use client';

import { useState } from 'react';

import { Send } from 'lucide-react';

import ContactFormField from './ContactFormField';

interface ContactFormSectionProps {
  t: (key: string) => string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactFormSection = ({ t }: ContactFormSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.form.success'));
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t('contact.form.title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <ContactFormField
          t={t}
          type="text"
          name="name"
          label={t('contact.form.name')}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ContactFormField
            t={t}
            type="email"
            name="email"
            label={t('contact.form.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <ContactFormField
            t={t}
            type="tel"
            name="phone"
            label={t('contact.form.phone')}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <ContactFormField
          t={t}
          type="text"
          name="subject"
          label={t('contact.form.subject')}
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <ContactFormField
          t={t}
          type="textarea"
          name="message"
          label={t('contact.form.message')}
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <Send className="mr-2 h-5 w-5" />
          {t('contact.form.submit')}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;
