import type { Metadata } from "next";
import ServicesLandingClient from "./ServicesLandingClient";

export const metadata: Metadata = {
    title: "Our Global Services | Vaiga Consultancy",
    description: "Explore VAIGA's global auditing, tax consultancy, and business advisory services across India, UAE, and Qatar. Your partner for cross-border financial excellence.",
    alternates: {
        canonical: "https://vaiga-xi.vercel.app/services",
    },
};

export default function ServicesPage() {
    return <ServicesLandingClient />;
}
