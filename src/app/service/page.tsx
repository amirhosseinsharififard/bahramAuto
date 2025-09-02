"use client";
import React, { useState } from "react";
import {
  Car,
  Menu,
  X,
  CreditCard,
  Shield,
  Wrench,
  Globe,
  FileText,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import Image from "next/image";

const ServicesPage = () => {
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
      title: "Unsere Services",
      subtitle: "Premium-Services für Ihre Anforderungen",
      services: {
        financing: {
          title: "Finanzierung & Leasing",
          description: "Flexible Finanzierungslösungen für Ihr Traumauto. Wir arbeiten mit führenden Banken zusammen, um Ihnen attraktive Konditionen zu bieten.",
          features: [
            "Günstige Zinsen",
            "Individuelle Laufzeiten",
            "Boni bei Anzahlung",
            "Online-Rechner"
          ]
        },
        warranty: {
          title: "Garantie & Service",
          description: "Umfassende Garantiepakete und professioneller Service für Ihr Fahrzeug. Wir sorgen dafür, dass Sie lange Freude an Ihrem Auto haben.",
          features: [
            "Bis zu 5 Jahre Garantie",
            "Inspektion und Wartung",
            "Mobilitätsgarantie",
            "Originalersatzteile"
          ]
        },
        tradeIn: {
          title: "Inzahlungnahme",
          description: "Wir nehmen Ihr altes Fahrzeug in Zahlung und bieten Ihnen einen fairen Preis. Einfach und unkompliziert.",
          features: [
            "Sofortpreisangebot",
            "Faire Bewertung",
            "Abwicklung aller Formalitäten",
            "Direkte Anrechnung"
          ]
        },
        export: {
          title: "Export weltweit",
          description: "Wir exportieren Fahrzeuge in alle Länder der Welt. Mit unserem Know-how und unseren internationalen Kontakten machen wir den Export einfach für Sie.",
          features: [
            "Zollabwicklung",
            "Versicherungsschutz",
            "Versandorganisation",
            "Dokumentenübersetzung"
          ]
        }
      },
      process: {
        title: "Unser Prozess",
        steps: [
          {
            title: "Beratung",
            description: "Persönliche Beratung zur Findung des richtigen Fahrzeugs und der passenden Finanzierung."
          },
          {
            title: "Auswahl",
            description: "Große Auswahl an geprüften Premium-Fahrzeugen zu fairen Preisen."
          },
          {
            title: "Finanzierung",
            description: "Individuelle Finanzierungslösungen auf Ihre Bedürfnisse zugeschnitten."
          },
          {
            title: "Übergabe",
            description: "Sorgfältige Übergabe des Fahrzeugs mit allen Unterlagen und einer ausführlichen Einweisung."
          }
        ]
      },
      cta: {
        title: "Benötigen Sie Hilfe?",
        description: "Unser Expertenteam steht Ihnen gerne für alle Fragen zur Verfügung.",
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
      title: "خدمات ما",
      subtitle: "خدمات پریمیوم برای نیازهای شما",
      services: {
        financing: {
          title: "تامین مالی و لیزینگ",
          description: "راه‌حل‌های انعطاف‌پذیر تامین مالی برای خودروی رویایی شما. ما با بانک‌های پیشرو همکاری می‌کنیم تا شرایط جذابی را به شما ارائه دهیم.",
          features: [
            "نرخ‌های بهره مقرون‌به‌صرفه",
            "دوره‌های انعطاف‌پذیر",
            "پاداش برای پیش‌پرداخت",
            "محاسبه آنلاین"
          ]
        },
        warranty: {
          title: "ضمانت و خدمات",
          description: "بسته‌های ضمانت نامه جامع و خدمات حرفه‌ای برای وسیله نقلیه شما. ما اطمینان حاصل می‌کنیم که برای مدت طولانی از خودروی خود لذت ببرید.",
          features: [
            "تا ۵ سال ضمانت",
            "بازرسی و نگهداری",
            "ضمانت تلفن همراه",
            "قطعات یدکی اصلی"
          ]
        },
        tradeIn: {
          title: "تحویل خودرو قدیمی",
          description: "ما وسیله نقلیه قدیمی شما را تحویل گرفته و قیمت منصفانه‌ای را به شما ارائه می‌دهیم. ساده و بدون دردسر.",
          features: [
            "پیشنهاد قیمت فوری",
            "ارزیابی منصفانه",
            "رسیدگی به تمام تشریفات",
            "اعتبار مستقیم"
          ]
        },
        export: {
          title: "صادرات جهانی",
          description: "ما خودروها را به تمام کشورهای جهان صادر می‌کنیم. با دانش تخصصی و ارتباطات بین‌المللی خود، صادرات را برای شما آسان می‌کنیم.",
          features: [
            "رسیدگی گمرکی",
            "پوشش بیمه",
            "سازماندهی حمل و نقل",
            "ترجمه اسناد"
          ]
        }
      },
      process: {
        title: "فرآیند ما",
        steps: [
          {
            title: "مشاوره",
            description: "مشاوره شخصی برای یافتن خودروی مناسب و تامین مالی مناسب."
          },
          {
            title: "انتخاب",
            description: "انتخاب گسترده‌ای از خودروهای پریمیوم تایید شده با قیمت‌های منصفانه."
          },
          {
            title: "تامین مالی",
            description: "راه‌حل‌های تامین مالی فردی متناسب با نیازهای شما."
          },
          {
            title: "تحویل",
            description: "تحویل دقیق خودرو با تمام مدارک و راهنمایی جامع."
          }
        ]
      },
      cta: {
        title: "به کمک نیاز دارید؟",
        description: "تیم متخصص ما خوشحال خواهد بود که به تمام سوالات شما پاسخ دهد.",
        button: "با ما تماس بگیرید"
      }
    },
  };

  const t = content[language as keyof typeof content];

  const serviceItems = [
    {
      icon: CreditCard,
      key: "financing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      key: "warranty",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Wrench,
      key: "tradeIn",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Globe,
      key: "export",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-blue-900/90 shadow-lg backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="group flex cursor-pointer items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Car className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-400">
                  Bahram Autohaus
                </span>
                <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
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
                  className="group relative rounded-lg px-4 py-2 font-medium text-gray-300 transition-all duration-300 hover:text-blue-400"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Switch */}
              <div className="flex items-center space-x-2 rounded-lg bg-gray-800/50 p-1">
                <button
                  onClick={() => setLanguage("de")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "de"
                      ? "scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-gray-200"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage("fa")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "fa"
                      ? "scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-gray-200"
                  }`}
                >
                  FA
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-gray-300 transition-all duration-300 hover:bg-blue-900/50 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
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
            <div className="border-t border-white/10 pb-4 pt-4">
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
                    className="flex transform items-center space-x-3 rounded-lg px-4 py-3 text-gray-300 transition-all duration-300 hover:translate-x-2 hover:bg-blue-900/30 hover:text-blue-400"
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

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>
          </div>

          {/* Services Grid */}
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceItems.map((service) => {
              const IconComponent = service.icon;
              const serviceData = t.services[service.key as keyof typeof t.services];

              return (
                <div key={service.key} className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-white/10">
                  <div className={`bg-gradient-to-r ${service.color} p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-white/20 p-3">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{serviceData.title}</h2>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/70">
                    <p className="mb-6 text-gray-300">{serviceData.description}</p>

                    <h3 className="mb-4 text-lg font-semibold text-white">Leistungen im Überblick:</h3>
                    <ul className="mb-6 space-y-3">
                      {serviceData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                      Mehr erfahren
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mb-20 rounded-2xl bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm border border-white/10">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t.process.title}</h2>
              <p className="text-blue-200">So einfach funktioniert es bei uns</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {t.process.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm border border-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-blue-500/20 p-4">
                <FileText className="h-10 w-10 text-blue-400" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">{t.cta.title}</h2>
              <p className="mb-8 max-w-2xl text-gray-300">{t.cta.description}</p>
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {t.cta.button}
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-12 text-white">
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
              <h3 className="mb-6 text-xl font-bold text-white">Services & Info</h3>
              <div className="space-y-3">
                <a href="/services" className="block text-gray-400 transition-colors hover:text-blue-400">
                  Finanzierung & Leasing
                </a>
                <a href="/services" className="block text-gray-400 transition-colors hover:text-blue-400">
                  Garantie & Service
                </a>
                <a href="/services" className="block text-gray-400 transition-colors hover:text-blue-400">
                  Inzahlungnahme
                </a>
                <a href="/services" className="block text-gray-400 transition-colors hover:text-blue-400">
                  Export weltweit
                </a>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">Rechtliches</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-gray-400 transition-colors hover:text-blue-400">
                      Datenschutz
                    </a>
                    <a href="#" className="block text-sm text-gray-400 transition-colors hover:text-blue-400">
                      AGB
                    </a>
                    <a href="#" className="block text-sm text-gray-400 transition-colors hover:text-blue-400">
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
                <span className="text-sm text-gray-400">Zertifiziert durch:</span>
                <div className="flex space-x-4">
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">TÜV SÜD</div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">DEKRA</div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">Autohändler-Verband</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
