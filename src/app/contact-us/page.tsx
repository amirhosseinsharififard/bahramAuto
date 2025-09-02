"use client";
import React, { useState } from "react";

import { Clock, Mail, Map, MapPin, Phone, Send, Wrench } from "lucide-react";
import Image from "next/image";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { language, setLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const content = {
    de: {
      title: "Kontakt",
      subtitle: "Wir freuen uns auf Ihre Nachricht",
      form: {
        title: "Schreiben Sie uns",
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        subject: "Betreff",
        message: "Nachricht",
        submit: "Nachricht senden",
        success:
          "Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.",
      },
      info: {
        title: "Kontaktinformationen",
        address: "Adresse",
        phone: "Telefon",
        email: "E-Mail",
        hours: "Öffnungszeiten",
        showroom: "Showroom",
        service: "Service-Center",
        hoursShowroom: "Mo-Fr: 9:00-18:00, Sa: 10:00-14:00",
        hoursService: "Mo-Fr: 8:00-17:00",
      },
      map: {
        title: "So finden Sie uns",
        description:
          "Unser Showroom befindet sich in zentraler Lage in Köln. Gerne vereinbaren wir einen Termin für Ihre Besichtigung.",
      },
    },
    fa: {
      title: "تماس",
      subtitle: "ما از شنیدن از شما خوشحال خواهیم شد",
      form: {
        title: "به ما بنویسید",
        name: "نام",
        email: "ایمیل",
        phone: "تلفن",
        subject: "موضوع",
        message: "پیام",
        submit: "ارسال پیام",
        success: "از پیام شما متشکریم! ما در اسرع وقت با شما تماس خواهیم گرفت.",
      },
      info: {
        title: "اطلاعات تماس",
        address: "آدرس",
        phone: "تلفن",
        email: "ایمیل",
        hours: "ساعات کاری",
        showroom: "نمایشگاه",
        service: "مرکز خدمات",
        hoursShowroom: "دوشنبه تا جمعه: ۹:۰۰-۱۸:۰۰, شنبه: ۱۰:۰۰-۱۴:۰۰",
        hoursService: "دوشنبه تا جمعه: ۸:۰۰-۱۷:۰۰",
      },
      map: {
        title: "چگونه ما را پیدا کنید",
        description:
          "نمایشگاه ما در موقعیت مرکزی کلن قرار دارد. ما خوشحال خواهیم شد که یک قرار ملاقات برای بازدید شما تنظیم کنیم.",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.form.success);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    {t.form.subject} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    {t.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/20 bg-gray-800/50 px-4 py-3 text-white focus:border-blue-500 focus:bg-gray-800/70 focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  {t.info.title}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">
                        {t.info.address}
                      </h3>
                      <p className="text-gray-300">Musterstraße 123</p>
                      <p className="text-gray-300">50667 Köln</p>
                      <p className="text-gray-300">Deutschland</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">
                        {t.info.phone}
                      </h3>
                      <p className="text-gray-300">+49 221 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-white">
                        {t.info.email}
                      </h3>
                      <p className="text-gray-300">info@bahramautohaus.de</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  {t.info.hours}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                        <Map className="h-5 w-5 text-blue-400" />
                      </div>
                      <h3 className="font-medium text-white">
                        {t.info.showroom}
                      </h3>
                    </div>
                    <p className="text-gray-300">{t.info.hoursShowroom}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                        <Wrench className="h-5 w-5 text-blue-400" />
                      </div>
                      <h3 className="font-medium text-white">
                        {t.info.service}
                      </h3>
                    </div>
                    <p className="text-gray-300">{t.info.hoursService}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t.map.title}
              </h2>
              <p className="text-gray-300">{t.map.description}</p>
            </div>

            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/images/map.jpg"
                alt="Map of Bahram Autohaus location"
                fill
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Bahram Autohaus
                </h3>
                <p className="text-gray-300">Musterstraße 123, 50667 Köln</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Map className="mr-2 h-5 w-5" />
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ContactPage;
