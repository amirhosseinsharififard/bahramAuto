"use client";
import React from "react";

import { CreditCard, FileText, Globe, Shield, Wrench } from "lucide-react";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    de: {
      title: "Unsere Services",
      subtitle: "Premium-Services für Ihre Anforderungen",
      services: {
        financing: {
          title: "Finanzierung & Leasing",
          description:
            "Flexible Finanzierungslösungen für Ihr Traumauto. Wir arbeiten mit führenden Banken zusammen, um Ihnen attraktive Konditionen zu bieten.",
          features: [
            "Günstige Zinsen",
            "Individuelle Laufzeiten",
            "Boni bei Anzahlung",
            "Online-Rechner",
          ],
        },
        warranty: {
          title: "Garantie & Service",
          description:
            "Umfassende Garantiepakete und professioneller Service für Ihr Fahrzeug. Wir sorgen dafür, dass Sie lange Freude an Ihrem Auto haben.",
          features: [
            "Bis zu 5 Jahre Garantie",
            "Inspektion und Wartung",
            "Mobilitätsgarantie",
            "Originalersatzteile",
          ],
        },
        tradeIn: {
          title: "Inzahlungnahme",
          description:
            "Wir nehmen Ihr altes Fahrzeug in Zahlung und bieten Ihnen einen fairen Preis. Einfach und unkompliziert.",
          features: [
            "Sofortpreisangebot",
            "Faire Bewertung",
            "Abwicklung aller Formalitäten",
            "Direkte Anrechnung",
          ],
        },
        export: {
          title: "Export weltweit",
          description:
            "Wir exportieren Fahrzeuge in alle Länder der Welt. Mit unserem Know-how und unseren internationalen Kontakten machen wir den Export einfach für Sie.",
          features: [
            "Zollabwicklung",
            "Versicherungsschutz",
            "Versandorganisation",
            "Dokumentenübersetzung",
          ],
        },
      },
      process: {
        title: "Unser Prozess",
        steps: [
          {
            title: "Beratung",
            description:
              "Persönliche Beratung zur Findung des richtigen Fahrzeugs und der passenden Finanzierung.",
          },
          {
            title: "Auswahl",
            description:
              "Große Auswahl an geprüften Premium-Fahrzeugen zu fairen Preisen.",
          },
          {
            title: "Finanzierung",
            description:
              "Individuelle Finanzierungslösungen auf Ihre Bedürfnisse zugeschnitten.",
          },
          {
            title: "Übergabe",
            description:
              "Sorgfältige Übergabe des Fahrzeugs mit allen Unterlagen und einer ausführlichen Einweisung.",
          },
        ],
      },
      cta: {
        title: "Benötigen Sie Hilfe?",
        description:
          "Unser Expertenteam steht Ihnen gerne für alle Fragen zur Verfügung.",
        button: "Kontaktieren Sie uns",
      },
    },
    fa: {
      title: "خدمات ما",
      subtitle: "خدمات پریمیوم برای نیازهای شما",
      services: {
        financing: {
          title: "تامین مالی و لیزینگ",
          description:
            "راه‌حل‌های انعطاف‌پذیر تامین مالی برای خودروی رویایی شما. ما با بانک‌های پیشرو همکاری می‌کنیم تا شرایط جذابی را به شما ارائه دهیم.",
          features: [
            "نرخ‌های بهره مقرون‌به‌صرفه",
            "دوره‌های انعطاف‌پذیر",
            "پاداش برای پیش‌پرداخت",
            "محاسبه آنلاین",
          ],
        },
        warranty: {
          title: "ضمانت و خدمات",
          description:
            "بسته‌های ضمانت نامه جامع و خدمات حرفه‌ای برای وسیله نقلیه شما. ما اطمینان حاصل می‌کنیم که برای مدت طولانی از خودروی خود لذت ببرید.",
          features: [
            "تا ۵ سال ضمانت",
            "بازرسی و نگهداری",
            "ضمانت تلفن همراه",
            "قطعات یدکی اصلی",
          ],
        },
        tradeIn: {
          title: "تحویل خودرو قدیمی",
          description:
            "ما وسیله نقلیه قدیمی شما را تحویل گرفته و قیمت منصفانه‌ای را به شما ارائه می‌دهیم. ساده و بدون دردسر.",
          features: [
            "پیشنهاد قیمت فوری",
            "ارزیابی منصفانه",
            "رسیدگی به تمام تشریفات",
            "اعتبار مستقیم",
          ],
        },
        export: {
          title: "صادرات جهانی",
          description:
            "ما خودروها را به تمام کشورهای جهان صادر می‌کنیم. با دانش تخصصی و ارتباطات بین‌المللی خود، صادرات را برای شما آسان می‌کنیم.",
          features: [
            "رسیدگی گمرکی",
            "پوشش بیمه",
            "سازماندهی حمل و نقل",
            "ترجمه اسناد",
          ],
        },
      },
      process: {
        title: "فرآیند ما",
        steps: [
          {
            title: "مشاوره",
            description:
              "مشاوره شخصی برای یافتن خودروی مناسب و تامین مالی مناسب.",
          },
          {
            title: "انتخاب",
            description:
              "انتخاب گسترده‌ای از خودروهای پریمیوم تایید شده با قیمت‌های منصفانه.",
          },
          {
            title: "تامین مالی",
            description: "راه‌حل‌های تامین مالی فردی متناسب با نیازهای شما.",
          },
          {
            title: "تحویل",
            description: "تحویل دقیق خودرو با تمام مدارک و راهنمایی جامع.",
          },
        ],
      },
      cta: {
        title: "به کمک نیاز دارید؟",
        description:
          "تیم متخصص ما خوشحال خواهد بود که به تمام سوالات شما پاسخ دهد.",
        button: "با ما تماس بگیرید",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const serviceItems = [
    {
      icon: CreditCard,
      key: "financing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      key: "warranty",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Wrench,
      key: "tradeIn",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Globe,
      key: "export",
      color: "from-purple-500 to-indigo-500",
    },
  ];

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

          {/* Services Grid */}
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceItems.map((service) => {
              const IconComponent = service.icon;
              const serviceData =
                t.services[service.key as keyof typeof t.services];

              return (
                <div
                  key={service.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-white/20 p-3">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {serviceData.title}
                      </h2>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/70 p-6">
                    <p className="mb-6 text-gray-300">
                      {serviceData.description}
                    </p>

                    <h3 className="mb-4 text-lg font-semibold text-white">
                      Leistungen im Überblick:
                    </h3>
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
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t.process.title}</h2>
              <p className="text-blue-200">
                So einfach funktioniert es bei uns
              </p>
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
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-blue-500/20 p-4">
                <FileText className="h-10 w-10 text-blue-400" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t.cta.title}
              </h2>
              <p className="mb-8 max-w-2xl text-gray-300">
                {t.cta.description}
              </p>
              <a
                href="/contact-us"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {t.cta.button}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ServicesPage;
