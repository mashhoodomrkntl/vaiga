import type { Metadata } from "next";
import IndiaServicesClient from "./IndiaServicesClient";

export const metadata: Metadata = {
    title: "Audit, Tax & Accounting Services in India",
    description:
        "Professional auditing, tax advisory, management consultancy, secretarial compliance, and accounting services in India. Vaiga — your trusted partner since 2011.",
    alternates: {
        canonical: "https://vaiga.org/services/india",
    },
    openGraph: {
        title: "Audit, Tax & Accounting Services in India | Vaiga Consultancy",
        description:
            "Professional auditing, tax advisory, management consultancy, and accounting services in India.",
        url: "https://vaiga.org/services/india",
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
                        url: "https://vaiga.org/services/india",
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
