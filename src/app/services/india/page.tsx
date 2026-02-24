import type { Metadata } from "next";
import IndiaServicesClient from "./IndiaServicesClient";

export const metadata: Metadata = {
    title: "Audit, Tax & Chartered Accountant Services in India",
    description:
        "Official Tally & Zoho partners in India. Top-rated auditing, GST consultancy, and tax advisory services in Malappuram, Kerala. Expert financial solutions since 2011.",
    keywords: [
        "Chartered Accountant Kerala",
        "GST consultancy Malappuram",
        "Tax filing India",
        "Tally Prime Partner India",
        "Zoho Books Implementation India",
        "Internal Audit Kerala",
        "Business setup India",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/services/india",
    },
    openGraph: {
        title: "Audit, Tax & Chartered Accountant Services in India | Vaiga Consultancy",
        description:
            "Professional auditing, GST consultancy, and Tally/Zoho implementation in Kerala, India.",
        url: "https://vaiga-xi.vercel.app/services/india",
    },
};

export default function IndiaServicesPage() {
    return (
        <>
            <IndiaServicesClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        name: "Vaiga Consultancy Services — India",
                        url: "https://vaiga-xi.vercel.app/services/india",
                        telephone: "+91-89432-02011",
                        email: "services@vaiga.org",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Vaiga Bhawan, Tirur Road, Puthanathani",
                            addressLocality: "Malappuram",
                            addressRegion: "Kerala",
                            postalCode: "676551",
                            addressCountry: "IN",
                        },
                        description:
                            "Professional auditing, tax advisory, management consultancy, and accounting services in India.",
                        priceRange: "$$",
                        areaServed: "India",
                    }),
                }}
            />
        </>
    );
}
