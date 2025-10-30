import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "አገልግሎቶች | Services",
  description:
    "የቤተክርስቲያን አገልግሎቶቻችን፡ ሥርዓተ ቅዳሴ፣ ሥርዓተ ጥምቀት፣ ሥርዓተ ጋብቻ፣ የፍትሐት አገልግሎት፣ እና የሃይማኖት ትምህርት። | Discover our church services including Liturgy, Baptism, Holy Matrimony, Funeral Services, and Religious Education at Debre Mitaq St. Amanuel and St. Kidane Mihiret Ethiopian Orthodox Church.",
  keywords: [
    "ethiopian orthodox services",
    "church liturgy",
    "baptism service",
    "holy matrimony",
    "funeral services",
    "religious education",
    "bible study",
    "ethiopian orthodox church washington dc",
    "የቤተክርስቲያን አገልግሎት",
    "ሥርዓተ ቅዳሴ",
    "ሥርዓተ ጥምቀት",
    "ሥርዓተ ጋብቻ",
  ],
  openGraph: {
    title: "አገልግሎቶች | Services | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "የቤተክርስቲያን አገልግሎቶች፡ ሥርዓተ ቅዳሴ፣ ሥርዓተ ጥምቀት፣ እና ሌሎች። | Explore our spiritual services including Liturgy, Baptism, Holy Matrimony, Funeral Services, and Religious Education.",
    type: "website",
    locale: "en_US",
    siteName:
      "ደብረ ሚጣቅ ቅዱስ አማኑኤልና ቅድስት ኪዳነ ምህረት | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
  },
  twitter: {
    card: "summary_large_image",
    title: "አገልግሎቶች | Services | Debre Mitaq St. Amanuel & St. Kidane Mihiret",
    description:
      "የቤተክርስቲያን አገልግሎቶች። | Discover our church services including Liturgy, Baptism, Religious Education and more.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
