import type { Metadata } from "next";
import QatarServicesClient from "./QatarServicesClient";

export const metadata: Metadata = {
    title: "Audit & Accounting Services in Qatar",
    description:
        "Internal audit, statutory audit, accounting, and management consultancy in Doha, Qatar. Trust Vaiga Consultancy for your financial needs.",
    alternates: {
        canonical: "https://vaiga.org/services/qatar",
    },
    openGraph: {
        title: "Audit & Accounting Services in Qatar | Vaiga Consultancy",
        description:
            "Internal audit, statutory audit, accounting, and management consultancy in Doha, Qatar.",
        url: "https://vaiga.org/services/qatar",
    },
};

export default function QatarServicesPage() {
    return (
        <>
            <QatarServicesClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        name: "Vaiga Consultancy Services — Qatar",
                        url: "https://vaiga.org/services/qatar",
                        telephone: "+974-66437523",
                        email: "audit@vaiga.org",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Office C-104, 1st Floor, Building No. 22, Barwa Commercial Avenue",
                            addressLocality: "Doha",
                            addressCountry: "QA",
                        },
                        description:
                            "Internal audit, statutory audit, accounting, and management consultancy in Doha, Qatar.",
                        priceRange: "$$",
                        areaServed: "Qatar",
                    }),
                }}
            />
        </>
    );
}
