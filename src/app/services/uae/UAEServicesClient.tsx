"use client";

import {
    ShieldCheck,
    ClipboardCheck,
    Calculator,
    FileBarChart,
    Receipt,
    FileText,
    FileCheck,
    Briefcase,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceItem } from "@/components/ServicePageLayout";

const services: ServiceItem[] = [
    {
        icon: ShieldCheck,
        title: "Internal Audit",
        description:
            "Independent assurance and consulting activity designed to add value and improve your organization's operations.",
        details: [
            "Operational Audit",
            "Compliance Audit",
            "Financial Controls Review",
            "Process Optimization",
            "Risk Assessment",
        ],
    },
    {
        icon: ClipboardCheck,
        title: "Statutory Audit Support",
        description:
            "Conducted to ensure compliance with legal and regulatory requirements across the UAE.",
        details: [
            "Financial Statement Audit",
            "Regulatory Compliance",
            "Legal Adherence Check",
            "Annual Audit Reports",
            "Standards Verification",
        ],
    },
    {
        icon: Calculator,
        title: "Accounting & Bookkeeping",
        description:
            "Meticulous support for accurate financial records, enabling informed decisions and regulatory compliance.",
        details: [
            "Daily Bookkeeping",
            "Financial Reporting",
            "Bank Reconciliation",
            "Accounts Payable/Receivable",
            "Management Reports",
        ],
    },
    {
        icon: FileBarChart,
        title: "Project Report & Valuation",
        description:
            "Well-crafted project reports crucial for assessing project viability and potential success.",
        details: [
            "Feasibility Studies",
            "Project Cost Analysis",
            "Business Valuation",
            "Investment Analysis",
            "ROI Projections",
        ],
    },
    {
        icon: Receipt,
        title: "GCC VAT Consultancy",
        description:
            "Navigate VAT complexities ensuring your business remains compliant and efficient across the GCC.",
        details: [
            "VAT Registration",
            "VAT Return Filing",
            "VAT Compliance Review",
            "VAT Planning & Strategy",
            "VAT De-registration",
        ],
    },
    {
        icon: FileText,
        title: "Tax Filing",
        description:
            "Simplify corporate tax processes and enhance financial efficiency with our expert filing services.",
        details: [
            "Corporate Tax Filing",
            "Tax Computation",
            "Tax Planning",
            "Compliance Management",
            "Deadline Management",
        ],
    },
    {
        icon: FileCheck,
        title: "Tax Residency Certificate",
        description:
            "Essential for benefiting from tax treaties and avoiding double taxation — simplified application process.",
        details: [
            "TRC Application",
            "Documentation Support",
            "Treaty Benefits Analysis",
            "Renewal Assistance",
            "Advisory Services",
        ],
    },
    {
        icon: Briefcase,
        title: "Management Consultancy",
        description:
            "Comprehensive management consulting designed to enhance business efficiency and foster growth.",
        details: [
            "Strategy Development",
            "Operational Improvement",
            "Financial Advisory",
            "Market Entry Planning",
            "Performance Optimization",
        ],
    },
];

export default function UAEServicesClient() {
    return (
        <ServicePageLayout
            country="UAE"
            tagline="Empowering UAE businesses with precision-driven financial solutions. As official partners of Zoho and Tally, we deliver expert audit, corporate tax, and VAT consultancy services tailored to the UAE's dynamic regulatory landscape."
            services={services}
        />
    );
}
