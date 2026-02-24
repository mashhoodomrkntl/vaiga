import type { Metadata } from "next";
import QatarServicesClient from "./QatarServicesClient";

export const metadata: Metadata = {
    title: "Best Zoho Partners & Financial Consultants in Qatar",
    description:
        "Top-rated Zoho Books partners, Tally Prime experts, and best financial consultants in Doha, Qatar. Expert audit and accounting services by Vaiga Consultancy.",
    keywords: [
        "Best Zoho Partners in Qatar",
        "Best Financial Consultant Doha",
        "Tally Prime Implementation Qatar",
        "Internal Audit Qatar",
        "Statutory Audit Doha",
        "Accounting Services Qatar",
        "VAT Consultancy Qatar",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/services/qatar",
    },
    openGraph: {
        title: "Best Zoho Partners & Financial Consultants in Qatar | Vaiga Consultancy",
        description:
            "Top-rated Zoho Books partners and Tally implementation experts in Doha. Leading financial consultancy in Qatar.",
        url: "https://vaiga-xi.vercel.app/services/qatar",
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
                        url: "https://vaiga-xi.vercel.app/services/qatar",
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
