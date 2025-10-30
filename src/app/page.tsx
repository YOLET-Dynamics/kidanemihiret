"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Cross Icon */}
            <div className="mb-8 flex justify-center">
              <span className="text-[#2C2C2E] text-7xl md:text-8xl">✟</span>
            </div>

            {/* Church Name */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#2C2C2E] mb-8 leading-tight tracking-tight">
              {t("hero_title")}
            </h1>

            {/* Hero Image */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <Image
                src="/imgs/hero-church.avif"
                alt="Church"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#F5F5F7] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-[#2C2C2E] text-9xl">✟</div>
          <div className="absolute bottom-20 right-10 text-[#2C2C2E] text-9xl">✟</div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Title Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <span className="text-2xl">✟</span>
                <span className="text-sm font-semibold text-[#6E6E73] tracking-wide uppercase">
                  {t("welcome_title")}
                </span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100">
              {/* Welcome Text */}
              <p className="text-xl md:text-2xl lg:text-3xl text-[#2C2C2E] leading-relaxed text-center font-medium mb-8">
                {t("welcome_text")}
              </p>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-xs"></div>
                <span className="text-[#6E6E73] text-xl">✦</span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-xs"></div>
              </div>

              {/* Stats/Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
                <div className="text-center p-6 rounded-2xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-[#2C2C2E] mb-2">1991</div>
                  <div className="text-sm text-[#6E6E73] font-medium">
                    {language === "am" ? "የተመሰረተበት" : "Established"}
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-[#2C2C2E] mb-2">✟</div>
                  <div className="text-sm text-[#6E6E73] font-medium">
                    {language === "am" ? "የእምነት ማህበረሰብ" : "Faith Community"}
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-[#2C2C2E] mb-2">DC</div>
                  <div className="text-sm text-[#6E6E73] font-medium">
                    {language === "am" ? "ዋሽንግተን ዲሲ" : "Washington DC"}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#2C2C2E] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.16)] hover:scale-105"
                >
                  {language === "am" ? "ተጨማሪ ያንብቡ" : "Learn More"}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* About Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/imgs/img-1.avif"
                  alt={t("featured_about_title")}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-[#6E6E73] mb-3 uppercase tracking-wide">
                  {t("featured_about_title")}
                </h3>
                <p className="text-[#2C2C2E] text-sm leading-relaxed mb-4">
                  {t("featured_about_text")}
                </p>
                <Link
                  href="/about"
                  className="text-sm text-[#6E6E73] hover:text-[#2C2C2E] transition-colors font-medium"
                >
                  {t("featured_about_link")}
                </Link>
              </div>
            </div>

            {/* Religious Lessons Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/imgs/img-2.avif"
                  alt={t("featured_lessons_title")}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-[#6E6E73] mb-3 uppercase tracking-wide">
                  {t("featured_lessons_title")}
                </h3>
                <p className="text-[#2C2C2E] text-sm leading-relaxed mb-4">
                  {t("featured_lessons_text")}
                </p>
                <Link
                  href="/#services"
                  className="text-sm text-[#6E6E73] hover:text-[#2C2C2E] transition-colors font-medium"
                >
                  {t("featured_lessons_link")}
                </Link>
              </div>
            </div>

            {/* Prayers Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/imgs/img-3.avif"
                  alt={t("featured_prayers_title")}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold text-[#6E6E73] mb-3 uppercase tracking-wide">
                  {t("featured_prayers_title")}
                </h3>
                <p className="text-[#2C2C2E] text-sm leading-relaxed mb-4">
                  {t("featured_prayers_text")}
                </p>
                <Link
                  href="/#services"
                  className="text-sm text-[#6E6E73] hover:text-[#2C2C2E] transition-colors font-medium"
                >
                  {t("featured_prayers_link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm md:text-base font-semibold text-[#6E6E73] mb-3 tracking-wide uppercase">
                {t("services_title")}
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#2C2C2E]">
                {t("services_subtitle")}
              </h3>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Liturgy */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">✟</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("services_liturgy_title")}
                </h4>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("services_liturgy_desc")}
                </p>
              </div>

              {/* Baptism */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💧</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("services_baptism_title")}
                </h4>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("services_baptism_desc")}
                </p>
              </div>

              {/* Holy Matrimony - Only for English */}
              {language === "en" && (
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">💍</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                    {t("services_matrimony_title")}
                  </h4>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">
                    {t("services_matrimony_desc")}
                  </p>
                </div>
              )}

              {/* Funeral Services */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🕊️</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("services_funeral_title")}
                </h4>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("services_funeral_desc")}
                </p>
              </div>

              {/* Religious Lessons */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📖</span>
                </div>
                <h4 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("services_lessons_title")}
                </h4>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("services_lessons_desc")}
                </p>
              </div>
            </div>

            {/* Bible Verse */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <blockquote className="text-center">
                  <p className="text-[#2C2C2E] text-lg md:text-xl leading-relaxed mb-4 italic">
                    {t("services_verse")}
                  </p>
                  <cite className="text-[#6E6E73] text-sm not-italic">
                    {t("services_reference")}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2E] mb-4">
                  {t("events_title")}
                </h2>
                <p className="text-[#6E6E73] text-lg">
                  {t("events_subtitle")}
                </p>
              </div>

              {/* Events Grid - Placeholder for now */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Event Card 1 */}
                <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-2xl font-semibold text-[#2C2C2E]">
                          {t("events_date_tbd")}
                        </div>
                        <div className="text-sm text-[#6E6E73] mt-1">Date</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2C2C2E] mb-2">
                        {t("events_sunday_title")}
                      </h3>
                      <p className="text-[#6E6E73] text-sm mb-4">
                        {t("events_sunday_description")}
                      </p>
                      <p className="text-sm text-[#6E6E73]">
                        <span className="font-medium">{t("events_time_label")}</span> {t("events_time_tbd")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-2xl font-semibold text-[#2C2C2E]">
                          {t("events_date_tbd")}
                        </div>
                        <div className="text-sm text-[#6E6E73] mt-1">Date</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2C2C2E] mb-2">
                        {t("events_feast_title")}
                      </h3>
                      <p className="text-[#6E6E73] text-sm mb-4">
                        {t("events_feast_description")}
                      </p>
                      <p className="text-sm text-[#6E6E73]">
                        <span className="font-medium">{t("events_time_label")}</span> {t("events_time_tbd")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-[#6E6E73] text-sm">
                  {t("events_check_back")}
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Donation CTA Section - Enhanced */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F7] to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C2C2E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2C2C2E] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F7] rounded-2xl mb-8">
                  <span className="text-3xl">✟</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-semibold text-[#2C2C2E] mb-6 leading-tight">
                  {t("cta_donate")}
                </h2>

                <p className="text-lg md:text-xl text-[#6E6E73] mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t("cta_donate_description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center bg-[#2C2C2E] text-white px-10 py-5 rounded-full font-medium hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:scale-105 text-base"
                  >
                    {t("cta_donate_button")}
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-[#2C2C2E] px-10 py-5 rounded-full font-medium hover:bg-[#F5F5F7] transition-all duration-300 border border-gray-200 text-base"
                  >
                    {t("cta_learn_more")}
                  </Link>
                </div>

                <p className="text-sm text-[#6E6E73] mt-8">
                  {t("cta_tax_info")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
