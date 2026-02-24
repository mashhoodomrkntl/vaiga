import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Vaiga Consultancy | India, Dubai & Qatar Offices",
    description:
        "Get in touch with Vaiga Consultancy. Offices in Malappuram (India), Dubai (UAE), and Doha (Qatar). Call, email, or visit us today.",
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/contact",
    },
    openGraph: {
        title: "Contact Vaiga Consultancy | India, Dubai & Qatar Offices",
        description:
            "Get in touch with our offices in India, Dubai, and Qatar.",
        url: "https://vaiga-xi.vercel.app/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <ContactPageClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Vaiga Consultancy — India Office",
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
                            openingHours: "Mo-Sa 10:00-17:00",
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Vaiga Consultancy — UAE Office",
                            telephone: "+971-52-390-2880",
                            email: "services@vaiga.org",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "M16, RKM Building, Near Al Qiyadah Metro Station",
                                addressLocality: "Dubai",
                                addressCountry: "AE",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Vaiga Consultancy — Qatar Office",
                            telephone: "+974-66437523",
                            email: "audit@vaiga.org",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Office C-104, 1st Floor, Building No. 22, Barwa Commercial Avenue",
                                addressLocality: "Doha",
                                addressCountry: "QA",
                            },
                        },
                    ]),
                }}
            />
        </>
    );
}
