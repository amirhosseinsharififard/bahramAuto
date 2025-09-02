"use client";
import React, { useState } from "react";
import {
  Award,
  Car,
  Eye,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlayCircle,
  Search,
  Shield,
  Star,
  Users,
  X,
  Building,
  Globe,
  Award as Trophy,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const [language, setLanguage] = useState("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    de: {
      nav: {
        home: "Startseite",
        gallery: "Fahrzeuge",
        services: "Service",
        about: "Über uns",
        contact: "Kontakt",
      },
      title: "Über Bahram Autohaus",
      subtitle: "Ihr vertrauensvoller Partner für Premium-Fahrzeuge",
      story: {
        title: "Unsere Geschichte",
        description: "Gegründet im Jahr 2008, hat sich Bahram Autohaus zu einem der führenden Händler für Premium-Fahrzeuge in Deutschland entwickelt. Unser Erfolg basiert auf einer einfachen Philosophie: Kundenzufriedenheit durch Qualität und Transparenz.",
        milestones: [
          {
            year: "2008",
            title: "Gründung",
            description: "Eröffnung des ersten Standorts in Köln"
          },
          {
            year: "2012",
            title: "Expansion",
            description: "Eröffnung zweiter Standort und Beginn des Exports"
          },
          {
            year: "2016",
            title: "Zertifizierung",
            description: "Zertifizierung durch TÜV SÜD und DEKRA"
          },
          {
            year: "2020",
            title: "Digitalisierung",
            description: "Einführung des Online-Showrooms und digitalen Services"
          },
          {
            year: "2024",
            title: "15 Jahre Erfahrung",
            description: "Feier von 15 Jahren Erfolg und über 2500 verkaufte Fahrzeuge"
          }
        ]
      },
      values: {
        title: "Unsere Werte",
        items: [
          {
            title: "Qualität",
            description: "Jedes Fahrzeug wird sorgfältig geprüft und bietet höchste Qualität."
          },
          {
            title: "Transparenz",
            description: "Ehrliche Beratung und faire Preise ohne versteckte Kosten."
          },
          {
            title: "Kundenzufriedenheit",
            description: "Ihre Zufriedenheit ist unser höchstes Ziel."
          },
          {
            title: "Vertrauen",
            description: "Langfristige Beziehungen basierend auf Vertrauen und Integrität."
          }
        ]
      },
      team: {
        title: "Unser Team",
        description: "Unser erfahrenes Team besteht aus Automobil-Experten mit einer Leidenschaft für Premium-Fahrzeuge.",
        members: [
          {
            name: "Bahram Ahmad",
            position: "Geschäftsführer",
            bio: "Mit über 20 Jahren Erfahrung in der Automobilbranche."
          },
          {
            name: "Sarah Müller",
            position: "Verkaufsleitung",
            bio: "Expertin für Premium-Fahrzeuge und Kundenbetreuung."
          },
          {
            name: "Thomas Weber",
            position: "Serviceleiter",
            bio: "Spezialist für Fahrzeugtechnik und -wartung."
          },
          {
            name: "Lena Schmidt",
            position: "Exportmanagerin",
            bio: "Expertin für internationale Fahrzeugexporte."
          }
        ]
      },
      cta: {
        title: "Besuchen Sie uns",
        description: "Wir freuen uns auf Ihren Besuch in unserem Showroom in Köln.",
        button: "Kontaktieren Sie uns"
      }
    },
    fa: {
      nav: {
        home: "صفحه اصلی",
        gallery: "خودروها",
        services: "خدمات",
        about: "درباره ما",
        contact: "تماس",
      },
      title: "درباره بهرام اتوهاوس",
      subtitle: "شریک قابل اعتماد شما برای خودروهای پریمیوم",
      story: {
        title: "داستان ما",
        description: "تأسیس شده در سال ۲۰۰۸، بهرام اتوهاوس به یکی از پیشروترین فروشندگان خودروهای پریمیوم در آلمان تبدیل شده است. موفقیت ما بر اساس فلسفه ساده‌ای است: رضایت مشتری از طریق کیفیت و شفافیت.",
        milestones: [
          {
            year: "۲۰۰۸",
            title: "تأسیس",
            description: "افتتاح اولین شعبه در کلن"
          },
          {
            year: "۲۰۱۲",
            title: "گسترش",
            description: "افتتاح شعبه دوم و آغاز صادرات"
          },
          {
            year: "۲۰۱۶",
            title: "گواهینامه",
            description: "گواهینامه از TÜV SÜD و DEKRA"
          },
          {
            year: "۲۰۲۰",
            title: "دیجیتالی‌سازی",
            description: "معرفی نمایشگاه آنلاین و خدمات دیجیتال"
          },
          {
            year: "۲۰۲۴",
            title: "۱۵ سال تجربه",
            description: "جشن گرفتن ۱۵ سال موفقیت و بیش از ۲۵۰۰ خودرو فروخته شده"
          }
        ]
      },
      values: {
        title: "ارزش‌های ما",
        items: [
          {
            title: "کیفیت",
            description: "هر خودرو با دقت بررسی شده و بالاترین کیفیت را ارائه می‌دهد."
          },
          {
            title: "شفافیت",
            description: "مشاوره صادقانه و قیمت‌های منصفانه بدون هزینه‌های پنهان."
          },
          {
            title: "رضایت مشتری",
            description: "رضایت شما بالاترین هدف ماست."
          },
          {
            title: "اعتماد",
            description: "روابط بلندمدت مبتنی بر اعتماد و درستی."
          }
        ]
      },
      team: {
        title: "تیم ما",
        description: "تیم باتجربه ما از متخصصان خودرو با اشتیاق برای خودروهای پریمیوم تشکیل شده است.",
        members: [
          {
            name: "بهرام احمد",
            position: "مدیرعامل",
            bio: "با بیش از ۲۰ سال تجربه در صنعت خودرو."
          },
          {
            name: "سارا مولر",
            position: "مدیر فروش",
            bio: "متخصص خودروهای پریمیوم و خدمات مشتریان."
          },
          {
            name: "توماس وبر",
            position: "مدیر خدمات",
            bio: "متخصص فناوری و نگهداری خودرو."
          },
          {
            name: "لنا اشمیت",
            position: "مدیر صادرات",
            bio: "متخصص در صادرات بین‌المللی خودرو."
          }
        ]
      },
      cta: {
        title: "از ما دیدن کنید",
        description: "ما از بازدید شما در نمایشگاه ما در کلن استقبال می‌کنیم.",
        button: "با ما تماس بگیرید"
      }
    },
  };

  const t = content[language as keyof typeof content];

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

          {/* Hero Image */}
          <div className="relative mb-20 h-96 overflow-hidden rounded-3xl">
                          <Image
                src="/images/cars/hero-bg.jpg"
                alt="Bahram Autohaus Showroom"
                fill
                className="h-full w-full object-cover"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 max-w-2xl text-white">
              <h2 className="mb-4 text-3xl font-bold">{t.story.title}</h2>
              <p className="text-lg text-gray-200">{t.story.description}</p>
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Unsere Meilensteine</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-blue-200 md:block"></div>

              <div className="space-y-12">
                {t.story.milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className={`rounded-2xl bg-white p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 rounded-full bg-blue-100 p-3">
                            <Building className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                            <p className="text-blue-600">{milestone.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-0 md:justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        <span className="font-bold">{index + 1}</span>
                        <div className="absolute -left-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-200"></div>
                        <div className="absolute -right-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-200"></div>
                      </div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20 rounded-2xl bg-gradient-to-r from-blue-900 via-purple-900 to-slate-900 p-8 text-white">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t.values.title}</h2>
              <p className="text-blue-200">Was uns antreibt und auszeichnet</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.values.items.map((value, index) => (
                <div key={index} className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <CheckCircle className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{t.team.title}</h2>
              <p className="text-gray-600">{t.team.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.team.members.map((member, index) => (
                <div key={index} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="h-64 bg-gray-200">
                    <Image
                      src={`/images/cars/${member.name.toLowerCase().replace(' ', '-').includes('bahram') ? 'audi-rs6' : member.name.toLowerCase().replace(' ', '-').includes('sarah') ? 'bmw-m4' : member.name.toLowerCase().replace(' ', '-').includes('thomas') ? 'bmw-x5' : member.name.toLowerCase().replace(' ', '-').includes('lena') ? 'mercedes-c63' : 'porsche-cayenne'}.jpg`}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-4 text-blue-600">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-blue-100 p-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{t.cta.title}</h2>
              <p className="mb-8 max-w-2xl text-gray-600">{t.cta.description}</p>
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                {t.cta.button}
              </a>
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
                Seit über 15 Jahren Ihr vertrauensvoller Partner für Premium-Fahrzeuge. Qualität, Service und Kundenzufriedenheit stehen bei uns an erster Stelle.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-2 text-gray-300">4.9/5 (482 Bewertungen)</span>
                </div>
              </div>
            </div>
            {/* Kontaktinfo */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">
                Kontakt
              </h3>
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
              <p className="text-sm text-gray-400">© 2024 Bahram Autohaus. Alle Rechte vorbehalten.</p>
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

export default AboutPage;
