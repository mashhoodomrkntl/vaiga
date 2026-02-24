import type { Metadata } from "next";
import HomePageClient from "../HomePageClient";

export const metadata: Metadata = {
    title: "Audit, Tax & Chartered Accountant Services in India | Vaiga Consultancy",
    description:
        "Professional auditing, GST consultancy, and Tally/Zoho implementation in Kerala, India. Expert financial advisory and chartered accountant services for Indian businesses.",
    keywords: [
        "Chartered Accountant Kerala",
        "Audit Services India",
        "GST Consultancy Kerala",
        "Tally Partner India",
        "Zoho Books Implementation India",
        "Income Tax Filing India",
    ],
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/india",
    },
};

export default function IndiaHomePage() {
    return <HomePageClient forcedCountry="India" />;
}
