import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Satyanarayana Poultry Farm",
  description:
    "Providing healthy poultry products with traditional values and modern farming practices. Trusted by hundreds of people in Vizianagaram District.",
  keywords: ["poultry farm", "broiler chicken", "Vizianagaram", "wholesale supply"],
  openGraph: {
    title: "Satyanarayana Poultry Farm",
    description:
      "Quality chicken trusted by hundreds of people. Hygienic, affordable & fresh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
