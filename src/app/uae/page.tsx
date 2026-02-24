import type { Metadata } from "next";
import HomePageClient from "../HomePageClient";

export const metadata: Metadata = {
    title: "Audit, VAT & Tax Consultancy in Dubai, UAE | Vaiga Consultancy",
    description:
        "Leading VAT consultancy and audit services in Dubai. Official Zoho and Tally implementation partners in the UAE. Expert financial advice for UAE businesses.",
    keywords: [
        "Audit Services Dubai",
        "VAT Consultancy UAE",
        "Zoho Partner Dubai",
        "Tax Consultant UAE",
        "Tally implementation Dubai",
        "Business setup UAE",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/uae",
    },
};

export default function UAEHomePage() {
    return <HomePageClient forcedCountry="UAE" />;
}
