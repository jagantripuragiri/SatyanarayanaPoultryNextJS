import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ADDRESS, EMAIL, HOURS_SCHEMA, PHONE_TEL, SITE_NAME, SITE_URL } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Satyanarayana Poultry Farm",
  description:
    "Providing healthy poultry products with traditional values and modern farming practices. Trusted by hundreds of people in Vizianagaram District.",
  keywords: ["poultry farm", "broiler chicken", "Vizianagaram", "wholesale supply"],
  openGraph: {
    title: "Satyanarayana Poultry Farm",
    description:
      "Quality chicken trusted by hundreds of people. Hygienic, affordable & fresh.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: SITE_NAME,
  image: `${SITE_URL}/images/farm.jpg`,
  telephone: PHONE_TEL,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  url: SITE_URL,
  priceRange: "$$",
  openingHours: [HOURS_SCHEMA],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
