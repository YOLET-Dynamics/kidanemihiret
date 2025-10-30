'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_about', href: '/about' },
    { key: 'nav_services', href: '/#services' },
    { key: 'nav_donate', href: '/donate' },
    { key: 'nav_contact', href: '/contact' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-[#2C2C2E] text-3xl">✟</span>
            </div>
            <span className="text-[#2C2C2E] font-semibold text-base hidden lg:block max-w-md truncate">
              Debre Mitak Amanuel & Kidane Mihiret
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-[#6E6E73] hover:text-[#2C2C2E] transition-colors font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2C2C2E] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-[#6E6E73] hover:text-[#2C2C2E] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

