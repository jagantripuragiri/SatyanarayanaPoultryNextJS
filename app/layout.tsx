import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  ADDRESS,
  EMAIL,
  HOURS_SCHEMA,
  PHONE_TEL,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Satyanarayana Poultry Farm | Chicken Farm in Vizianagaram",
  description:
    "Satyanarayana Poultry Farm is a trusted chicken farm in Vizianagaram, serving Denkada, Jonnada, Bobbili, Srikakulam & Visakhapatnam with fresh broiler chicken and wholesale poultry supply.",
  keywords: [
    "poultry farm in Vizianagaram",
    "chicken farms near me",
    "farms near me",
    "broiler chicken supplier Vizianagaram",
    "wholesale chicken supply Andhra Pradesh",
    "Denkada poultry farm",
  ],
  applicationName: SITE_NAME,
  openGraph: {
    title: "Satyanarayana Poultry Farm | Chicken Farm in Vizianagaram",
    description:
      "Fresh, hygienic broiler chicken and wholesale poultry supply near Vizianagaram, Bobbili & Srikakulam.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/farm.jpg`,
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
    addressLocality: "Denkada",
    addressRegion: "Andhra Pradesh",
    postalCode: "535001",
    addressCountry: "IN",
  },
  url: SITE_URL,
  priceRange: "$$",
  openingHours: [HOURS_SCHEMA],
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area,
  })),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
