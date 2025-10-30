import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ስለ እኛ | About Us",
  description:
    "የደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን በ1991 የተመሰረተ። በዋሽንግተን ዲሲ ለምእመናን በእምነት እና በመንፈሳዊ መመሪያ እናገለግላለን። | Learn about Debre Mitaq St. Amanuel and St. Kidane Mihiret Ethiopian Orthodox Tewahedo Church in Washington DC. Founded in 1991, serving the community with faith, worship, and spiritual guidance.",
  keywords: [
    "ethiopian orthodox church",
    "kidane mihret",
    "debre mitaq",
    "washington dc church",
    "orthodox church history",
    "church mission",
    "ethiopian orthodox tewahedo",
    "የኢትዮጵያ ኦርቶዶክስ ቤተክርስቲያን",
    "ስለ ቤተክርስቲያን",
  ],
  openGraph: {
    title: "ስለ እኛ | About Us | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "በ1991 የተመሰረተ የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን። | Founded in 1991, our church serves the Ethiopian Orthodox community in Washington DC with faith, worship, and spiritual guidance.",
    type: "website",
    locale: "en_US",
    siteName: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
  },
  twitter: {
    card: "summary_large_image",
    title: "ስለ እኛ | About Us | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "በ1991 የተመሰረተ የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን። | Founded in 1991, serving the Ethiopian Orthodox community in Washington DC.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
