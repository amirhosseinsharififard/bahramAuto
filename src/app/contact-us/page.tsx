"use client";
import React, { useState } from "react";

import {
  Award,
  Car,
  Clock,
  Eye,
  Heart,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlayCircle,
  Search,
  Send,
  Shield,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  const [language, setLanguage] = useState("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const content = {
    de: {
      nav: {
        home: "Startseite",
        gallery: "Fahrzeuge",
        services: "Service",
        about: "Über uns",
        contact: "Kontakt",
      },
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
      nav: {
        home: "صفحه اصلی",
        gallery: "خودروها",
        services: "خدمات",
        about: "درباره ما",
        contact: "تماس",
      },
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
    // Form submission logic would go here
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
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* Header - Same as home page */}
      <header className="order-b sticky top-0 z-50 border-gray-200/50 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="group flex cursor-pointer items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Car className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600">
                  Bahram Autohaus
                </span>
                <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
                  Premium Cars Deutschland
                </p>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 lg:flex">
              {[
                { href: "/", label: t.nav.home },
                { href: "/gallery", label: t.nav.gallery },
                { href: "/services", label: t.nav.services },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-lg px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:text-blue-600"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              {/* Language Switch */}
              <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-1">
                <button
                  onClick={() => setLanguage("de")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "de"
                      ? "scale-105 transform bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage("fa")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "fa"
                      ? "scale-105 transform bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  FA
                </button>
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 pb-4 pt-4">
              <div className="flex flex-col space-y-1">
                {[
                  { href: "/", label: t.nav.home, icon: "🏠" },
                  { href: "/gallery", label: t.nav.gallery, icon: "🚗" },
                  { href: "/services", label: t.nav.services, icon: "🔧" },
                  { href: "/about", label: t.nav.about, icon: "ℹ️" },
                  { href: "/contact", label: t.nav.contact, icon: "📞" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex transform items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {t.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
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
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t.info.title}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-gray-900">
                        {t.info.address}
                      </h3>
                      <p className="text-gray-600">Musterstraße 123</p>
                      <p className="text-gray-600">50667 Köln</p>
                      <p className="text-gray-600">Deutschland</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-gray-900">
                        {t.info.phone}
                      </h3>
                      <p className="text-gray-600">+49 221 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-gray-900">
                        {t.info.email}
                      </h3>
                      <p className="text-gray-600">info@bahramautohaus.de</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {t.info.hours}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Map className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">
                        {t.info.showroom}
                      </h3>
                    </div>
                    <p className="text-gray-600">{t.info.hoursShowroom}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Wrench className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">
                        {t.info.service}
                      </h3>
                    </div>
                    <p className="text-gray-600">{t.info.hoursService}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                {t.map.title}
              </h2>
              <p className="text-gray-600">{t.map.description}</p>
            </div>

            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/images/cars/hero-bg.jpg"
                alt="Map of Bahram Autohaus location"
                fill
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 rounded-xl bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Bahram Autohaus
                </h3>
                <p className="text-gray-600">Musterstraße 123, 50667 Köln</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
                >
                  <Map className="mr-2 h-5 w-5" />
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Same as home page */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center space-x-3">
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                    Bahram Autohaus
                  </span>
                  <p className="text-sm text-gray-400">
                    Premium Cars Deutschland
                  </p>
                </div>
              </div>
              <p className="mb-6 max-w-md text-gray-300">
                Seit über 15 Jahren Ihr vertrauensvoller Partner für
                Premium-Fahrzeuge. Qualität, Service und Kundenzufriedenheit
                stehen bei uns an erster Stelle.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-2 text-gray-300">
                    4.9/5 (482 Bewertungen)
                  </span>
                </div>
              </div>
            </div>
            {/* Kontaktinfo */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">+49 221 123 4567</p>
                    <p className="text-sm text-gray-400">Mo-Fr: 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">info@bahramautohaus.de</p>
                    <p className="text-sm text-gray-400">24/7 E-Mail Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">Musterstraße 123</p>
                    <p className="text-white">50667 Köln</p>
                    <p className="text-sm text-gray-400">Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Services & Legal */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">
                Services & Info
              </h3>
              <div className="space-y-3">
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Finanzierung & Leasing
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Garantie & Service
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Inzahlungnahme
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Export weltweit
                </a>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Rechtliches
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      Datenschutz
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      AGB
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      Impressum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 Bahram Autohaus. Alle Rechte vorbehalten.
              </p>
              <div className="mt-4 flex items-center space-x-6 md:mt-0">
                <span className="text-sm text-gray-400">
                  Zertifiziert durch:
                </span>
                <div className="flex space-x-4">
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    TÜV SÜD
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    DEKRA
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    Autohändler-Verband
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
