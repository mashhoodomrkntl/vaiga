import type { Metadata } from "next";
import HomePageClient from "../HomePageClient";

export const metadata: Metadata = {
    title: "Best Zoho Partners & Financial Consultants in Qatar | Vaiga Consultancy",
    description:
        "Top-rated Zoho Books partners and Tally implementation experts in Doha. Leading financial consultancy in Qatar offering audit, tax, and accounting services.",
    keywords: [
        "Zoho Partners Qatar",
        "Financial Consultant Qatar",
        "Best Auditor in Doha",
        "Tally Prime Implementation Qatar",
        "VAT Consultancy Qatar",
        "Accounting Software Qatar",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/qatar",
    },
};

export default function QatarHomePage() {
    return <HomePageClient forcedCountry="Qatar" />;
}
