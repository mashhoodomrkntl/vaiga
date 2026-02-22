import type { Metadata } from "next";
import UAEServicesClient from "./UAEServicesClient";

export const metadata: Metadata = {
    title: "Audit, VAT & Tax Services in Dubai, UAE",
    description:
        "Internal audit, statutory audit, GCC VAT consultancy, tax filing, and accounting services in Dubai, UAE. Expert financial solutions by Vaiga.",
    alternates: {
        canonical: "https://vaiga.org/services/uae",
    },
    openGraph: {
        title: "Audit, VAT & Tax Services in Dubai, UAE | Vaiga Consultancy",
        description:
            "Internal audit, statutory audit, GCC VAT consultancy, tax filing, and accounting in Dubai, UAE.",
        url: "https://vaiga.org/services/uae",
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
                        url: "https://vaiga.org/services/uae",
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
