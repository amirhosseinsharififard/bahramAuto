"use client";
import React from "react";

import { Building, CheckCircle, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    de: {
      title: "Über Bahram Autohaus",
      subtitle: "Ihr vertrauensvoller Partner für Premium-Fahrzeuge",
      story: {
        title: "Unsere Geschichte",
        description:
          "Gegründet im Jahr 2008, hat sich Bahram Autohaus zu einem der führenden Händler für Premium-Fahrzeuge in Deutschland entwickelt. Unser Erfolg basiert auf einer einfachen Philosophie: Kundenzufriedenheit durch Qualität und Transparenz.",
        milestones: [
          {
            year: "2008",
            title: "Gründung",
            description: "Eröffnung des ersten Standorts in Köln",
          },
          {
            year: "2012",
            title: "Expansion",
            description: "Eröffnung zweiter Standort und Beginn des Exports",
          },
          {
            year: "2016",
            title: "Zertifizierung",
            description: "Zertifizierung durch TÜV SÜD und DEKRA",
          },
          {
            year: "2020",
            title: "Digitalisierung",
            description:
              "Einführung des Online-Showrooms und digitalen Services",
          },
          {
            year: "2024",
            title: "15 Jahre Erfahrung",
            description:
              "Feier von 15 Jahren Erfolg und über 2500 verkaufte Fahrzeuge",
          },
        ],
      },
      values: {
        title: "Unsere Werte",
        items: [
          {
            title: "Qualität",
            description:
              "Jedes Fahrzeug wird sorgfältig geprüft und bietet höchste Qualität.",
          },
          {
            title: "Transparenz",
            description:
              "Ehrliche Beratung und faire Preise ohne versteckte Kosten.",
          },
          {
            title: "Kundenzufriedenheit",
            description: "Ihre Zufriedenheit ist unser höchstes Ziel.",
          },
          {
            title: "Vertrauen",
            description:
              "Langfristige Beziehungen basierend auf Vertrauen und Integrität.",
          },
        ],
      },
      team: {
        title: "Unser Team",
        description:
          "Unser erfahrenes Team besteht aus Automobil-Experten mit einer Leidenschaft für Premium-Fahrzeuge.",
        members: [
          {
            name: "Bahram Ahmad",
            position: "Geschäftsführer",
            bio: "Mit über 20 Jahren Erfahrung in der Automobilbranche.",
          },
          {
            name: "Sarah Müller",
            position: "Verkaufsleitung",
            bio: "Expertin für Premium-Fahrzeuge und Kundenbetreuung.",
          },
          {
            name: "Thomas Weber",
            position: "Serviceleiter",
            bio: "Spezialist für Fahrzeugtechnik und -wartung.",
          },
          {
            name: "Lena Schmidt",
            position: "Exportmanagerin",
            bio: "Expertin für internationale Fahrzeugexporte.",
          },
        ],
      },
      cta: {
        title: "Besuchen Sie uns",
        description:
          "Wir freuen uns auf Ihren Besuch in unserem Showroom in Köln.",
        button: "Kontaktieren Sie uns",
      },
    },
    fa: {
      title: "درباره بهرام اتوهاوس",
      subtitle: "شریک قابل اعتماد شما برای خودروهای پریمیوم",
      story: {
        title: "داستان ما",
        description:
          "تأسیس شده در سال ۲۰۰۸، بهرام اتوهاوس به یکی از پیشروترین فروشندگان خودروهای پریمیوم در آلمان تبدیل شده است. موفقیت ما بر اساس فلسفه ساده‌ای است: رضایت مشتری از طریق کیفیت و شفافیت.",
        milestones: [
          {
            year: "۲۰۰۸",
            title: "تأسیس",
            description: "افتتاح اولین شعبه در کلن",
          },
          {
            year: "۲۰۱۲",
            title: "گسترش",
            description: "افتتاح شعبه دوم و آغاز صادرات",
          },
          {
            year: "۲۰۱۶",
            title: "گواهینامه",
            description: "گواهینامه از TÜV SÜD و DEKRA",
          },
          {
            year: "۲۰۲۰",
            title: "دیجیتالی‌سازی",
            description: "معرفی نمایشگاه آنلاین و خدمات دیجیتال",
          },
          {
            year: "۲۰۲۴",
            title: "۱۵ سال تجربه",
            description:
              "جشن گرفتن ۱۵ سال موفقیت و بیش از ۲۵۰۰ خودرو فروخته شده",
          },
        ],
      },
      values: {
        title: "ارزش‌های ما",
        items: [
          {
            title: "کیفیت",
            description:
              "هر خودرو با دقت بررسی شده و بالاترین کیفیت را ارائه می‌دهد.",
          },
          {
            title: "شفافیت",
            description:
              "مشاوره صادقانه و قیمت‌های منصفانه بدون هزینه‌های پنهان.",
          },
          {
            title: "رضایت مشتری",
            description: "رضایت شما بالاترین هدف ماست.",
          },
          {
            title: "اعتماد",
            description: "روابط بلندمدت مبتنی بر اعتماد و درستی.",
          },
        ],
      },
      team: {
        title: "تیم ما",
        description:
          "تیم باتجربه ما از متخصصان خودرو با اشتیاق برای خودروهای پریمیوم تشکیل شده است.",
        members: [
          {
            name: "بهرام احمد",
            position: "مدیرعامل",
            bio: "با بیش از ۲۰ سال تجربه در صنعت خودرو.",
          },
          {
            name: "سارا مولر",
            position: "مدیر فروش",
            bio: "متخصص خودروهای پریمیوم و خدمات مشتریان.",
          },
          {
            name: "توماس وبر",
            position: "مدیر خدمات",
            bio: "متخصص فناوری و نگهداری خودرو.",
          },
          {
            name: "لنا اشمیت",
            position: "مدیر صادرات",
            bio: "متخصص در صادرات بین‌المللی خودرو.",
          },
        ],
      },
      cta: {
        title: "از ما دیدن کنید",
        description: "ما از بازدید شما در نمایشگاه ما در کلن استقبال می‌کنیم.",
        button: "با ما تماس بگیرید",
      },
    },
  };

  const t = content[language as keyof typeof content];

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

          {/* Hero Image */}
          <div className="relative mb-20 h-96 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/showroom.jpg"
              alt="Bahram Autohaus Showroom"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-purple-900/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 max-w-2xl text-white">
              <h2 className="mb-4 text-3xl font-bold">{t.story.title}</h2>
              <p className="text-lg text-gray-200">{t.story.description}</p>
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-xl backdrop-blur-sm">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Unsere Meilensteine
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-blue-500/30 md:block"></div>

              <div className="space-y-12">
                {t.story.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  >
                    <div className="md:w-1/2 md:px-8">
                      <div
                        className={`rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-6 shadow-lg backdrop-blur-sm ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                      >
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                            <Building className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {milestone.title}
                            </h3>
                            <p className="text-blue-400">{milestone.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-0 md:justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <span className="font-bold">{index + 1}</span>
                        <div className="absolute -left-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                        <div className="absolute -right-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                      </div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">{t.values.title}</h2>
              <p className="text-blue-200">Was uns antreibt und auszeichnet</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.values.items.map((value, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <CheckCircle className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t.team.title}
              </h2>
              <p className="text-gray-300">{t.team.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.team.members.map((member, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="h-64 bg-gray-700">
                    <Image
                      src={`/images/team/${member.name.toLowerCase().replace(" ", "-")}.jpg`}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-blue-400">{member.position}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-blue-500/20 p-4">
                <Globe className="h-10 w-10 text-blue-400" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t.cta.title}
              </h2>
              <p className="mb-8 max-w-2xl text-gray-300">
                {t.cta.description}
              </p>
              <Link
                href="/contact-us"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {t.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default AboutPage;
