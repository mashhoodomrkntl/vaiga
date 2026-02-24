"use client";

import {
    ShieldCheck,
    Briefcase,
    FileText,
    FileCheck,
    Search,
    Building2,
    Stamp,
    Calculator,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { ServiceItem } from "@/components/ServicePageLayout";

const services: ServiceItem[] = [
    {
        icon: ShieldCheck,
        title: "Auditing & Assurance",
        description:
            "Comprehensive audit services designed to meet the diverse needs of our clients and ensure regulatory compliance.",
        details: [
            "Internal Audit",
            "Statutory Audit",
            "Financial Audit",
            "System Audit",
            "Due Diligence Audit",
            "Risk Assurance",
        ],
    },
    {
        icon: Briefcase,
        title: "Management Consultancy",
        description:
            "Comprehensive management consulting to enhance business efficiency and foster sustainable growth.",
        details: [
            "Business Strategy",
            "Operational Efficiency",
            "Change Management",
            "Market Analysis",
            "Growth Planning",
        ],
    },
    {
        icon: FileText,
        title: "Tax Advisory & Representation",
        description:
            "Complete tax consultancy in Income Tax, GST, and regulatory representation before authorities.",
        details: [
            "Income Tax Advisory",
            "GST Consultancy",
            "Tax Filing & Returns",
            "Direct & Indirect Tax",
            "Tax Representation",
        ],
    },
    {
        icon: FileCheck,
        title: "Secretarial Compliance",
        description:
            "Full range of secretarial services for ROC and MCA filing requirements ensuring complete compliance.",
        details: [
            "ROC Filings",
            "MCA Compliance",
            "Annual Returns",
            "Board Resolutions",
            "Statutory Registers",
        ],
    },
    {
        icon: Search,
        title: "Business Valuation & Due Diligence",
        description:
            "Thorough assessments of company worth and comprehensive due diligence for informed decisions.",
        details: [
            "Business Valuation",
            "Financial Due Diligence",
            "Profitability Improvement",
            "Capital Restructuring",
            "Feasibility Studies",
        ],
    },
    {
        icon: Building2,
        title: "Business Setup & Closure",
        description:
            "End-to-end services for establishing or closing businesses smoothly and in compliance with regulations.",
        details: [
            "Company Registration",
            "LLP Registration",
            "Import/Export Code",
            "Business Closure",
            "Legal Documentation",
        ],
    },
    {
        icon: Stamp,
        title: "Trade Mark Consultancy",
        description:
            "Comprehensive support to safeguard your brand identity and intellectual property rights.",
        details: [
            "Trademark Registration",
            "Brand Protection",
            "IP Consulting",
            "Trademark Search",
            "Renewal & Maintenance",
        ],
    },
    {
        icon: Calculator,
        title: "Accounting & Bookkeeping",
        description:
            "Meticulous accounting support for accurate financial records and regulatory compliance.",
        details: [
            "Full-cycle Bookkeeping",
            "Financial Reporting",
            "Bank Reconciliation",
            "Payroll Processing",
            "Cash Flow Management",
        ],
    },
];

export default function IndiaServicesClient() {
    return (
        <ServicePageLayout
            country="India"
            tagline="Vaiga Consultancy is your premier financial partner in India. As official Tally and Zoho partners, we provide expert audit, GST compliance, and accounting software solutions tailored for the Indian market from our Kerala headquarters."
            services={services}
        />
    );
}
