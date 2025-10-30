'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'am' ? 'en' : 'am')}
      className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors text-[#6E6E73] font-medium text-sm"
      aria-label="Toggle language"
    >
      <span className={language === 'en' ? 'text-[#2C2C2E]' : ''}>EN</span>
      <span>|</span>
      <span className={language === 'am' ? 'text-[#2C2C2E]' : ''}>አማ</span>
    </button>
  );
}

