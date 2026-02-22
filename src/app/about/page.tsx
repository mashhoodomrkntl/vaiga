import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Vaiga Consultancy | Since 2011 — India, UAE & Qatar",
    description:
        "Learn about Vaiga Consultancy Services — our mission, vision, and 13+ years of excellence in audit, tax, and financial consulting across 3 countries.",
    alternates: {
        canonical: "https://vaiga.org/about",
    },
    openGraph: {
        title: "About Vaiga Consultancy | Since 2011 — India, UAE & Qatar",
        description:
            "Our mission, vision, and 13+ years of excellence in audit, tax, and financial consulting.",
        url: "https://vaiga.org/about",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
