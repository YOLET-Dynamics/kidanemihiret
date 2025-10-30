import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "አድራሻ | Contact Us",
  description:
    "የደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን በዋሽንግተን ዲሲ ያግኙን። አድራሻ: 701 Oglethorpe St. NW, Washington DC, 20011። | Get in touch with Debre Mitaq St. Amanuel and St. Kidane Mihiret Ethiopian Orthodox Tewahedo Church in Washington DC. Located at 701 Oglethorpe St. NW, Washington DC, 20011.",
  keywords: [
    "contact ethiopian orthodox church",
    "church washington dc",
    "kidane mihret church location",
    "debre mitaq church address",
    "ethiopian church contact",
    "oglethorpe street church",
    "ቤተክርስቲያን አድራሻ",
    "ያግኙን",
    "ኦርቶዶክስ ቤተክርስቲያን ዋሽንግተን",
  ],
  openGraph: {
    title: "አድራሻ | Contact Us | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "ያግኙን በዋሽንግተን ዲሲ። አድራሻ: 701 Oglethorpe St. NW። | Reach out to our Ethiopian Orthodox church in Washington DC. Located at 701 Oglethorpe St. NW.",
    type: "website",
    locale: "en_US",
    siteName: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
  },
  twitter: {
    card: "summary_large_image",
    title: "አድራሻ | Contact Us | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description: "ያግኙን በዋሽንግተን ዲሲ። | Get in touch with our Ethiopian Orthodox church in Washington DC.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
