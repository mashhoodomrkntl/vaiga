import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaiga-xi.vercel.app"),
  title: {
    default:
      "Vaiga Consultancy | Audit, Tax & Accounting Services in India, UAE & Qatar",
    template: "%s | Vaiga Consultancy",
  },
  description:
    "Vaiga Consultancy Services — trusted since 2011. Expert auditing, tax advisory, and accounting solutions across India, Dubai & Qatar. 2000+ global clients.",
  keywords: [
    "Vaiga Consultancy",
    "audit services",
    "tax advisory",
    "accounting services",
    "internal audit",
    "statutory audit",
    "GCC VAT consultancy",
    "tax filing",
    "management consultancy",
    "bookkeeping",
    "India",
    "UAE",
    "Dubai",
    "Qatar",
    "Doha",
    "Kerala",
    "Malappuram",
    "financial consulting",
    "business advisory",
    "Best Zoho Partners in Qatar",
    "Best Financial Consultant Doha",
    "Tally Prime Implementation Qatar",
    "Corporate Tax UAE",
    "VAT consultancy Dubai",
    "GST consultancy Kerala",
    "Tax filing Malappuram",
    "Chartered Accountant Kerala",
    "ICV Certification Doha",
  ],
  authors: [{ name: "Vaiga Consultancy Services (P) Ltd" }],
  creator: "Vaiga Consultancy Services (P) Ltd",
  publisher: "Vaiga Consultancy Services (P) Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaiga-xi.vercel.app",
    siteName: "Vaiga Consultancy",
    title:
      "Vaiga Consultancy | Audit, Tax & Accounting Services in India, UAE & Qatar",
    description:
      "Trusted since 2011 — Expert auditing, tax advisory, and accounting solutions across India, Dubai & Qatar. 2000+ global clients.",
    images: ["/vaiga_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vaiga Consultancy | Audit, Tax & Accounting Services in India, UAE & Qatar",
    description:
      "Trusted since 2011 — Expert auditing, tax advisory, and accounting solutions across India, Dubai & Qatar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vaiga-xi.vercel.app",
  },
};

import { CountryProvider } from "@/context/CountryContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/vaiga_logo.png" />
        <link rel="apple-touch-icon" href="/vaiga_logo.png" />
        <meta name="theme-color" content="#1FBCC5" />
      </head>
      <body className="font-[var(--font-body)] antialiased">
        <CountryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CountryProvider>

        {/* Organization & Multi-Location JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Vaiga Consultancy Services (P) Ltd",
                "url": "https://vaiga-xi.vercel.app",
                "logo": "https://vaiga-xi.vercel.app/logo.png",
                "foundingDate": "2011",
                "description": "Professional auditing, tax advisory, and accounting consultancy firm with operations in India, UAE, and Qatar.",
                "sameAs": []
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vaiga Consultancy — Qatar (Best Zoho Partners & Financial Consultants)",
                "image": "https://vaiga-xi.vercel.app/vaiga_logo.png",
                "@id": "https://vaiga-xi.vercel.app/services/qatar",
                "url": "https://vaiga-xi.vercel.app/services/qatar",
                "telephone": "+974-66437523",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Office C-104, 1st Floor, Building No. 22, Barwa Commercial Avenue",
                  "addressLocality": "Doha",
                  "addressCountry": "QA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 25.2854,
                  "longitude": 51.5310
                },
                "servesCuisine": "N/A",
                "priceRange": "$$",
                "description": "Best Zoho Partners and Financial Consultants in Qatar. Specialist in Tally Prime, Audit, and Tax advisory."
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vaiga Consultancy — UAE",
                "image": "https://vaiga-xi.vercel.app/vaiga_logo.png",
                "@id": "https://vaiga-xi.vercel.app/services/uae",
                "url": "https://vaiga-xi.vercel.app/services/uae",
                "telephone": "+971-52-390-2880",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "M16, RKM Building, Near Al Qiyadah Metro Station",
                  "addressLocality": "Dubai",
                  "addressCountry": "AE"
                },
                "priceRange": "$$",
                "description": "Expert Audit, VAT, and Tax consultancy services in Dubai, UAE."
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vaiga Consultancy — India",
                "image": "https://vaiga-xi.vercel.app/vaiga_logo.png",
                "@id": "https://vaiga-xi.vercel.app/services/india",
                "url": "https://vaiga-xi.vercel.app/services/india",
                "telephone": "+91-89432-02011",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vaiga Bhawan, Tirur Road, Puthanathani",
                  "addressLocality": "Malappuram",
                  "addressRegion": "Kerala",
                  "postalCode": "676551",
                  "addressCountry": "IN"
                },
                "priceRange": "$$",
                "description": "Trusted Chartered Accountant and Tax consultancy services in Malappuram, Kerala, India."
              }
            ])
          }}
        />
        <Script
          id="zoho-salesiq-init"
          strategy="afterInteractive"
        >
          {`
    window.$zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode: "siq8d9ff53f33a09132a2dc9bfc39beaecc161891d92bdfc7feafb161a390155a3f9fdb0ec54d8993f26ab2d1b805c83e04",
      values: {},
      ready: function() {}
    };
  `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq8d9ff53f33a09132a2dc9bfc39beaecc161891d92bdfc7feafb161a390155a3f9fdb0ec54d8993f26ab2d1b805c83e04"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
