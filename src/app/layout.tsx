import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret Ethiopian Orthodox Church",
    template: "%s | ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት",
  },
  description:
    "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዋሽንግተን ዲሲ። በ1991 የተመሰረተ። | Debre Mitaq St. Amanuel and St. Kidane Mihiret Ethiopian Orthodox Tewahedo Church in Washington DC. Founded in 1991, serving our community with faith, worship, and spiritual guidance.",
  keywords: [
    "ethiopian orthodox church",
    "kidane mihret",
    "debre mitaq",
    "washington dc ethiopian church",
    "orthodox tewahedo",
    "ethiopian orthodox washington dc",
    "church washington dc",
    "የኢትዮጵያ ኦርቶዶክስ ቤተክርስቲያን",
  ],
  authors: [{ name: "YOLET Labs", url: "https://yoletent.com" }],
  creator: "YOLET Labs",
  publisher: "Debre Mitaq St. Amanuel & St. Kidane Mihiret Ethiopian Orthodox Church",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዋሽንግተን ዲሲ። በ1991 የተመሰረተ። | Ethiopian Orthodox Tewahedo Church in Washington DC. Founded in 1991, serving our community with faith, worship, and spiritual guidance.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["am_ET"],
    url: "https://kidanemihiret.org",
    siteName: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
  },
  twitter: {
    card: "summary_large_image",
    title: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዋሽንግተን ዲሲ። | Ethiopian Orthodox Tewahedo Church in Washington DC. Founded in 1991.",
  },
  verification: {
    google: "",
    // Add verification codes when available
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am" className="scroll-smooth">
      <body className={`${dmSans.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
