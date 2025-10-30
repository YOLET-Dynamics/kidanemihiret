"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export function Footer() {
  const { t } = useLanguage();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.info(t("toast_coming_soon"), {
      description: t("toast_working_on_it"),
    });
  };

  const navItems = [
    { key: "nav_home", href: "/" },
    { key: "nav_about", href: "/about" },
    { key: "nav_services", href: "/#services" },
    { key: "nav_donate", href: "/donate" },
    { key: "nav_contact", href: "/contact" },
  ] as const;

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#F5F5F7] text-[#2C2C2E] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#2C2C2E] text-2xl">✟</span>
              <h3 className="text-base font-semibold text-[#2C2C2E]">
                Debre Mitak Amanuel & Kidane Mihiret
              </h3>
            </div>
            <p className="text-[#6E6E73] text-sm leading-relaxed">
              Ethiopian Orthodox Tewahedo Church
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[#6E6E73] hover:text-[#2C2C2E] transition-colors text-sm"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <div className="flex items-start gap-2 mb-6">
              <MapPin className="w-4 h-4 text-[#6E6E73] mt-1 flex-shrink-0" />
              <p className="text-[#6E6E73] text-sm leading-relaxed">
                {t("footer_address")}
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={handleSocialClick}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 text-[#6E6E73] hover:text-[#2C2C2E] cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center space-y-3">
            <p className="text-[#6E6E73] text-sm">
              © {new Date().getFullYear()} Debre Mitak Amanuel & Kidane Mihiret.{" "}
              {t("footer_rights")}.
            </p>

            {/* Religious "Powered By" */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#6E6E73]">
              <span>{t("footer_blessed_by")}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                {t("footer_created_with")}
                <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                by
              </span>
              <a
                href="https://yoletent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#2C2C2E] hover:underline transition-colors"
              >
                YOLET Labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
