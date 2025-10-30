"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Heart, Users, HandHeart } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#2C2C2E] mb-4">
              {t("about_page_title")}
            </h1>
            <p className="text-lg text-[#6E6E73]">
              {t("about_page_subtitle")}
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <Image
              src="/imgs/about.avif"
              alt="About Our Church"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-lg md:text-xl text-[#2C2C2E] leading-relaxed">
                {t("about_main_text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-[#F5F5F7] rounded-2xl p-8 md:p-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Heart className="w-7 h-7 text-[#2C2C2E]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-4">
                  {t("about_our_mission")}
                </h2>
                <p className="text-[#6E6E73] leading-relaxed">
                  {t("about_mission_text")}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#F5F5F7] rounded-2xl p-8 md:p-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-2xl">✟</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2E] mb-4">
                  {t("about_our_vision")}
                </h2>
                <p className="text-[#6E6E73] leading-relaxed">
                  {t("about_vision_text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2E] mb-12 text-center">
              {t("about_our_values")}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Faith */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F7] rounded-2xl mb-6">
                  <span className="text-3xl">✟</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("about_value_faith")}
                </h3>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("about_value_faith_desc")}
                </p>
              </div>

              {/* Community */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F7] rounded-2xl mb-6">
                  <Users className="w-8 h-8 text-[#2C2C2E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("about_value_community")}
                </h3>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("about_value_community_desc")}
                </p>
              </div>

              {/* Service */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F7] rounded-2xl mb-6">
                  <HandHeart className="w-8 h-8 text-[#2C2C2E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2E] mb-3">
                  {t("about_value_service")}
                </h3>
                <p className="text-[#6E6E73] text-sm leading-relaxed">
                  {t("about_value_service_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2E] mb-6">
              {t("about_leadership_title")}
            </h2>
            <p className="text-lg text-[#6E6E73] leading-relaxed">
              {t("about_leadership_desc")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
