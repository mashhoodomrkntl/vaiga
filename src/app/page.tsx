import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Vaiga Consultancy | Audit, Tax & Accounting Services in India, UAE & Qatar",
  description:
    "Vaiga Consultancy Services (P) Ltd provides professional auditing, tax advisory, and accounting software implementation (Zoho, Tally, Odoo) across India, UAE, and Qatar.",
  alternates: {
    canonical: "https://www.vaiga.org",
  },
};

export default function Page() {
  return <HomePageClient />;
}
