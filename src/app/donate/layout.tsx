import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "መዋጮ እና አባልነት | Donate & Membership",
  description:
    "ቤተክርስቲያናችንን ይደግፉ እና የደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን አባል ይሁኑ። በዋሽንግተን ዲሲ የእምነት ማህበረሰባችንን ይቀላቀሉ። | Support our church and become a member of Debre Mitaq St. Amanuel and St. Kidane Mihiret Ethiopian Orthodox Tewahedo Church. Join our community of faith in Washington DC.",
  keywords: [
    "church donation",
    "church membership",
    "ethiopian orthodox church donation",
    "join ethiopian church",
    "support church",
    "church community washington dc",
    "የቤተክርስቲያን መዋጮ",
    "አባልነት",
    "ቤተክርስቲያን ይደግፉ",
  ],
  openGraph: {
    title: "መዋጮ እና አባልነት | Donate & Membership | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "ቤተክርስቲያናችንን ይደግፉ እና አባል ይሁኑ። | Support our church mission and become a member of our Ethiopian Orthodox community in Washington DC.",
    type: "website",
    locale: "en_US",
    siteName: "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
  },
  twitter: {
    card: "summary_large_image",
    title: "መዋጮ እና አባልነት | Donate & Membership",
    description:
      "ቤተክርስቲያናችንን ይደግፉ እና አባል ይሁኑ። | Support our church mission and become a member of our Ethiopian Orthodox community.",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
