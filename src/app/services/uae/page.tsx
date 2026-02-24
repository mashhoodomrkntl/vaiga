import type { Metadata } from "next";
import UAEServicesClient from "./UAEServicesClient";

export const metadata: Metadata = {
    title: "Best Audit, VAT & Tax Consultancy in Dubai, UAE",
    description:
        "Official Zoho & Tally partners in Dubai. Top-tier GCC VAT consultancy, internal audit, and corporate tax services in the UAE. Expert financial advisory.",
    keywords: [
        "Best VAT Consultant Dubai",
        "Corporate Tax UAE",
        "Audit Services Dubai",
        "Zoho Books Partner UAE",
        "Tally Prime Implementation Dubai",
        "GCC VAT Consultancy",
        "Tax filing UAE",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/services/uae",
    },
    openGraph: {
        title: "Best Audit, VAT & Tax Consultancy in Dubai, UAE | Vaiga Consultancy",
        description:
            "Leading VAT consultancy and audit services in Dubai. Official Zoho and Tally implementation partners in the UAE.",
        url: "https://vaiga-xi.vercel.app/services/uae",
    },
};

export default function UAEServicesPage() {
    return (
        <>
            <UAEServicesClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        name: "Vaiga Consultancy Services — UAE",
                        url: "https://vaiga-xi.vercel.app/services/uae",
                        telephone: "+971-52-390-2880",
                        email: "services@vaiga.org",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "M16, RKM Building, Near Al Qiyadah Metro Station",
                            addressLocality: "Dubai",
                            addressCountry: "AE",
                        },
                        description:
                            "Internal audit, statutory audit, GCC VAT consultancy, tax filing, and accounting services in Dubai, UAE.",
                        priceRange: "$$",
                        areaServed: "United Arab Emirates",
                    }),
                }}
            />
        </>
    );
}
